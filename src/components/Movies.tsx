import React from 'react';
import {FunctionComponent} from 'react';
import {SafeAreaView} from 'react-native';

import MoviesList from './MoviesList/Movies';

const Movies: FunctionComponent = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MoviesList />
    </SafeAreaView>
  );
};

export default Movies;
