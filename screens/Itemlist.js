import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Card from '../Components/Card';
import FloatingButton from '../Components/FloatingButton';
import {SliderBox} from 'react-native-image-slider-box';
import ModalDropdown from 'react-native-modal-dropdown';
import {Load_Products} from '../Store/Shopping/Shopping-actions';
import {connect} from 'react-redux';

const Itemlist = ({route, addproducts, navigation}) => {
  const Data = route.params;
  const firedata = Data[1];
  const UserData = Data[0];
  useEffect(() => {
    addproducts(firedata);
  }, []);
  const SelectArray = ['Banni,Rawalpindi', 'Banni,Lahore', 'Banni,Rawalpindi'];
  const [branch, SetBranch] = useState();
  const Naan = firedata
    ? firedata.filter(item => {
        return item.Category === 'NAAN';
      })
    : null;
  const BarBq = firedata
    ? firedata.filter(item => {
        return item.Category === 'BARB.Q';
      })
    : null;
  const ChickenPulao = firedata
    ? firedata.filter(item => {
        return item.Category === 'CHICKENPULAO';
      })
    : null;
  const Offers = firedata
    ? firedata.filter(item => {
        return item.Category === 'OFFERS';
      })
    : null;

  const Sweets = firedata
    ? firedata.filter(item => {
        return item.Category === 'SWEETS';
      })
    : null;

  const [dataFilter, setDataFilter] = useState(Offers);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#e4e4e4',
      }}>
      {console.log(UserData)}

      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: 5,
          paddingLeft: 5,
        }}>
        {console.log(UserData)}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Branch
          </Text>
          <ModalDropdown
            options={SelectArray}
            style={{
              marginLeft: 10,
              color: '#000',
              width: '50%',
            }}
            dropdownStyle={{width: '50%'}}
            onSelect={Value => {
              SetBranch(SelectArray[Value]);
            }}></ModalDropdown>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flex: 1,
          }}>
          <TouchableOpacity>
            <AntDesign name="search1" size={30} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Cart', UserData);
            }}>
            <FontAwesome name="shopping-cart" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('UserDetail', UserData)}>
            <FontAwesome name="user-circle-o" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 2,
        }}>
        <SliderBox
          images={[
            {
              uri: 'https://firebasestorage.googleapis.com/v0/b/balla-tikka.appspot.com/o/Assets%2FBanner.png?alt=media&token=2881a560-4959-486f-89eb-660e19593bd0',
            },
            {
              uri: 'https://firebasestorage.googleapis.com/v0/b/balla-tikka.appspot.com/o/Assets%2Fbg.jpg?alt=media&token=2593497b-9b66-47d7-bebd-10190e85498a',
            },
          ]}
        />
      </View>
      <View
        style={{
          flex: 0.4,
          backgroundColor: '#f1f2f2',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => {
              setDataFilter(Offers);
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Offers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDataFilter(BarBq);
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Bar B.Q</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDataFilter(ChickenPulao);
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>
              Chicken Pulao
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDataFilter(Sweets);
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Sweet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDataFilter(Naan);
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>Naan</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 4,
          marginTop: 10,
          backgroundColor: '#e2e2e2',
        }}>
        <FlatList
          data={dataFilter}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Card
              key={item.id}
              title={item.name}
              image={item.image}
              price={item.price}
              qty={item.qty}
              item={item}
            />
          )}
        />
      </View>
      <FloatingButton style={{bottom: 100}} />
    </View>
  );
};
const mapDispatchToProps = dispatch => {
  return {addproducts: item => dispatch(Load_Products(item))};
};
export default connect(null, mapDispatchToProps)(Itemlist);
