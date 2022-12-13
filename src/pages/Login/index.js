import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Login = ({navigation}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          color: 'black',
          marginTop: 100,
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        Login
      </Text>
      <TextInput
        style={{
          backgroundColor: '#D9D9D9',
          marginTop: 35,
          borderColor: '#D9D9D9',
          borderWidth: 2,
          paddingLeft: 15,
          borderRadius: 10,
          width: 250,
          height: 40,
          color: 'black',
        }}
        placeholder="No. HP / Email"
        placeholderTextColor="black"
      />
      <TextInput
        style={{
          backgroundColor: '#D9D9D9',
          marginTop: 25,
          borderColor: '#D9D9D9',
          borderWidth: 2,
          paddingLeft: 15,
          borderRadius: 10,
          width: 250,
          height: 40,
          color: 'black',
        }}
        placeholder="Password"
        placeholderTextColor="black"
      />
      <TouchableOpacity>
        <Text style={{color: 'black', marginTop: 20, marginLeft: -115}}>
          Lupa kata sandi?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          padding: 20,
          marginTop: 30,
          borderRadius: 25,
          width: 174,
          alignItems: 'center',
        }}
        // onPress={() => handleGoTo('Home')}
      >
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
          }}>
          Login
        </Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', marginTop: 20}}>Belum punya akun?</Text>
        <TouchableOpacity>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              marginTop: 20,
              marginLeft: 5,
            }}>
            Daftar sekarang
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
