import styled from 'styled-components/native';

import {scaledValues} from '@common/utils';

const View = styled.View`
    ${(props) => props.flex && `flex: ${props.flex}`}
    ${(props) => props.position && `position: ${props.position}`}
    ${(props) => props.als && `align-self: ${props.als}`}
    justify-content: ${(props) => props.jc || 'flex-start'};
    background-color: ${(props) => props.theme.color[props.bgCol] || props.bgCol || 'transparent'};
    padding: ${(props) => scaledValues((props.boundary && [props.theme.spacing.boundary()]) || props.pd || [0])};
    margin: ${(props) => scaledValues(props.mg || [0])};
    border-radius: ${(props) => props.bdrRad || 0}px;
    overflow: hidden;
    flex-direction: ${(props) => (props.row && 'row') || props.fd || 'column'};
    align-items: ${(props) => props.ai || 'stretch'};
    justify-content: ${(props) => (props.row && 'space-between') || props.jc || 'flex-start'};
    ${(props) =>
        props.shadow && `shadow-color: #000; shadow-offset: 0px 2px; shadow-opacity: 0.30; shadow-radius: 2px; elevation: ${props.shadow || 1};`}
`;

export default View;
