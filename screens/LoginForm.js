import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

const LoginForm = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const Login = (Email, Password) => {
    auth()
      .signInWithEmailAndPassword(Email, Password)
      .then(() => {
        console.log('User account created & signed in!');
        props.navigation.navigate('Itemlist');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
        alert('Please Check your login Credentials');
      });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#dddddd',
      }}>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
        }}>
        <View
          style={{
            alignSelf: 'center',
            //marginTop:10,
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
            width: wp('80%'),
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TextInput
            placeholder={'Email'}
            placeholderTextColor={'#000'}
            style={{
              fontSize: 20,
            }}
            onChangeText={text => {
              setEmail(text);
            }}
          />
        </View>

        <View
          style={{
            alignSelf: 'center',
            marginTop: 10,
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
            width: wp('80%'),
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TextInput
            placeholder={'Password'}
            placeholderTextColor={'#000'}
            style={{
              fontSize: 20,
            }}
            onChangeText={text => {
              setPassword(text);
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            height: 70,
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#0011ff',
              height: 40,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: wp('40%'),
              borderWidth: 0.5,
              borderRadius: 6,
              borderColor: 'black',
            }}
            onPress={() => {
              //   console.log(email, password);
              Login(email, password);
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 1,
        }}>
        <Image
          style={{
            width: 200,
            marginTop: -13,
            height: 150,
            alignSelf: 'center',
          }}
          source={require('../Assets/logo.png')}
        />

        <TouchableOpacity
          style={{
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#999999',
              alignSelf: 'center',
            }}>
            Skip Login {'>>'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;
