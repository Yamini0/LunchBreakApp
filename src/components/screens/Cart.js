import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DetailHeaderView from '../screens/detailscreen/DetailHeaderView';
import AddToCartBtn from '../button/AddToCartBtn';
import ResturantData from '../apis/RestaurantData';
import colors from '../../assets/colors/Colors';

const Cart = ({ navigation }) => {
  const CartCard = ({ item }) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.photo} style={{ height: 80, width: 80 }} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
        </View>
        <View style={{ marginRight: 20, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>3</Text>
          <View style={style.actionBtn}>
            <Icon name="remove" size={25} color={colors.white} />
            <Icon name="add" size={25} color={colors.white} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={style.container}>
      <DetailHeaderView restaurant={'My Cart'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={ResturantData}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                Total Price
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>$50</Text>
            </View>
            <View style={{ bottom: -25 }}>
              <AddToCartBtn name={'Place Order'} />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: colors.lightorange,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default Cart;
