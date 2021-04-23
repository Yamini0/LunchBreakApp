import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../assets/colors/Colors';
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={28} style={styles.iconStyle} />
      <TextInput
        placeholder="Search whats in your mood..."
        placeholderTextColor={colors.grey}
        style={styles.textinput}
      />
    </View>
  );
};
export default SearchBar;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 0.3,
    marginTop: -30,
    height: 50,
    marginHorizontal: 20,
    borderRadius: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.9,
    shadowRadius: 50,
    elevation: 15,
    overflow: 'hidden',
  },
  iconStyle: {
    color: colors.titlecolor,
    alignSelf: 'flex-start',
    padding: 10,
  },
  textinput: { fontSize: 16, color: 'black' },
});
