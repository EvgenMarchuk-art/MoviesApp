import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Movies from '../components/Movies';
import {TouchableOpacity} from 'react-native';
import MainStyle from './MainStyle';
import Home from '../assets/svg/Home.svg';
import HomeDefault from '../assets/svg/HomeDefault.svg';
import Statistics from '../assets/svg/Statistics.svg';
import StatisticsDefault from '../assets/svg/StatisticsDefault.svg';
import FavoritesList from '../components/favorites/FavoritesList';

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
                {selected ? <Home /> : <HomeDefault />}
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
                {selected ? <Statistics /> : <StatisticsDefault />}
              </TouchableOpacity>
            );
          },
        }}
        name="Favorites"
        component={FavoritesList}
      />
    </Tab.Navigator>
  );
};
export default ButtonNavigation;
