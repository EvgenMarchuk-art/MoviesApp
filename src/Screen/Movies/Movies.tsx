import React from 'react';
import { SafeAreaView, View } from "react-native";
import MoviesSection from '../../components/MoviesSection/MoviesSection';
import LinearGradient from 'react-native-linear-gradient';
import Search from '../../components/Search/Search';

const MoviesList = () => {
  return (
    <LinearGradient style={{flex: 1}} colors={['#009dff', '#000b24']}>
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1 ,padding:54}}>
        <Search />
        <MoviesSection/>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default MoviesList;
