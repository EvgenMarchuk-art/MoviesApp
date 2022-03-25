import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {fetchTrailer} from '../../api/MoviesApi';
import {useNavigation} from '@react-navigation/native';
import {IMG_URL, YOUTUBE} from '../../servises/const';
import {
  Image,
  Linking,
  SafeAreaView,
  Text,
  TouchableOpacity, View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const FavoritesInfo = ({route}: any) => {
  const [info, setInfo] = useState(undefined);

  const FavoritesState = useSelector(
    (state: RootState) => state.favoritesList.favorites[route.params.index],
  );

  useEffect(() => {
    const loadTrailer = async () => {
      try {
        const {data} = await fetchTrailer(FavoritesState.id);
        setInfo(data.results);
      } catch (e) {
        console.log(e, 'error');
      }
    };

    if (!info && FavoritesState.id) {
      loadTrailer();
    }
  }, [FavoritesState, info]);

  const {navigate}:any = useNavigation();

  const supportedURL = useMemo(() => {
    if (!info) {
      return [];
    }

    return info.map(item => {
      return YOUTUBE + item.key;
    });
  }, [info]);

  const item = supportedURL[Math.floor(Math.random() * supportedURL.length)];

  const openVideo = useCallback(async () => {
    const supported = await Linking.canOpenURL(item);
    if (supported) {
      await Linking.openURL(item);
    } else {
      console.log(`Don't know how to open this URL: ${item}`);
    }
  }, [item]);

  const goBack = () => {
    navigate('Favorites');
  };

  return (
    // <LinearGradient style={{flex: 1}} colors={['#009dff', '#000b24']}>
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity onPress={goBack}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <View style={{backgroundColor:'red'}}>
        <Image
          style={{width:'100%', height: 200, resizeMode: 'contain'}}
          source={{uri: `${IMG_URL}${FavoritesState.backdrop_path}`}}
        />
      </View>

      <TouchableOpacity onPress={openVideo}>
        <Text>Watch the trailer</Text>
      </TouchableOpacity>

      <Text style={{fontFamily: 'SourceSansPro-Bold'}}>
        {FavoritesState.original_title}
      </Text>
      <Text>{FavoritesState.release_date}</Text>
      <Text>{FavoritesState.overview}</Text>
      <Text>{FavoritesState.vote_average}</Text>
    </SafeAreaView>
    // </LinearGradient>
  );
};

export default FavoritesInfo;
