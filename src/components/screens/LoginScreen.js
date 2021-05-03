import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
const { width: WIDTH } = Dimensions.get('window');
import { Formik } from 'formik';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors/Colors';
import { LoginSchema } from '../../assets/validation/Validation';
const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 40,
            color: 'white',
            fontFamily: 'OpenSans-SemiBold',
          }}>
          Welcome Back!
        </Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Formik
          initialValues={{ Email: '', Password: '' }} //initial state of email & password_change
          onSubmit={values => {
            navigation.navigate('Home');
            signIn();
          }} //values store the user input for us...values is an object
          validationSchema={LoginSchema} //having all validation objects
        >
          {(
            props, //a function returning jsx
          ) => (
            <View>
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
              <Text style={{ alignSelf: 'center', margin: 8 }}>
                Forget Password
              </Text>
              <View style={styles.btnContainer}>
                <TouchableOpacity onPress={props.handleSubmit}>
                  <LinearGradient
                    colors={['#FF6347', '#FF8C00']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.btnLogin}>
                    <Text style={styles.btntext}>Sign-In</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('SignUpScreen');
                  }}>
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
            top: 200,
            marginBottom: 200,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 0.5,
          }}>
          <Animatable.Image
            animation="bounce"
            source={require('../../assets/images/logo.png')}
            style={{ width: '50%', height: 100 }}
          />
          <Text>Powered by Lunch Break</Text>
        </View>
      </Animatable.View>
    </View>
  );
};
export default LoginScreen;
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
    borderBottomWidth: 1,
    width: WIDTH - 75,
    height: 45,
    borderBottomColor: 'grey',
    paddingLeft: 24,
    borderRadius: 20,
    borderEndColor: 'grey',
    fontSize: 16,
    color: 'black',
    marginHorizontal: 20,
  },
  inputIcon: {
    position: 'absolute',
    top: 18,
  },
  btnLogin: {
    width: WIDTH - 295,
    // marginLeft: 150,
    height: 45,
    borderRadius: 45,
    backgroundColor: colors.yellow,
    justifyContent: 'center',
    marginTop: 20,

    alignSelf: 'center',
  },
  btntext: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'normal',
  },
  btnContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  ErrorMsg: {
    color: colors.orange,
    paddingLeft: 5,
    fontSize: 16,
    fontWeight: 'normal',
    paddingLeft: 35,
  },
});
