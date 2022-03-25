import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import SwitchButton from '../SwithcButton/SwitchButton';
import {IMG_URL} from '../../servises/const';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

import {useNavigation} from '@react-navigation/native';

const RenderItems = ({item, index}) => {
  const {navigate}: any = useNavigation();

  const isFavourite = useSelector((state: RootState) =>
    state.favoritesList.favorites.some(fav => fav.id === item.id),
  );

  const openInfo = () => {
    navigate('MoviesInfo', {index});
  };

  return (
    <View key={item.index} style={{paddingLeft: 24, paddingRight: 24}}>
      <TouchableOpacity onPress={openInfo}>
        <Text style={{fontFamily: 'SourceSansPro-Bold'}}>{item.original_title}</Text>
      </TouchableOpacity>
      <SwitchButton enabled={isFavourite} movie={item} />
      <TouchableOpacity onPress={openInfo}>
        <Image
          style={{height: 300, width: 300}}
          source={{uri: `${IMG_URL}${item.poster_path}`}}
        />
      </TouchableOpacity>
    </View>
  );
};
export default RenderItems;
