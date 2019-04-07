import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { seachByArtist, searchByPage } from '../../api';
import { useInput } from '../../cutomHooks'
import { SearchInput } from '../SearchInput';
import { SearchResult } from '../SearchResult';
import Footer from '../Footer';

const reducer = (state, { type, tracks, nextPage, prevPage }) => {
  switch (type) {
    case 'INIT':
      return {
        tracks,
        nextPage,
        prevPage,
      };
    default: return state;
  }
}

export const Home = React.memo((props) => {
  const initialState = localStorage.getItem('state') === null ?
  {
    tracks: [],
    nextPage: null,
    prevPage: null,
  }: JSON.parse(localStorage.getItem('state'));
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const search = useInput(localStorage.getItem('artist') === null ? '': localStorage.getItem('artist'));
  const loadData = (response) => {
    dispatch({
      type: 'INIT',
      tracks: response.data,
      prevPage: response.prev,
      nextPage: response.next
    })
  }
  const onSubmit = ({ target }) => {
    localStorage.setItem('artist', target.value);
    seachByArtist(target.value)
      .then(response => loadData(response));
  }

  const onNextPress = React.useCallback(() => {
    const url = state.nextPage.replace('https://api.deezer.com/', '');
    searchByPage(url).then(response => loadData(response));
  }, [state.nextPage]);
  const onPrevPress = React.useCallback(() => {
    const url = state.prevPage.replace('https://api.deezer.com/', '');
    searchByPage(url).then(response => loadData(response));
  }, [state.prevPage]);
  
  React.useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state.prevPage, state.nextPage]);
  
  return (
    <View style={styles.app}>
      <View style={styles.Header} />
      <SearchInput {...search} onSubmit={onSubmit} />
      <SearchResult tracks={state.tracks} navigation={props.navigation} />
      {!(state.nextPage === null && state.prevPage === null) && 
        <Footer>
          <Button
            disabled={state.prevPage == null || state.prevPage === undefined}
            title='previous'
            onPress={onPrevPress}
            color='lightblue'
          />
          <Button
            disabled={state.nextPage === null || state.nextPage === undefined} 
            title='next' 
            onPress={onNextPress}
            color='lightblue'
          />
        </Footer>
      }
    </View>
  );
})


const styles = StyleSheet.create({
    app: {
      flex: 1
    },
    searchInput: {
      padding: 5,
      fontSize: 20
    },
    Header: {
      height: 50,
      backgroundColor: 'lightblue',
    },
    FooterButton: {
      width: 30,
      backgroundColor: 'red'
    }
});
  