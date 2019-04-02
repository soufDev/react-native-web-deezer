import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

export const Detail = React.memo((props) => {

    return (
        <View style={styles.container}>
            <Text>Detail</Text>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignSelf: 'center'
    }
});