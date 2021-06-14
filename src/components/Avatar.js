import React from 'react';

import {Image, View, Icon} from '@elements';

const Avatar = ({source}) => {
    return (
        <View height={40} width={40} bdrRad={20}>
            {source && <Image height={40} width={40} source={{uri: source}} />}
            {!source && <Icon />}
        </View>
    );
};

export default Avatar;
