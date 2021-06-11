import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {connect} from 'react-redux';
function Cart({cart}) {
  return (
    <View>
      {console.log(cart)}
      {cart.map(item => (
        <Text>
          {item.name}
          {item.qty}
        </Text>
      ))}
      <Text>This is the Cart Screen</Text>
    </View>
  );
}
const mapStateToProps = state => {
  return {cart: state.shop.cart};
};
export default connect(mapStateToProps)(Cart);
