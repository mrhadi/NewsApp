import * as React from 'react';
import { Text, TouchableOpacity, PressableProps } from 'react-native';

interface CategoryProps extends PressableProps {
  text: string
  selected: boolean
}

export const Category = (props: CategoryProps) => {
  return (
    <TouchableOpacity style={{
      height: '40',
      borderRadius: 7,
      backgroundColor: props.selected ? 'orange' : 'grey',
      paddingVertical: 5,
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text style={{}}>{props.text}</Text>
    </TouchableOpacity>
  );
};
