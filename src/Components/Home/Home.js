import React from 'react';
import { View, StyleSheet } from 'react-native';
import { seachByArtist } from '../../api';
import { useInput } from '../../cutomHooks'
import { SearchInput } from '../SearchInput';
import { SearchResult } from '../SearchResult';
import Footer from '../Footer';

function useLocalStorage(key) {
  let localStorageItem;
  if (key) {
    localStorageItem = localStorage[key];
  }
  const [localState, updateLocalState] = React.useState(localStorageItem);
  function syncLocalStorage(event) {
    if (event.key === key) {
      updateLocalState(event.newValue);
    }
  }
  React.useEffect(() => {
    window.addEventListener("storage", syncLocalStorage);
    return () => {
      window.removeEventListener("storage", syncLocalStorage);
    };
  }, []);
  return localState;
}

export const Home = React.memo((props) => {
    const [dataResponse, setDataResponse] = React.useState([]);
  const search = useInput('');
  const onSubmit = ({ target }) => {
    seachByArtist(target.value).then(response => { setDataResponse(response.data) });
  }
  return (
    <View style={styles.app}>
      <View style={styles.Header} />
      <SearchInput {...search} onSubmit={onSubmit} />
      <SearchResult tracks={dataResponse} navigation={props.navigation} />
      <Footer />
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
  