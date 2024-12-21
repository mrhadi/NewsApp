import React, { useContext, useState, useRef } from 'react';
import { View, FlatList } from 'react-native';

import { Header } from '../Components/Header.component';
import { NewsTile } from '../Components/NewsTile.component';

import { MainFlowContext, MainFlowStateType, NewsCategory } from '../flow';

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

  const handleOnNewsPress = () => {

  };

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
        renderItem={({ item }) => (<NewsTile newsData={item} onNewsPress={handleOnNewsPress} />)}
      />
    </View>
  );
}

export default NewsBrowserScreen;
