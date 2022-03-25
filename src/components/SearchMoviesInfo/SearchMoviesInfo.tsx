import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {IMG_URL, YOUTUBE} from '../../servises/const';
import {fetchTrailer} from '../../api/MoviesApi';
import {useNavigation} from '@react-navigation/native';

const SearchMoviesInfo = ({route}: any) => {
  const [info, setInfo] = useState(undefined);

  const searchMoviesInfo = useSelector(
    (state: RootState): any => state.searchList.search[route.params.index],
  );

  useEffect(() => {
    const loadTrailer = async () => {
      try {
        const {data} = await fetchTrailer(searchMoviesInfo.id);
        setInfo(data.results);
      } catch (e) {
        console.log(e, 'error');
      }
    };

    if (!info && searchMoviesInfo.id) {
      loadTrailer();
    }
  }, [searchMoviesInfo, info]);

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
    navigate('SearchList');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity onPress={goBack}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openVideo}>
        <Text>Watch the trailer</Text>
      </TouchableOpacity>
      <Image
        style={{width: 400, height: 400}}
        source={{uri: `${IMG_URL}${searchMoviesInfo.backdrop_path}`}}
      />
      <Text style={{fontFamily: 'SourceSansPro-Bold'}}>
        {searchMoviesInfo.original_title}
      </Text>
      <Text>{searchMoviesInfo.release_date}</Text>
      <Text>{searchMoviesInfo.overview}</Text>
      <Text>{searchMoviesInfo.vote_average}</Text>
    </SafeAreaView>
  );
};

export default SearchMoviesInfo;
