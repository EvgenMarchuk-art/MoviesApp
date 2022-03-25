import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native';
import MainStyle from './MainStyle';
import MovieIconDefault from '../assets/svg/MovieIconDefault.svg';
import MovieIcon from '../assets/svg/MovieIcon.svg';
import BlackStar from '../assets/svg/BlackStar.svg';
import BlueStar from '../assets/svg/BlueStar.svg';
import Favorites from '../Screen/Favorite/Favorites';
import Movies from '../Screen/Movies/Movies';

const Tab = createBottomTabNavigator();

const ButtonNavigation = () => {
  const buttonStyle = MainStyle();

  return (
    <Tab.Navigator
      initialRouteName="HomeInScreen"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        lazy: true,
      }}>
      <Tab.Screen
        name="MoviesList"
        component={Movies}
        options={{
          tabBarButton: ({onPress, accessibilityState}) => {
            const {selected}: any = accessibilityState;
            return (
              <TouchableOpacity style={buttonStyle.home} onPress={onPress}>
                {selected ? <MovieIcon style={{width: 32, height: 24}} /> : <MovieIconDefault  style={{width: 38, height: 24}}/>}
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        options={{
          tabBarButton: ({onPress, accessibilityState}) => {
            const {selected}: any = accessibilityState;
            return (
              <TouchableOpacity style={buttonStyle.home} onPress={onPress}>
                {selected ?<BlueStar style={{width: 24, height: 24}}/>  : <BlackStar style={{width: 24, height: 24}} />
                }
              </TouchableOpacity>
            );
          },
        }}
        name="Favorites"
        component={Favorites}
      />
    </Tab.Navigator>
  );
};
export default ButtonNavigation;
