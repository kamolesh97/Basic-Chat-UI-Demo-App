import {scaledValue} from '@common/utils';

const theme = {
    color: {
        bgCol: '#f4f4f4',
        outgoingBgCol: '#dcf8c6',
        primary: '#25D366',
    },
    spacing: {
        boundary: () => scaledValue(16),
    },
    size: {
        xs: () => scaledValue(12),
        sm: () => scaledValue(14),
        md: () => scaledValue(16),
        lg: () => scaledValue(18),
        xlg: () => scaledValue(20),
        xxlg: () => scaledValue(24),
    },
};

export default theme;
