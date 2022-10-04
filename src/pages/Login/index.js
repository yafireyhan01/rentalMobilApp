import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Login = ({navigation}) => {
  return (
    <View>
      <Text>This is Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  title: {
    color: '#ffff',
    fontSize: 50,
    marginTop: 290,
    maxWidth: 300,
    marginLeft: 110,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius: 10,
    textShadowOffset: {width: 5, height: 5},
  },
  imageBackground: {
    width: 638,
    height: 1050,
    left: -95,
    top: -200,
  },
  button: {
    container: {
      backgroundColor: 'black',
      padding: 20,
      borderRadius: 25,
      maxWidth: 200,
      left: 150,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 200,
      marginLeft: 25,
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
    },
  },
});
