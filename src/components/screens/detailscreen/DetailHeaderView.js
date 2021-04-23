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
} from 'react-native';
import styles from './DetailScreenStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';

import colors from '../../../assets/colors/Colors';

const DetailHeaderView = props => {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        style={styles.backicon}
        onPress={() => navigation.navigate(props.screenName)}>
        <Ionicons name="arrow-back-outline" size={30} />
      </TouchableOpacity>
      <View style={styles.restview}>
        <View style={styles.restname}>
          <Text style={{ fontSize: 16 }}>{props.restaurant}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.iconview}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
        />
      </TouchableOpacity>
    </View>
  );
};
export default DetailHeaderView;
