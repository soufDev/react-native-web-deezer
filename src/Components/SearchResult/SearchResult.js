import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    wrapperItem: {
        padding: 10,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export const MyListItems =  React.memo(({ onPressItem, id, selected, title, imageSrc }) => {
    const onPress = () => {
        onPressItem(id);
    }
    const textColor = selected ? 'red': 'black';
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.wrapperItem}>
            <Image
                style={{width: 50, height: 50}}
                source={{uri: imageSrc}}
            />
            <Text style={{ color: textColor, alignSelf: 'center' }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
});

export const SearchResult = React.memo(({ tracks }) => {
    const renderItems = ({ item }) => (
        <MyListItems
            id={item.id}
            onPress={() => console.log('onPress Item')}
            title={item.title}
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


