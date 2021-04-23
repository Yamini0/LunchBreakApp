import { StyleSheet, Dimensions } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('screen');
import colors from '../../../assets/colors/Colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  shadow: {
    shadowColor: '#fff',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 10,
  },
  searchBarshadow: {
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
  headercontainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerheading: {
    paddingHorizontal: 12,
    top: 20,
    height: 50,
    fontSize: 40,
    fontFamily: 'OpenSans-SemiBold',
    color: colors.orange,
    alignSelf: 'flex-start',
  },
  headersubheading: {
    top: 20,
    color: colors.grey,
    fontSize: 16,
    paddingHorizontal: 12,
  },
  headericonview: {
    marginRight: 20,
    top: -50,
    height: 100,
    width: 100,
    borderRadius: 80,
    backgroundColor: colors.white,
    alignSelf: 'center',
    alignSelf: 'flex-end',
  },
  headerlogo: { width: 95, height: 90 },
});
