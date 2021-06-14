import React from 'react';
import PropTypes from 'prop-types';

import {View, Text} from '@elements';
import {Avatar} from '@components';

const Header = ({userData}) => {
    return (
        <View fd="row" ai="center" pd={[5, 16]}>
            <Avatar source={userData?.avatar} />
            <Text fw="700" size="lg" mg={[0, 16]}>
                {userData?.name}
            </Text>
        </View>
    );
};

Header.propTypes = {
    userData: PropTypes.object,
};

export default Header;
