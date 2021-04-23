import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../components/screens/detailscreen/DetailScreen';
import BottomtabNavigation from './BottomTabNavigation';

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ hearderShown: false }}>
        {/* <Stack.Screen
          name="Onboard"
          component={Onboard}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Home"
          component={BottomtabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
