import React from 'react';
import PropTypes from 'prop-types';

import {Text, View} from '@elements';

const Message = ({data, sendingUser}) => {
    const isSender = data?.user_id === sendingUser.id;
    return (
        <View shadow={1}>
            <View maxWidth="70%" als={isSender && 'flex-end'} bgCol={isSender ? 'outgoingBgCol' : 'white'} mg={[5]} pd={[5, 16]} bdrRad={20}>
                <Text align={data?.user_id === sendingUser.id && 'right'} color="black">
                    {data?.message}
                </Text>
            </View>
        </View>
    );
};

Message.propTypes = {
    data: PropTypes.object.isRequired,
    sendingUser: PropTypes.object.isRequired,
};

export default Message;
