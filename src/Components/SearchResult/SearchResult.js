import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    wrapperItem: {
        padding: 10,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row'
    }
})

export const MyListItems =  React.memo(({ onPressItem, id, selected, title, artistName, imageSrc }) => {
    const onPress = () => {
        onPressItem(id);
    }
    const textColor = selected ? 'red': 'black';
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.wrapperItem}>
                <Image
                    style={{width: 50, height: 50, borderRadius: 50}}
                    source={{uri: imageSrc}}
                />
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: 20, flexGrow: 'start' }}>
                    <Text style={{ color: textColor, alignSelf: 'center', fontWeight: 'bold' }}>{title}</Text>
                    <Text style={{ color: 'rgb(103, 103, 103)', alignSelf: 'flex-start' }}>{artistName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
});

export const SearchResult = React.memo(({ tracks }) => {
    const renderItems = ({ item }) => (
        <MyListItems
            id={item.id}
            onPressItem={() => console.log('onPressItem')}
            title={item.title}
            artistName={item.artist.name}
            imageSrc={item.album.cover_small}
        />
    )
    const keyExtractor = (item, index) => item.id;
    return (
        <FlatList
            data={tracks}
            keyExtractor={keyExtractor}
            renderItem={renderItems}
        />
    )
})


