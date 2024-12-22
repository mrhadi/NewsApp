import React, { useContext, useState, useRef } from 'react';
import { View, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { Header } from '../Components/Header.component';
import { NewsTile } from '../Components/NewsTile.component';

import {MainFlowContext, MainFlowStateType, NewsCategory, NewsType} from '../flow';

function NewsBrowserScreen() {
  const mainFlow: MainFlowStateType = useContext(MainFlowContext);

  const news = mainFlow.getNews();
  const [category, setCategory] = useState<NewsCategory>(mainFlow.getSelectedCategory());
  const flatListRef = useRef<FlatList>(null);

  const setSelectedCategory = (category: NewsCategory) => {
    mainFlow.setCategory(category);
    setCategory(category);
    flatListRef?.current?.scrollToOffset({ offset: 0, animated: true });
  };

  const handleOnNewsPress = (item: NewsType) => {
    mainFlow.onNewsPress(item);
  };

  useFocusEffect(
    React.useCallback(() => {
    }, [])
  );

  return (
    <View>
      <Header
        categories={mainFlow.getCategories()}
        selectedCategory={category}
        onCategoryPress={category => setSelectedCategory(category)}
      />
      <FlatList
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={news}
        renderItem={({ item }) => (<NewsTile newsData={item} onNewsPress={() => handleOnNewsPress(item)} />)}
        ListFooterComponent={<View style={{ margin: 100 }} />}
      />
    </View>
  );
}

export default NewsBrowserScreen;
