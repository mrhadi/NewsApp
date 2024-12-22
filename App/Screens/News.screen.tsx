import React, {useContext, useState} from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';

import { MainFlowContext, MainFlowStateType } from '../flow';
import { NewsBrowser } from '../constants';
import { Author } from '../Components/Author.component';
import { Favourites } from '../Components/Favourites.component';

const styles = StyleSheet.create({
  newsTile: {
    position: 'absolute',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    top: NewsBrowser.News_Image_Height - 20,
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    padding: 30,
  },
});

function NewsScreen() {
  const mainFlow: MainFlowStateType = useContext(MainFlowContext);

  const [isFavourite, setIsFavourite] = useState(false);

  const newsData = mainFlow.getSelectedNews();

  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: newsData.image }} style={{ width: '100%', height: NewsBrowser.News_Image_Height }} />
      <View style={styles.newsTile}>
        <Favourites selected={isFavourite} style={{ alignSelf: 'flex-end', marginBottom: 20 }} onPress={() => setIsFavourite(!isFavourite)} />
        <Text numberOfLines={3} style={{ color: 'seagreen', fontSize: 24, fontWeight: '400' }}>{newsData.title}</Text>
        {newsData?.author && (<Author name={newsData.author} style={{ marginVertical: 20 }} />)}
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <Text style={{ color: 'darkslategrey', fontSize: 12, marginTop: 5 }}>{newsData.description}</Text>
        </ScrollView>
      </View>
    </View>
  );
}

export default NewsScreen;
