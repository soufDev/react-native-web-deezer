import React from 'react';
import { View, StyleSheet } from 'react-native';
import { seachByArtist } from '../../api';
import { useInput, useFetchByArtist } from '../../cutomHooks'
import { SearchInput } from '../SearchInput';
import { SearchResult } from '../SearchResult';

export const Home = React.memo((props) => {
    const [dataResponse, setDataResponse] = React.useState([]);
  const search = useInput('');
  const onSubmit = ({ target }) => {
    seachByArtist(target.value).then(response => { console.log(response.data); setDataResponse(response.data) });
  }
  const searchResult = useFetchByArtist('eminem');
  return (
    <View style={styles.app}>
      <View style={styles.Header} />
      <SearchInput {...search} onSubmit={onSubmit} />
      <SearchResult tracks={searchResult.data} />
      <View style={styles.Footer} />
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
    Footer: {
    }
});
  