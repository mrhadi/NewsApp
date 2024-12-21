import * as React from 'react';
import { Text, TouchableOpacity, PressableProps, StyleSheet } from 'react-native';

interface CategoryProps extends PressableProps {
  text: string
  selected: boolean
  onCategoryPress: (category: string) => void
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
});

export const Category = (props: CategoryProps) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: props.selected ? 'orange' : 'lightgrey' }]} onPress={() => props.onCategoryPress(props.text)}>
      <Text style={{ color: props.selected ? 'white' : 'dimgray', fontWeight: props.selected ? 'bold' : 'normal' }}>{props.text}</Text>
    </TouchableOpacity>
  );
};
