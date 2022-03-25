import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Main from './BottomNav';
import MoviesInfo from '../components/MoviesInfo/MoviesInfo';

const MainStack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{headerShown: false}}
      >
        <MainStack.Screen name="Main" component={Main} />
        <MainStack.Screen name={'MoviesInfo'} component={MoviesInfo} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
