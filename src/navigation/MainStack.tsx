import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Main from './BottomNav';
import MoviesInfo from '../components/MoviesInfo/MoviesInfo';
import SearchList from '../components/searchList/SearchList';
import SearchMoviesInfo from '../components/SearchMoviesInfo/SearchMoviesInfo';
import FavoritesInfo from '../components/FavoritesInfo/FavoritesInfo';
import FavoritesList from "../components/favorites/FavoritesList";

const MainStack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Main" component={Main} />
        <MainStack.Screen name={'MoviesInfo'} component={MoviesInfo} />
        <MainStack.Screen name={'SearchList'} component={SearchList} />
        <MainStack.Screen name={'SearchMoviesInfo'} component={SearchMoviesInfo} />
        <MainStack.Screen name={'Favorit'} component={FavoritesList} />
        <MainStack.Screen name={'FavoritesInfo'} component={FavoritesInfo} />

      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
