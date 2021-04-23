import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from './HomeScreenStyle';

const HeaderView = () => {
  return (
    <View style={styles.headerconatiner}>
      <View style={{ flexDirection: 'column' }}>
        <Text style={styles.headerheading}>Hello There,</Text>
        <Text style={styles.headersubheading}>3456 Restutants waiting...</Text>
      </View>
      <TouchableOpacity style={styles.headericonview}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.headerlogo}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderView;
