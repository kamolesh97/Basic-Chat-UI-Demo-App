import {Platform} from 'react-native';
import styled from 'styled-components/native';

const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs(() => ({
    behavior: Platform.OS === 'ios' ? 'padding' : 'height',
}))`
    ${(props) => props.flex && `flex: ${props.flex}`}
`;

export default KeyboardAvoidingView;
