import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import SearchBar from './SearchBar';
import HeaderView from './HeaderView';
import HomeFooter from './HomeFooter';
import styles from './HomeScreenStyle';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent barStyle="dark-content" backgroundColor="#fff" />
      <HeaderView />
      <SearchBar />
      <HomeFooter screenName={'DetailScreen'} />
    </SafeAreaView>
  );
};
export default HomeScreen;
