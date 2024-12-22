import * as React from 'react';
import {Text, StyleSheet, View, ViewProps} from 'react-native';

interface AuthorProps extends ViewProps {
  name: string
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    marginRight: 10,
  },
  authorName: {
    color: 'darkslategrey',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export const Author = (props: AuthorProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <Text numberOfLines={2} style={styles.authorName}>{props.name.charAt(0).toUpperCase()}</Text>
      </View>
      <Text numberOfLines={2} style={{ color: 'seagreen', fontSize: 18 }}>{props.name}</Text>
    </View>
  );
};

