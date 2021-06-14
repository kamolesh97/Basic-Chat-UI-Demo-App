import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {ThemeProvider} from 'styled-components/native';

import theme from '@common/theme';
import IOTApp from '@src/navigation';

EStyleSheet.build({$rem: Platform.OS === 'ios' ? 1.1 : 0.95});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <IOTApp />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
