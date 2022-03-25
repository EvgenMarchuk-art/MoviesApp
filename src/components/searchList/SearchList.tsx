import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import LinearGradient from 'react-native-linear-gradient';
import {IMG_URL} from '../../servises/const';
import {useNavigation} from '@react-navigation/native';

const SearchList = () => {
  const {navigate}: any = useNavigation();
  const searchList = useSelector((state: RootState) => state.searchList.search);

  const keyExtractor = (item: any) => {
    return item.id;
  };

  const info = index => {
    navigate('SearchMoviesInfo', {index});
  };

  const goBack = () => {
    navigate('Main');
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity onPress={() => info(index)}>
          <Text> {item.original_title}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => info(index)}>
          <Image
            style={{width: 400, height: 400}}
            source={{uri: `${IMG_URL}${item.backdrop_path}`}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <LinearGradient style={{flex: 1}} colors={['#009dff', '#000b24']}>
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity onPress={goBack}>
          <Text>Go Back</Text>
        </TouchableOpacity>
        <FlatList
          data={searchList}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SearchList;
