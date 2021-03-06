import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';
import HomeScreen from '../components/screens/homescreen/HomeScreen';
import Cart from '../components/screens/Cart';

import colors from '../assets/colors/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OrderDelivery from '../components/screens/OrderDelivery';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
    var isSelected = accessibilityState.selected;
    if (isSelected) {
      return (
        <View style={{ flex: 1, alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
            <View style={{ flex: 1, backgroundColor: colors.white }}></View>
            <Svg width={75} height={61} viewBox="0 0 75 61">
              <Path
                d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                fill="white"
              />
            </Svg>
            <View style={{ flex: 1, backgroundColor: colors.white }}></View>
          </View>
          <TouchableOpacity
            style={{
              top: -22.5,
              justifyContent: 'center',
              alignItems: 'center',
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: colors.white,
            }}
            onPress={onPress}>
            {children}
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            height: 60,
            backgroundColor: colors.white,
          }}
          activeOpacity={1}
          onPress={onPress}>
          {children}
        </TouchableOpacity>
      );
    }
  };
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          left: 0,
          bottom: 0,
          right: 0,
          borderTopWidth: 0,
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}
      //   tabBar={props => <CustomTabBar props={props} />}>
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home-outline"
              size={28}
              style={{
                color: focused ? colors.primary : 'grey',
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Like"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="heart-outline"
              size={28}
              style={{
                color: focused ? colors.primary : 'grey',
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={OrderDelivery}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="search-outline"
              size={28}
              style={{
                color: focused ? colors.primary : 'grey',
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="cart-outline"
              size={28}
              style={{
                color: focused ? colors.primary : 'grey',
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigation;
