import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

const Cart = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Welcome to the Home page!</Text>
      <Button
        title="click"
        onPress={() => {
          navigation.navigate('FoodDetail');
        }}></Button>
    </SafeAreaView>
  );
};

export default Cart;
