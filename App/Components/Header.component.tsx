import * as React from 'react';
import { View, Text, ScrollView, ViewProps } from 'react-native';

import { Category } from './Category.component';

interface HeaderProps extends ViewProps {
  categories: string[]
}

export const Header = (props: HeaderProps) => {
  return (
    <View style={{
      height: '100',
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
    }}>
      <Text style={{}}>{'News'}</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        {props.categories.map((key, index) => (<Category id={key + index} text={key} selected={false} />))}
      </ScrollView>
    </View>
  );
};
