import * as React from 'react';
import { Text, TouchableOpacity, PressableProps, StyleSheet, ViewStyle } from 'react-native';

import { IconFavourite } from '../Assets/Icons/icon-favourite';
import { IconFavouriteFill } from '../Assets/Icons/icon-favourite-fill';

interface FavouritesProps extends PressableProps {
  style?: ViewStyle
  selected: boolean
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export const Favourites = (props: FavouritesProps) => {
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress}>
      <Text style={{ color: 'chocolate', fontWeight: 'bold', marginRight: 5 }}>{'Add to favourites'}</Text>
      {props.selected ? <IconFavouriteFill /> : <IconFavourite />}
    </TouchableOpacity>
  );
};
