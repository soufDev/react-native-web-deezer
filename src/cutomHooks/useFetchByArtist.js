import React from 'react';
import { seachByArtist } from '../api'

export function useFetchByArtist(artist) {
    const [result, setResult] = React.useState([]);
    React.useEffect(() => {
      seachByArtist(artist).then(result => setResult(result));
    }, []);
    return result;
}
