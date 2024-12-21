import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewsBrowserScreen from './Screens/NewsBrowser.screen.tsx';
import SplashScreen from './Screens/Splash.screen';

import ApiService from './Services/api';
import { navigationRef } from './routing';
import { logConsole, logAPIError } from './Services/LogTracker';

export type MainFlowStateType = {
  onSplashScreenDone: Function
  init: Function
  getCategories: Function
  getSelectedCategory: Function
  setCategory: Function
  getNewsData: Function
  getNews: Function
}

export type NewsType = {
  author: string
  title: string
  description: string
  url: string
  source: string
  image: string
  category: NewsCategory
  language: string
  country: string
  published_at: string
}

export type LocalDataType = {
  newsCategories: string[],
  selectedCategory: NewsCategory,
  selectedCategoryData: Array<NewsType>
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
  selectedCategoryData: [],
};

const MainFlowNavigationStack = createNativeStackNavigator();

export const MainFlowContext = React.createContext<MainFlowStateType | null>(
  null
);

const MainFlowState = (navigation, apiService): MainFlowStateType => {
  const resetLocalData = () => {
    localData.newsCategories = Object.keys(NewsCategory);
    localData.selectedCategory = NewsCategory.General;
    localData.selectedCategoryData = [];
  };

  const init = () => {
    resetLocalData();
    getNewsData(localData.selectedCategory);
  };

  const onSplashScreenDone = () => {
    navigation.navigate('NewsBrowserScreen');
  };

  const getCategories = () => (localData.newsCategories);

  const getSelectedCategory = () => (localData.selectedCategory);

  const setCategory = (category: NewsCategory) => {
    logConsole('Category has set to: ' + category);

    getNewsData(category);
    localData.selectedCategory = category;
  };

  const getNewsData = async (category: NewsCategory) => {
    try {
      const res = await apiService.getNews(category.toLowerCase());
      const data = res?.data?.data;

      // Filter news with image
      localData.selectedCategoryData = data.filter(item => item.image !== null);
      logConsole('News read: ' + localData.selectedCategoryData.length);
    } catch (err) {
      logAPIError(err);
    }
  };

  const getNews = () => (localData.selectedCategoryData)
  return {
    init,
    onSplashScreenDone,
    getCategories,
    getSelectedCategory,
    setCategory,
    getNewsData,
    getNews,
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

