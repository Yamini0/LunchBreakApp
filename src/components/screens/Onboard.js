import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

import colors from '../../assets/colors/Colors';
const data = [
  {
    title: 'Easy Order',
    text: 'Discover the foods from \nover 3250 resturants',
    image: require('../../assets/images/Onboard-1.json'),
  },
  {
    title: 'Fast Delivery',
    text: 'Fast Delivery to your home,\noffice and wherever you are.',
    image: require('../../assets/images/Onboard-2.json'),
  },
];

const Onboard = (props, { navigation }) => {
  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <LottieView source={item.image} style={styles.image} autoPlay loop />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };
  const _keyExtractor = item => item.title;
  const _renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <LinearGradient
        colors={['#FF8C00', '#ffdc9d']}
        style={styles.linearGradient}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.doneButtonWrapper}>
        <Text style={styles.doneButtonText}>Let'S Start</Text>
      </LinearGradient>
    );
  };

  const _renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    );
  };

  const handleDone = () => {
    // return navigation.navigate('Home');

    props.handleDone();
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        data={data}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
        renderPrevButton={_renderPrevButton}
        showPrevButton
        onDone={handleDone}
      />
    </View>
  );
};
export default Onboard;
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  image: {
    flex: 1,
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    color: colors.titlecolor,
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    marginTop: 420,
  },
  text: {
    fontSize: 14,
    color: colors.grey,
    textAlign: 'center',
    fontFamily: 'OpenSans-SemiBold',
    marginHorizontal: 60,
    marginTop: 20,
  },
  dotStyle: {
    backgroundColor: colors.lightorange,
  },
  activeDotStyle: {
    backgroundColor: colors.orange,
  },
  rightTextWrapper: {
    width: 60,
    height: 40,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  rightText: {
    color: colors.brightorange,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  leftText: {
    color: colors.brightorange,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: -40,
  },
  doneButtonText: {
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
    color: colors.white,
  },
});
