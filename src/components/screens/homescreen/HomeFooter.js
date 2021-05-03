import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import styles from './HomeScreenStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../assets/colors/Colors';

import RestaurantData from '../../apis/RestaurantData';
import foodCategoryData from '../../apis/FoodCategoryData';

const HomeFooter = props => {
  const navigation = useNavigation();
  const [selectFoodCategory, setSelectFoodCategory] = useState(null);
  const [restaurantList, setrestaurantList] = useState(RestaurantData);
  const [categories, setCategories] = useState(foodCategoryData);

  const getCategoryNameById = id => {
    let category = categories.filter(x => x.id == id);
    if (category.length > 0) {
      return category[0].name;
    } else {
      return '';
    }
  };

  const renderRestaurantItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ marginBottom: 10, ...styles.searchBarshadow }}
        onPress={() => {
          navigation.navigate(props.screenName, { item });
        }}>
        <View>
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: '100%',
              height: 250,
              borderRadius: 30,
            }}
          />
          <View
            style={{
              position: 'absolute',
              left: 200,
              bottom: 14,
              height: 40,
              width: 150,
              opacity: 0.6,
              borderWidth: 0.32,
              backgroundColor: colors.white,
              borderTopLeftRadius: 30,
              borderBottomRightRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              ...styles.shadow,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                fontWeight: 'bold',
              }}>
              {item.duration}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontFamily: 'OpenSans-SemiBold',
            color: colors.titlecolor,
            fontSize: 24,
            paddingTop: 5,
            paddingLeft: 10,
          }}>
          {item.name}
        </Text>
        <View
          style={{
            paddingLeft: 5,
            marginTop: 3,
            flexDirection: 'row',
          }}>
          <Ionicons
            name="star"
            size={22}
            style={{ color: colors.orange, marginRight: 6 }}
          />
          <Text style={{ fontSize: 18 }}>{item.rating}</Text>
          <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 3 }}>
            {item.categories.map(categoryId => {
              return (
                <View style={{ flexDirection: 'row' }} key={categoryId}>
                  <Text>{getCategoryNameById(categoryId)}</Text>
                  <Text> . </Text>
                  {[1, 2, 3].map(priceRating => (
                    <Text
                      key={priceRating}
                      style={{
                        color:
                          priceRating <= item.priceRating
                            ? 'black'
                            : colors.orange,
                      }}>
                      $
                    </Text>
                  ))}
                </View>
              );
            })}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const _onSelectFoodCategory = foodCategoryData => {
    //filter the list
    let restaurantlist = RestaurantData.filter(x =>
      x.categories.includes(foodCategoryData.id),
    );
    setrestaurantList(restaurantlist);
    setSelectFoodCategory(foodCategoryData);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor:
            selectFoodCategory?.id == item.id
              ? colors.orange
              : colors.lightorange,
          borderRadius: 5,
          justifyContent: 'center',
          marginRight: 10,
        }}
        onPress={() => _onSelectFoodCategory(item)}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.white,
          }}>
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{
              width: 40,
              height: 40,
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 8,
            color: colors.white,
            fontFamily: 'OpenSans-Regular',
            alignSelf: 'center',
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 10,
        }}>
        <Text style={{ fontFamily: 'OpenSans-SemiBold', fontSize: 42 }}>
          Main
        </Text>
        <Text
          style={{
            fontFamily: 'OpenSans-SemiBold',
            fontSize: 42,
            lineHeight: 45,
          }}>
          Categories
        </Text>
        <FlatList
          horizontal
          data={foodCategoryData}
          showHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 10 }}
        />
      </View>

      <View style={{ paddingTop: 14 }}>
        <FlatList
          data={restaurantList}
          keyExtractor-={item => `${item.id}`}
          renderItem={renderRestaurantItem}
          contentContainerStyle={{
            paddingHorizontal: 20,
            padiingBotttom: 20,
          }}
        />
      </View>
    </View>
  );
};
export default HomeFooter;
