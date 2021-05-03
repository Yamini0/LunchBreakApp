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
const { width, height } = Dimensions.get('window');
import colors from '../../../assets/colors/Colors';

const ResturantDetail = props => {
  const [orderItems, setOrderItems] = useState([]);
  const scrollX = new Animated.Value(0);

  function editOrder(action, menuId, price) {
    let orderList = orderItems.slice();
    let item = orderList.filter(a => a.menuId == menuId);
    if (action == '+') {
      if (item.length > 0) {
        let newQty = item[0].qty + 1;
        item[0].qty = newQty;
        item[0].total = item[0].qty * price;
      } else {
        const newItem = {
          menuId: menuId,
          qty: 1,
          price: price,
          total: price,
        };
        orderList.push(newItem);
      }

      setOrderItems(orderList);
    } else {
      if (item.length > 0) {
        if (item[0]?.qty > 0) {
          let newQty = item[0].qty - 1;
          item[0].qty = newQty;
          item[0].total = newQty * price;
        }
      }

      setOrderItems(orderList);
    }
  }

  function getOrderQty(menuId) {
    let orderItem = orderItems.filter(a => a.menuId == menuId);

    if (orderItem.length > 0) {
      return orderItem[0].qty;
    }

    return 0;
  }

  function getBasketItemCount() {
    let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0);

    return itemCount;
  }

  function sumOrder() {
    let total = orderItems.reduce((a, b) => a + (b.total || 0), 0);

    return total.toFixed(2);
  }

  return (
    <View style={{ paddingTop: 10 }}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        automaticallyAdjustContentInsets={false}
        snaptoAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}>
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
                  }}
                  onPress={() => editOrder('-', item.menuId, item.price)}>
                  <Text>-</Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: 50,
                    backgroundColor: colors.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{ color: 'black', fontSize: 18 }}>
                    {getOrderQty(item.menuId)}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    width: 50,
                    backgroundColor: colors.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                  }}
                  onPress={() => editOrder('+', item.menuId, item.price)}>
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
            </View>

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
      <View
        style={{
          bottom: 100,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        {props.restaurant?.menu.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9],
            extrapolate: 'clamp',
          });
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 15, 10],
            extrapolate: 'clamp',
          });
          const dotColor = scrollX.interpolate({
            inputRange,
            outputRange: [
              colors.lightorange,
              colors.orange,
              colors.lightorange,
            ],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              style={{
                marginHorizontal: 3,
                opacity,
                height: 10,
                borderRadius: 5,
                backgroundColor: dotColor,
                width: dotWidth,
              }}
              key={`dot-${i}`}></Animated.View>
          );
        })}
      </View>

      <View
        style={{
          padding: 10,
          bottom: 30,
          height: 50,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          borderWidth: 1,
          borderColor: '#DCDCDC',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingvertical: 20,
            paddingHorizontal: 30,
          }}>
          <Text style={{ fontSize: 20 }}>
            {getBasketItemCount()} items in Cart
          </Text>
          <Text style={{ fontSize: 20 }}>Rs.{sumOrder()}</Text>
        </View>
      </View>
    </View>
  );
};
export default ResturantDetail;
