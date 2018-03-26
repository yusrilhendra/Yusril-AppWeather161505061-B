import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>M-Weather</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: '#26A69A',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingTop: 10,
      position: 'relative',

    },
    textStyle: {
      fontSize: 25,
      color: '#fff',
      textAlign: 'center'
    }
};
export default Header;
