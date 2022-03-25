import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {IMG_URL, YOUTUBE} from '../../servises/const';
import {useNavigation} from '@react-navigation/native';
import {fetchTrailer} from '../../api/MoviesApi';

const MoviesInfo = ({route}: any) => {
  const [info, setInfo] = useState(undefined);

  const moviesInfo = useSelector(
    (state: RootState): any => state.moviesList.movies[route.params.index],
  );

  useEffect(() => {
    const loadTrailer = async () => {
      try {
        const {data} = await fetchTrailer(moviesInfo.id);
        setInfo(data.results);
      } catch (e) {
        console.log(e, 'error');
      }
    };

    if (!info && moviesInfo.id) {
      loadTrailer();
    }
  }, [moviesInfo, info]);

  const {navigate}: any = useNavigation();

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
    navigate('Main');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity onPress={goBack}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <Image
        style={{flex: 1, width: 400, height: 400}}
        source={{uri: `${IMG_URL}${moviesInfo.backdrop_path}`}}
      />
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={openVideo}>
          <Text>Watch the trailer</Text>
        </TouchableOpacity>
        <Text style={{fontFamily: 'SourceSansPro-Bold'}}>
          {moviesInfo.original_title}
        </Text>
        <Text>{moviesInfo.release_date}</Text>
        <Text>{moviesInfo.overview}</Text>
        <Text>{moviesInfo.vote_average}</Text>
      </View>
    </SafeAreaView>
  );
};

export default MoviesInfo;
