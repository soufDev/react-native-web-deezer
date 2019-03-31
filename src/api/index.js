import axios from './axios';

const { CancelToken } = axios;

let cancel;

const cancellation = () => ({
    cancelToken: new CancelToken(function executor(canceller) {
        cancel = canceller;
    })
});

export const seachByArtist = async (artist) => {
    const response = await axios.get(`search?q=${artist}`, cancellation);
    return response.data;
};

export const seachByArtistAbort = () => cancel('Searcg By Artist Abort');

export { cancel as ApiCallAbort };
