import React, {useMemo} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {IMG_URL} from '../../servises/const';
import SwitchButton from '../SwithcButton/SwitchButton';
import {useNavigation} from '@react-navigation/native';

const FavoritesList = () => {
  const {navigate}: any = useNavigation();

  const FavoritesState = useSelector(
    (state: RootState) => state.favoritesList.favorites,
  );

  const info = index => {
    navigate('FavoritesInfo', {index});
  };

  const dataItems = useMemo(() => {
    if (!FavoritesState) {
      return [];
    }

    return FavoritesState.map((item, index) => {
      return (
        <View
          key={item.title}
          style={{justifyContent: 'center', paddingTop: 12}}>
          <View
            key={item.index}
            style={{
              flexDirection: 'column',
              width:'auto',borderBottomWidth:1, borderTopWidth:1,borderColor:'#00d1ff'
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity onPress={() => info(index)}>
                <Text
                  style={{
                    padding: 12,
                    fontFamily: 'SourceSansPro-Bold',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems:'center'}}>
              <TouchableOpacity onPress={() => info(index)}>
                <Image
                  style={{height: 240, width: 380, resizeMode:'center'}}
                  source={{uri: `${IMG_URL}${item.poster_path}`}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 12,
                flexDirection:'row',

              }}>
              <View>
                <Text style={{ fontFamily: 'SourceSansPro-Bold', fontSize:20,color:'white'}}> Remove from favorites</Text>
              </View>
              <View>
                <SwitchButton enabled={true} movie={item} />
              </View>

            </View>
          </View>

        </View>
      );
    });
  }, [FavoritesState]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection:'column', alignItems:'center'}}>
        <View>
          <Text style={{ fontFamily: 'SourceSansPro-Bold', fontSize:35,color:'white'}}>Favorites</Text>
        </View>
        <View>
          <ScrollView style={{padding:54, }} showsVerticalScrollIndicator={false}>{dataItems}</ScrollView>
        </View>
      </View>


    </SafeAreaView>
  );
};

export default FavoritesList;
