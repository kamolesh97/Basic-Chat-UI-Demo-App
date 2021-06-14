import styled from 'styled-components/native';

import {scaledValues} from '@common/utils';

const Text = styled.Text`
    color: ${(props) => props.theme.color[props.color] || props.color || 'white'};
    font-size: ${(props) => props.theme.size[props.size || 'sm']}px;
    text-align: ${(props) => props.align || 'left'};
    padding: ${(props) => scaledValues((props.boundary && [props.theme.spacing.boundary()]) || props.pd || [0])};
    margin: ${(props) => scaledValues(props.mg || [0])};
    font-weight: ${(props) => props.fw || '400'};
`;

export default Text;
