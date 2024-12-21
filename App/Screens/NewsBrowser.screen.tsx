import React, {useContext, useState} from 'react';
import { View } from 'react-native';

import { Header } from '../Components/Header.component';

import {MainFlowContext, MainFlowStateType, NewsCategory} from '../flow';

function NewsBrowserScreen() {
  const mainFlow: MainFlowStateType = useContext(MainFlowContext);

  const [category, setCategory] = useState<NewsCategory>(mainFlow.getSelectedCategory());

  const setSelectedCategory = (category: NewsCategory) => {
    mainFlow.setCategory(category);
    setCategory(category)
  };

  return (
    <View style={{ flex: 1, paddingVertical: 10 }}>
      <Header
        categories={mainFlow.getCategories()}
        selectedCategory={category}
        onCategoryPress={category => setSelectedCategory(category)}
      />
    </View>
  );
}

export default NewsBrowserScreen;
