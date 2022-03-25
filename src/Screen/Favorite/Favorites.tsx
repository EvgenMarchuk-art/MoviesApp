import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {SafeAreaView} from 'react-native';
import FavoritesList from '../../components/favorites/FavoritesList';

const Favorites = () => {
  return (
    <LinearGradient style={{flex: 1}} colors={['#009dff', '#000b24']}>
      <SafeAreaView style={{flex: 1, alignItems:'center'}}>
        <FavoritesList />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Favorites;
