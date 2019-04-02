import React from 'react';
import { View } from 'react-native';

export const Footer = () => (
    <View style={style} />
)

const style = {
    position: 'fixed',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
}