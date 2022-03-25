import React from 'react';
import { Image,TouchableOpacity } from "react-native";
import {useDispatch} from 'react-redux';
import {
  addFavourite,
  removeFavourite,
} from '../../store/reducers/FavoritesSlise';

import GreyIcon from '../../assets/png/GreyIcon.png';
import RedIcon from '../../assets/png/RedIcon.png';

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
  {!enabled ? <Image source={GreyIcon} /> : <Image source={RedIcon} />}
  </TouchableOpacity>

  );
};

export default SwitchButton;
