import React from 'react';
import './App.css';

import { StyleSheet, TextInput, View } from 'react-native';
import styled from 'styled-components';

import { seachByArtist } from './api';
import { SearchInput } from './Components/SearchInput';
import { SearchResult } from './Components/SearchResult';

function useInput(initValue) {
  const [value, setValue] = React.useState(initValue);
  return {
    value,
    onChange: (text) => setValue(text)
  }
}

const styles = StyleSheet.create({
  app: {
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
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
    position: 'fixed',
    left: 0,
    bottom: 0,
    backgroundColor: 'lightblue',
  }
});

function useFetchByArtist(artist) {
  const [result, setResult] = React.useState([]);
  React.useEffect(() => {
    seachByArtist(artist).then(result => setResult(result));
  }, []);
  return result;
}

function App() {
  const [dataResponse, setDataResponse] = React.useState([]);
  const search = useInput('');
  const onSubmit = ({ target }) => {
    seachByArtist('eminem').then(response => { console.log(response.data); setDataResponse(response.data) });
  }
  const searchResult = useFetchByArtist('eminem');
  return (
    <View style={styles.app}>
      <View style={styles.Header} />
      <SearchInput {...search} onSubmit={onSubmit} />
      <SearchResult tracks={searchResult.data} />
      {/* {dataResponse.map((data, index) => (
        <figure key={index}>
          <figcaption>Listen to the T-Rex:</figcaption>
          <audio
              controls
              src={data.preview}>
                  Your browser does not support the
                  <code>audio</code> element.
          </audio>
        </figure>
      ))} */}
      <View style={styles.Footer} />
    </View>
  );
}

export default App;
