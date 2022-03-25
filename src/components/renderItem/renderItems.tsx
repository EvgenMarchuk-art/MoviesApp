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
    <View key={item.index} style={{alignItems:'center', marginTop:24}}>
      <View style={{flexDirection:'column',width:'auto',borderBottomWidth:1,borderColor:'#00d1ff'}}>
        <View style={{alignItems:'center',justifyContent:'flex-start'}}>
          <TouchableOpacity onPress={openInfo}>
            <Text style={{padding:12, fontFamily: 'SourceSansPro-Bold', fontSize:20,color:'white'}}>{item.original_title}</Text>
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity onPress={openInfo}>
            <Image
              style={{height: 260, width: 380, resizeMode:'center'}}
              source={{uri: `${IMG_URL}${item.poster_path}`}}
            />
          </TouchableOpacity>
        </View>
     <View style={{ flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
       <View>
         <Text style={{padding:12, fontFamily: 'SourceSansPro-Bold', fontSize:20,color:'white'}}>Add to favourites </Text>
       </View>
       <View>
         <SwitchButton style={{}} enabled={isFavourite} movie={item} />
       </View>


     </View>
      </View>


    </View>
  );
};
export default RenderItems;
