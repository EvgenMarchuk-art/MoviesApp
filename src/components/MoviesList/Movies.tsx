import React from 'react';
import {SafeAreaView} from 'react-native';
import MoviesSection from '../MoviesSection/MoviesSection';
import LinearGradient from 'react-native-linear-gradient';

const MoviesList = () => {
  return (
    <LinearGradient style={{flex: 1}} colors={['#009dff', '#000b24']}>
      <SafeAreaView style={{flex: 1, padding: 24}}>
        <MoviesSection />
      </SafeAreaView>
    </LinearGradient>
  );
};
export default MoviesList;
