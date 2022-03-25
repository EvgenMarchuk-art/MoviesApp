import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {loadMovies} from '../../store/reducers/MoviesSlise';
import {FlatList, View} from 'react-native';
import RenderItems from '../renderItem/renderItems';

const MoviesSection = () => {
  const screenState = useSelector(
    (state: RootState) => state.moviesList.movies,
  );

  const dispatch = useDispatch();
  const loadData = useCallback(() => {
    dispatch(loadMovies({}));
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const keyExtractor = (item: any) => {
    return item.id;
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={screenState}
        keyExtractor={keyExtractor}
        renderItem={(props) => <RenderItems {...props} />}
        onEndReached={loadData}
        maxToRenderPerBatch={10}
        initialNumToRender={10}
        removeClippedSubviews={true}
      />
    </View>
  );
};

export default MoviesSection;
