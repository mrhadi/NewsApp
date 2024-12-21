import * as React from 'react';
import {View, Text, ScrollView, ViewProps, StyleSheet} from 'react-native';

import { Category } from './Category.component';
import { NewsCategory } from '../flow';

interface HeaderProps extends ViewProps {
  categories: string[]
  selectedCategory: NewsCategory
  onCategoryPress: (category: string) => void
}

const styles = StyleSheet.create({
  container: {
    height: 110,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    shadowColor: 'black',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
});

export const Header = (props: HeaderProps) => {

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: '', fontSize: 20 }}>{'News'}</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{ marginTop: 20 }}
      >
        {props.categories.map((key, index) => (
          <Category
            id={key + index} text={key}
            selected={props.selectedCategory === key}
            key={key + index}
            onCategoryPress={props.onCategoryPress}
          />
        ))}
      </ScrollView>
    </View>
  );
};
