// LIBRARIES
import styled from 'styled-components/native';

// UTILS IMPORT
import {scaledValues} from '@common/utils';

// STYLED COMPONENTS
const FlatList = styled.FlatList.attrs((props) => ({
    keyboardShouldPersistTaps: 'handled',
    showsVerticalScrollIndicator: false,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {flexGrow: 1, ...(props.containerStyle || {})},
}))`
    padding: ${(props) => scaledValues(props.pd) || '0px'};
`;

export default FlatList;
