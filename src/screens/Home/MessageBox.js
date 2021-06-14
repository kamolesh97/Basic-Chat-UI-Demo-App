import React, {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import PropTypes from 'prop-types';

import {View, TextInput, SafeAreaView, Icon} from '@elements';

const MessageBox = ({onSend}) => {
    const [message, setMessage] = useState(null);

    const handleOnSend = () => {
        onSend(message);
        setMessage(null);
    };

    return (
        <SafeAreaView edges={['left', 'right', 'bottom']} bgCol="white">
            <View fd="row" pd={[16]} bgCol="white">
                <TextInput flex={1} bgCol="lightgrey" pd={[5, 10]} bdrRad={20} multiline value={message} onChangeText={setMessage} />
                <TouchableWithoutFeedback onPress={handleOnSend}>
                    <View height={25} width={25} bdrRad={13} bgCol="deepskyblue" mg={[0, 0, 0, 10]} ai="center" jc="center">
                        <Icon name="send" color="white" />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    );
};

MessageBox.propTypes = {
    onSend: PropTypes.func,
};

MessageBox.defaultProps = {
    onSend: () => {},
};

export default MessageBox;
