import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Card({title, image, price, qty}) {
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: 180,
        flexDirection: 'row',
        borderRadius: 10,
        alignSelf: 'center',
        width: wp('96%'),
        marginBottom: 10,
      }}>
      <View
        style={{
          width: wp('40%'),
          borderRadius: 10,
          height: '100%',
          overflow: 'hidden',
        }}>
        <Image
          style={{
            width: wp('40%'),
            height: '92%',
            borderRadius: 10,
            marginTop: 7,
            marginLeft: 5,
            marginBottom: 5,
            shadowColor: 'red',
          }}
          source={image}
        />
      </View>
      <View
        style={{
          width: wp('55%'),
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          height: 180,
        }}>
        <View
          style={{
            height: 30,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-around',
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '700',
            }}>
            {title}
          </Text>
          <TouchableOpacity>
            <AntDesign name="staro" size={25} color="#121212" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginLeft: 18,
          }}>
          <Text>{qty} pieces</Text>
        </View>

        <View
          style={{
            height: 120,

            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '700',
              }}>
              RS{price}
            </Text>

            <View>
              <TouchableOpacity
                style={{
                  width: wp('20%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 30,
                  marginLeft: 40,
                  borderRadius: 10,
                  backgroundColor: '#f90000',
                }}>
                <Text
                  style={{
                    color: '#fffdff',
                    marginLeft: 10,
                    fontSize: 20,
                  }}>
                  Add
                </Text>
                <Ionicons name="cart" size={20} color="#fffdff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Card;
