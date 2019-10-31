import React from 'react';
import { View, TouchableHighlight } from 'react-native';

export default function(props) {
    if (typeof props.onClick === 'function') {
        return (
            <TouchableHighlight onPress={props.onClick} activeOpacity={1} underlayColor="white">
                <View { ...props } />
            </TouchableHighlight>
        );
    }
    return <View { ...props } />;
}
