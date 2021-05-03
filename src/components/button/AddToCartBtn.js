import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  Image,
  Dimensions,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import colors from '../../assets/colors/Colors';
import { useNavigation } from '@react-navigation/native';

const AddToCartBtn = props => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        bottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate(props.screenName)}
        style={{
          height: 50,
          width: 250,
          padding: 10,
          backgroundColor: colors.orange,
          alignItems: 'center',
          borderRadius: 15,
        }}
        // onPress={() =>
        //   navigation.navigate('OrderDelivery', {
        //     restaurant: restaurant,
        //     currentLocation: currentLocation,
        //   })
        // }
      >
        <Text style={{ color: colors.white, fontSize: 22, bottom: 3 }}>
          {props.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default AddToCartBtn;
