import React, {useMemo} from 'react';
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {IMG_URL} from '../../servises/const';
import SwitchButton from '../SwithcButton/SwitchButton';

const FavoritesList = () => {
  const FavoritesState = useSelector(
    (state: RootState) => state.favoritesList.favorites,
  );



  const dataItems = useMemo(() => {
    if (!FavoritesState) {
      return [];
    }

    return FavoritesState.map(item => {
      return (
        <View key={item.title}>
          <SwitchButton enabled={true} movie={item} />
          <Text>{item.title}</Text>
          <Image
            style={{height: 300, width: 300}}
            source={{uri: `${IMG_URL}${item.poster_path}`}}
          />
        </View>)


    });
  }, [FavoritesState]);

  return <SafeAreaView style={{flex: 1}}>
    <ScrollView>
      {dataItems}
    </ScrollView>
  </SafeAreaView>;
};

export default FavoritesList;
