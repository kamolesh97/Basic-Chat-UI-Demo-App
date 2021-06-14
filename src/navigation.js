import React from 'react';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';

import Home from '@screens/Home';

const Stack = createStackNavigator();

const IOTApp = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name={'Home'} component={Home} />
    </Stack.Navigator>
  );
};

export default IOTApp;
