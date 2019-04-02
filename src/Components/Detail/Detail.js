import React from 'react'
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import { findTrackById } from '../../api';

const useFetchDetail = (id) => {
    const [detail, setDetail] = React.useState(null);
    React.useEffect(() => {
        findTrackById(id).then(trackDetail => setDetail(trackDetail));
    }, [id])
    return detail;
}
export const Detail = React.memo((props) => {
    const trackId = props.navigation.getParam('trackId');
    const detail = useFetchDetail(trackId);
    console.log({ detail });
    if (detail) {
        return (
            <View style={styles.container}>
                <Button title="go back" onPress={() => props.navigation.navigate('Detail')}/>
                <Text>{detail.title}</Text>
                <Text>{detail.artist.name}</Text>
                <Image
                    source ={{ uri: detail.artist.picture}}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                />
                <Image
                    source={{uri: detail.album.cover_xl}}
                    style={{ width: 300, height: 300, alignSelf: 'center', borderRadius: 150}}
                />
            </View>
        )
    }
    return null;
})

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignSelf: 'center'
    }
});