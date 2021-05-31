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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Signup = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#dddddd',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <FontAwesome name="user-circle-o" size={150} color="black" />
        <TouchableOpacity
          style={{
            marginLeft: -20,
            marginTop: 45,
          }}>
          <AntDesign name="pluscircleo" size={30} color="#4fb853" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 2,
        }}>
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
            placeholder={'Your Name'}
            placeholderTextColor={'#cecece'}
            style={{
              fontSize: 20,
            }}
          />
        </View>

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
            placeholder={'Mobile#'}
            placeholderTextColor={'#cecece'}
            style={{
              fontSize: 15,
            }}
          />
        </View>

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
            placeholderTextColor={'#cecece'}
            style={{
              fontSize: 15,
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
            placeholderTextColor={'#cecece'}
            style={{
              fontSize: 20,
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
            placeholder={'Remember Password'}
            placeholderTextColor={'#cecece'}
            style={{
              fontSize: 20,
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
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
              }}>
              Sign Up
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
            Skip Login >>{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
