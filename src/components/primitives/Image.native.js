import React from 'react';
import { Image } from 'react-native';

export default function(props) {
    const { url, ...restProps } = props;

    return <Image source={{ uri: url }} { ...restProps } resizeMode={'contain'}/>;
}
