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

import colors from '../../../assets/colors/Colors';

import DetailHeaderView from './DetailHeaderView';
import ResturantDetail from './ResturantDetail';

const DetailScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    setRestaurant(item);
  });
  return (
    <View style={styles.container}>
      <DetailHeaderView restaurant={restaurant?.name} screenName={'Home'} />
      <ResturantDetail restaurant={restaurant} />
      {/* <View>
        <Animated.ScrollView
          horizontal
          pagingEnabled
          automaticallyAdjustContentInsets={false}
          snaptoAlignment="center"
          showsHorizontalScrollIndicator={false}>
          {restaurant?.menu.map((item, index) => (
            <View key={`menu-${index}`} style={{ alignItems: 'center' }}>
              <View style={{ height: '60%' }}>
                <Image
                  source={item.photo}
                  resizeMode="cover"
                  style={{ width: 450, height: '100%', margin: 10 }}
                />
              </View>
            </View>
          ))}
        </Animated.ScrollView>
      </View> */}
    </View>
  );
};

export default DetailScreen;
