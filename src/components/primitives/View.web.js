import React from 'react';

export default function(props) {
    let { style, ...restProps } = props;
    const extendedStyle = { ...style };

    if (typeof props.onClick === 'function') {
        extendedStyle.cursor ='pointer';
    }

    return <div style={extendedStyle} { ...restProps } />;
}
