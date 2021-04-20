import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
const { width: WIDTH } = Dimensions.get('window');
import { Formik } from 'formik';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors/Colors';
import { SignUpSchema } from '../../assets/validation/Validation';
const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 40,
            color: 'white',
            fontFamily: 'OpenSans - Bold ',
          }}>
          Hey There!
        </Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Formik
          initialValues={{
            FullName: '',
            Email: '',
            Password: '',
            ConfirmPassword: '',
          }}
          onSubmit={values => {
            navigation.navigate('Home');
          }}
          validationSchema={SignUpSchema}>
          {(
            props, //a function returning jsx
          ) => (
            <View>
              <Text style={[styles.text_footer]}>Full Name</Text>
              <View style={styles.inputContainer}>
                <Ionicons
                  name={'md-person'}
                  size={22}
                  color={'black'}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange('FullName')}
                  value={props.values.FullName}
                />
                <Text style={styles.ErrorMsg}>
                  {props.touched.FullName && props.errors.FullName}
                </Text>
              </View>

              <Text style={[styles.text_footer]}>E-mail</Text>
              <View style={styles.inputContainer}>
                <Ionicons
                  name={'md-mail'}
                  size={22}
                  color={'black'}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  onBlur={props.handleBlur('email')}
                  onChangeText={props.handleChange('Email')}
                  value={props.values.Email}
                />
                <Text style={styles.ErrorMsg}>
                  {props.touched.Email && props.errors.Email}
                </Text>
              </View>

              <Text style={[styles.text_footer]}>Password</Text>
              <View style={styles.inputContainer}>
                <Ionicons
                  name={'md-lock-closed'}
                  size={22}
                  color={'black'}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange('Password')}
                  value={props.values.Password}
                />
                <Text style={styles.ErrorMsg}>
                  {props.touched.Password && props.errors.Password}
                </Text>
              </View>

              <Text style={[styles.text_footer]}>Confirm Password</Text>
              <View style={styles.inputContainer}>
                <Ionicons
                  name={'checkmark-circle'}
                  size={22}
                  color={'black'}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange('ConfirmPassword')}
                  value={props.values.ConfirmPassword}
                />
                <Text style={styles.ErrorMsg}>
                  {props.touched.ConfirmPassword &&
                    props.errors.ConfirmPassword}
                </Text>
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity onPress={props.handleSubmit}>
                  <LinearGradient
                    colors={['#FF6347', '#FF8C00']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.btnLogin}>
                    <Text style={styles.btntext}>Sign-up</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
        <View
          style={{
            top: 70,
            marginBottom: 80,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={{ width: '50%', height: '120%' }}
          />
          <Text>Powered by Lunch Break</Text>
        </View>
      </Animatable.View>
    </View>
  );
};
export default SignUpScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: 'white',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    marginLeft: 10,
    alignSelf: 'stretch',
    fontFamily: 'OpenSans-Regular',
  },

  inputContainer: {
    margin: 10,
    marginBottom: 20,
  },
  input: {
    width: WIDTH - 75,
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderRadius: 20,
    fontSize: 16,
    paddingLeft: 30,
    backgroundColor: 'white',
    color: 'black',
    marginHorizontal: 20,
  },
  inputIcon: {
    position: 'absolute',
    top: 16,
  },
  btnLogin: {
    width: WIDTH - 295,
    // marginLeft: 150,
    height: 45,
    borderRadius: 45,
    backgroundColor: colors.yellow,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btntext: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'normal',
  },
  btnContainer: {
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  ErrorMsg: {
    color: colors.orange,
    paddingLeft: 5,
    fontSize: 16,
    fontWeight: 'normal',
    paddingLeft: 25,
  },
});
