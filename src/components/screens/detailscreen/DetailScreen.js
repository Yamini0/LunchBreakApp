import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import styles from './DetailScreenStyle';

import DetailHeaderView from './DetailHeaderView';
import ResturantDetail from './ResturantDetail';
import AddToCartBtn from '../../button/AddToCartBtn';

const DetailScreen = ({ route }) => {
  const { item } = route.params;
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    setRestaurant(item);
  });
  return (
    <View style={styles.container}>
      <DetailHeaderView restaurant={restaurant?.name} screenName={'Home'} />
      <ResturantDetail restaurant={restaurant} />
      <AddToCartBtn
        name={'Add to my Cart'}
        restaurant={restaurant}
        screenName={'OrderDelivery'}
      />
    </View>
  );
};

export default DetailScreen;
