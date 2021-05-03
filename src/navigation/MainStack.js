import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../components/screens/detailscreen/DetailScreen';
import BottomtabNavigation from './BottomTabNavigation';
import Onboard from '../components/screens/Onboard';
import Cart from '../components/screens/Cart';

import LoignScreen from '../components/screens/LoginScreen';
import SignUpScreen from '../components/screens/SignUpScreen';
import OrderDelivery from '../components/screens/OrderDelivery';

const Stack = createStackNavigator();
function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoignScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ hearderShown: false }}>
        {/* <Stack.Screen
          name="Onboard"
          component={Onboard}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="LoginStack"
          component={LoginStack}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Home"
          component={BottomtabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrderDelivery"
          component={OrderDelivery}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
