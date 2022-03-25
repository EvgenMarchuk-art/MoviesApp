import React from 'react';
import { Image,TouchableOpacity } from "react-native";
import {useDispatch} from 'react-redux';
import {
  addFavourite,
  removeFavourite,
} from '../../store/reducers/FavoritesSlise';

import Black2Star from '../../assets/svg/Black2Star.svg';
import GoldStar from '../../assets/png/GoldStar.png';

const SwitchButton = ({enabled = false, movie}: any) => {
  const dispatch = useDispatch();
  const toggleSwitch = () => {
    if (!enabled) {
      dispatch(addFavourite(movie));
    } else {
      dispatch(removeFavourite(movie));
    }
  };
  return (
  <TouchableOpacity onPress={toggleSwitch}>
  {!enabled ? <Black2Star style={{paddingRight:12}}/> : <Image source={GoldStar}  style={{paddingRight:12}}/>}
  </TouchableOpacity>

  );
};

export default SwitchButton;
