import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Data from '../Data/Data';
import Card from '../Components/Card';
import FloatingButton from '../Components/FloatingButton';
import {SliderBox} from 'react-native-image-slider-box';
import ModalDropdown from 'react-native-modal-dropdown';
import {Button} from 'react-native';
const Itemlist = props => {
  const Naan = Data.filter(item => {
    return item.Category === 'NAAN';
  });
  const BarBq = Data.filter(item => {
    return item.Category === 'BARB.Q';
  });
  const ChickenPulao = Data.filter(item => {
    return item.Category === 'CHICKENPULAO';
  });
  const Offers = Data.filter(item => {
    return item.Category === 'OFFERS';
  });
  const Sweets = Data.filter(item => {
    return item.Category === 'SWEETS';
  });
  const [dataFilter, setDataFilter] = useState(Offers);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#e4e4e4',
      }}>
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: 5,
          paddingLeft: 5,
        }}>
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
            options={['Banni,Rawalpindi', 'Banni,Lahore', 'Banni,Rawalpindi']}
            style={{marginLeft: 10, color: '#000'}}></ModalDropdown>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <AntDesign name="search1" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="staro" size={30} color="#121212" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('UserDetail', props.route.params)
            }>
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
            require('../Assets/Banner.png'),
            require('../Assets/bg.jpg'),
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
              // setDataFilter(Data.Offers);\
              setDataFilter(Offers);
              // console.log(Offers);
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
              title={item.name}
              image={item.image}
              price={item.price}
              qty={item.qty}
              item={item}
            />
          )}
        />
        <Button
          title="Cart"
          onPress={() => {
            props.navigation.navigate('Cart');
          }}
        />
      </View>
      <FloatingButton style={{bottom: 100}} />
    </View>
  );
};

export default Itemlist;
