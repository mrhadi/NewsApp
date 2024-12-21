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
}

export type LocalDataType = {
  newsCategories: string[],
  selectedCategory: NewsCategory,
}

export enum NewsCategory {
  Uncategorized = 'general',
  Business = 'business',
  Entertainment = 'entertainment',
  Health = 'health',
  Science = 'science',
  Sports = 'sports',
  Technology = 'technology'
}

const localData: LocalDataType = {
  newsCategories: [],
  selectedCategory: NewsCategory.Uncategorized,
};

const MainFlowNavigationStack = createNativeStackNavigator();

export const MainFlowContext = React.createContext<MainFlowStateType | null>(
  null
);

const MainFlowState = (navigation, apiService): MainFlowStateType => {
  const resetLocalData = () => {
    localData.newsCategories = Object.keys(NewsCategory);
    localData.selectedCategory = NewsCategory.Uncategorized;
  };

  const init = () => {
    resetLocalData();
  };

  const onSplashScreenDone = () => {
    navigation.navigate('NewsBrowserScreen');
  };

  const getCategories = () => (localData.newsCategories)
  return {
    init,
    onSplashScreenDone,
    getCategories
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

