import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import colors from '../../../assets/colors/Colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  backicon: {
    width: 50,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  restview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  restname: {
    top: 8,
    width: 180,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 25,
    backgroundColor: '#DCDCDC',
  },
  iconview: {
    marginRight: 10,
    top: 8,
    height: 80,
    width: 80,
    borderRadius: 80,
    backgroundColor: colors.white,
    alignSelf: 'center',
    alignSelf: 'flex-end',
  },
  logo: {
    width: 80,
    height: 75,
  },
});
