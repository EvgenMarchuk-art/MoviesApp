import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View, Text, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {loadSearch} from '../../store/reducers/SearchSlise';

const Search = () => {
  const dispatch = useDispatch();
  const {navigate}: any = useNavigation();
  const [searchKey, setSearchKey] = useState('');

  const searchMovies = (value: string) => {
    setSearchKey(value);
  };

  const onSearchPress = async () => {
    try {
      const result = await dispatch(
        loadSearch({
          search: searchKey,
        }),
      ).unwrap();

      if (result.length) {
        navigate('SearchList');
      } else {
        Alert.alert('Nothing was found');
      }
    } catch (e) {}
  };

  return (
    <View  style={{flexDirection:'row', alignItems:'center',justifyContent:'flex-start',borderWidth: 1, borderColor: '#00d1ff', borderRadius: 18}}>
      <View style={{flexGrow: 1,borderRadius: 18,}}>
        <TextInput
          placeholder={'Please start searching'}
          placeholderTextColor={'white'}
          style={{
            padding: 12,
            fontFamily:'SourceSansPro-Bold',
            color:'white'

          }}
          onChangeText={searchMovies}
          value={searchKey}
        />
      </View>
      <View style={{backgroundColor:'#00d1ff',padding: 12,borderRadius: 18}}>
        <TouchableOpacity onPress={onSearchPress}>
          <Text style={{fontFamily:'SourceSansPro-Bold'}}>Search</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Search;
