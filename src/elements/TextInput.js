import styled from 'styled-components/native';

import {scaledValues} from '@common/utils';

const TextInput = styled.TextInput`
    ${(props) => props.flex && `flex: ${props.flex}`}
    background-color: ${(props) => props.theme.color[props.bgCol] || props.bgCol || 'transparent'};
    border-radius: ${(props) => props.bdrRad || 0}px;
    padding: ${(props) => scaledValues(props.pd || [0])};
`;

export default TextInput;
