import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewsBrowserScreen from './Screens/NewsBrowser.screen.tsx';
import SplashScreen from './Screens/Splash.screen';

import ApiService from './Services/api';
import { navigationRef } from './routing';
import { logConsole } from './Services/LogTracker';

export type MainFlowStateType = {
  onSplashScreenDone: Function
  init: Function
  getCategories: Function
  getSelectedCategory: Function
  setCategory: Function
}

export type LocalDataType = {
  newsCategories: string[],
  selectedCategory: NewsCategory,
}

export enum NewsCategory {
  General = 'general',
  Business = 'business',
  Entertainment = 'entertainment',
  Health = 'health',
  Science = 'science',
  Sports = 'sports',
  Technology = 'technology'
}

const localData: LocalDataType = {
  newsCategories: [],
  selectedCategory: NewsCategory.General,
};

const MainFlowNavigationStack = createNativeStackNavigator();

export const MainFlowContext = React.createContext<MainFlowStateType | null>(
  null
);

const MainFlowState = (navigation, apiService): MainFlowStateType => {
  const resetLocalData = () => {
    localData.newsCategories = Object.keys(NewsCategory);
    localData.selectedCategory = NewsCategory.General;
  };

  const init = () => {
    resetLocalData();
  };

  const onSplashScreenDone = () => {
    navigation.navigate('NewsBrowserScreen');
  };

  const getCategories = () => (localData.newsCategories);

  const getSelectedCategory = () => (localData.selectedCategory);

  const setCategory = (category: NewsCategory) => {
    logConsole('Category has set to: ' + category);
    localData.selectedCategory = category;
  };

  return {
    init,
    onSplashScreenDone,
    getCategories,
    getSelectedCategory,
    setCategory,
  };
};

export const MainFlow = () => {
  const navigation = navigationRef;
  const apiService = ApiService();
  const mainFlowState: MainFlowStateType = MainFlowState(navigation, apiService);

  mainFlowState.init();

  return (
    <MainFlowContext.Provider value={mainFlowState}>
      <MainFlowNavigationStack.Navigator initialRouteName="SplashScreen">
        <MainFlowNavigationStack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <MainFlowNavigationStack.Screen
          name="NewsBrowserScreen"
          component={NewsBrowserScreen}
          options={{ headerShown: false }}
        />
      </MainFlowNavigationStack.Navigator>
    </MainFlowContext.Provider>
  );
};

