import * as React from 'react';
import { Text, TouchableOpacity, PressableProps, StyleSheet, Image, View } from 'react-native';
import { NewsType } from '../flow';

interface NewsTileProps extends PressableProps {
  newsData: NewsType
  onNewsPress: () => void
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: 400,
    borderRadius: 11,
    marginHorizontal: 30,
    marginTop: 30,
    alignItems: 'center',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.5,
    shadowColor: 'black',
    overflow: 'hidden',
  },
});

export const NewsTile = (props: NewsTileProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onNewsPress}>
      <Image source={{ uri: props.newsData.image }} style={{ width: '100%', height: 200, marginBottom: 5 }} />
      <View style={{ margin: 10, flex: 1 }}>
        <Text style={{ color: 'seagreen', fontSize: 18 }}>{props.newsData.title}</Text>
        <Text numberOfLines={5} style={{ color: 'darkslategrey', fontSize: 12, marginTop: 5, }}>{props.newsData.description}</Text>
      </View>
    </TouchableOpacity>
  );
};
