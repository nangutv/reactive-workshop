import React from 'react';

export default function(props) {
    const { url, alt, ...restProps } = props;

    return <img src={props.url} alt={alt} { ...restProps } />;
}
