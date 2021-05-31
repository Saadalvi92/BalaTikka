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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const UserDetails = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f9f9f9',
      }}>
      <View
        style={{
          flex: 2.5,
          justifyContent: 'center',
          paddingLeft: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <FontAwesome name="user-circle-o" size={100} color="black" />
            <TouchableOpacity
              style={{
                marginLeft: 85,
                marginTop: -30,
              }}>
              <AntDesign name="pluscircleo" size={20} color="#4fb853" />
            </TouchableOpacity>
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '600',
                }}>
                Usman
              </Text>
              <MaterialCommunityIcons name="rename-box" size={30} color="red" />
            </View>

            <View>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 10,
                  fontWeight: 'bold',
                }}>
                +9200000000000
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 4.5,
        }}>
        <View
          style={{
            width: wp('92%'),
            alignSelf: 'center',
            height: 40,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome name="history" size={20} color="black" />

            <Text
              style={{
                color: '#5a5a5a',
                fontSize: 20,
                marginLeft: 10,
              }}>
              History
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Delivery')}>
              <Ionicons name="caret-forward" size={23} color="#717171" />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: wp('92%'),
            alignSelf: 'center',
            height: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Entypo name="location-pin" size={20} color="black" />

            <Text
              style={{
                color: '#5a5a5a',
                fontSize: 20,
                marginLeft: 7,
              }}>
              Delivering Address
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('deliveryAddress')}>
              <Ionicons name="caret-forward" size={23} color="#717171" />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            height: 50,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,

              marginLeft: 5,
            }}>
            General
          </Text>
        </View>

        <View
          style={{
            width: wp('92%'),
            alignSelf: 'center',
            height: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Entypo name="lock-open" size={20} color="#717171" />

            <Text
              style={{
                color: '#5a5a5a',
                fontSize: 20,
                marginLeft: 7,
              }}>
              Change Password
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Ionicons name="caret-forward" size={23} color="#717171" />
          </View>
        </View>

        <View
          style={{
            width: wp('92%'),
            alignSelf: 'center',
            height: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Ionicons name="call" size={20} color="#717171" />

            <Text
              style={{
                color: '#5a5a5a',
                fontSize: 20,
                marginLeft: 7,
              }}>
              Contact
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Ionicons name="caret-forward" size={23} color="#717171" />
          </View>
        </View>

        <View
          style={{
            width: wp('92%'),
            alignSelf: 'center',
            height: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Entypo name="log-out" size={20} color="black" />
            <Text
              style={{
                color: '#5a5a5a',
                fontSize: 20,
                marginLeft: 7,
                fontWeight: '300',
              }}>
              Logout
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Ionicons name="caret-forward" size={23} color="#717171" />
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 3,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: wp('95%'),
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: wp('10%'),
                alignItems: 'center',
                alignItems: 'center',
              }}>
              <EvilIcons name="sc-facebook" size={30} color="#000000" />
            </View>

            <View
              style={{
                width: 1,
                height: 25,
                backgroundColor: '#909090',
              }}></View>

            <View
              style={{
                width: wp('10%'),
                alignItems: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="instagram" size={26} color="#000000" />
            </View>

            <View
              style={{
                width: 1,
                height: 25,
                backgroundColor: '#909090',
              }}></View>

            <View
              style={{
                width: wp('10%'),
                alignItems: 'center',
                alignItems: 'center',
              }}>
              <Ionicons name="md-globe-outline" size={26} color="#000000" />
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={{
                width: wp('20%'),
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                height: 40,
                borderRadius: 10,
                backgroundColor: '#f90000',
              }}>
              <Ionicons name="ios-call" size={20} color="#fffdff" />
              <Text
                style={{
                  color: '#fffdff',
                  marginLeft: 10,
                  fontSize: 20,
                }}>
                Calls
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserDetails;
