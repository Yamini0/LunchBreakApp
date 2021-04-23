import React, { useState, useEffect } from 'react';
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
import styles from './DetailScreenStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BlurView } from '@react-native-community/blur';
const { width, height } = Dimensions.get('window');
import colors from '../../../assets/colors/Colors';

const ResturantDetail = props => {
  return (
    <View style={{ paddingTop: 10 }}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        automaticallyAdjustContentInsets={false}
        snaptoAlignment="center"
        showsHorizontalScrollIndicator={false}>
        {props.restaurant?.menu.map((item, index) => (
          <View key={`menu-${index}`} style={{ alignItems: 'center' }}>
            <View style={{ height: '60%' }}>
              <Image
                source={item.photo}
                resizeMode="cover"
                style={{
                  width: width - 20,
                  height: '100%',
                  margin: 10,
                  borderRadius: 50,
                }}
              />
              <View
                style={{
                  left: 150,
                  position: 'absolute',
                  bottom: -35,
                  width: width - 300,
                  height: 50,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    width: 50,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopLeftRadius: 25,
                    borderBottomLeftRadius: 25,
                  }}>
                  <Ionicons name="remove-outline" size={25} />
                </TouchableOpacity>
                <View
                  style={{
                    width: 50,
                    backgroundColor: colors.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>2</Text>
                </View>
                <TouchableOpacity
                  style={{
                    width: 50,
                    backgroundColor: colors.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                  }}>
                  <Ionicons name="add-outline" size={25} />
                </TouchableOpacity>
              </View>
            </View>

            {/* name and description */}

            <View
              style={{
                width: width,
                alignItems: 'center',
                marginTop: 32,
                paddingHorizontal: 20,
              }}>
              <Text
                style={{
                  marginVertical: 10,
                  textAlign: 'center',
                  fontSize: 24,
                }}>
                {item.name} - {item.price.toFixed(2)}
              </Text>
              <Text style={{ fontSize: 16 }}>{item.description}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <Ionicons
                name="flame-outline"
                size={20}
                style={{
                  color: colors.orange,
                  marginRight: 10,
                }}
              />

              <Text
                style={{
                  fontSize: 16,
                  color: colors.grey,
                }}>
                {item.calories.toFixed(2)} cal
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};
export default ResturantDetail;
