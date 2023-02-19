import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

const Register = ({navigation}) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  const [password, setPassword] = useState(null);
  // const val = useContext(AuthContext);

  const {isLoading, register} = useContext(AuthContext);

  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Spinner visible={isLoading} />
      <Text
        style={{
          color: 'black',
          marginTop: 100,
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        Register
      </Text>
      <Text style={{color: 'black', marginTop: 20, marginLeft: -150}}>
        Nama Lengkap
      </Text>
      {/* <Text style={{color: 'black'}}>Masukkan Nama Anda</Text> */}
      <TextInput
        style={{
          backgroundColor: '#D9D9D9',
          marginTop: 5,
          borderColor: '#D9D9D9',
          borderWidth: 2,
          paddingLeft: 15,
          borderRadius: 10,
          width: 250,
          height: 40,
          color: 'black',
        }}
        placeholder="Masukkan nama anda"
        placeholderTextColor="black"
        onChangeText={text => setName(text)}
      />
      <Text style={{color: 'black', marginTop: 20, marginLeft: -210}}>
        Email:
      </Text>
      <TextInput
        style={{
          backgroundColor: '#D9D9D9',
          marginTop: 5,
          borderColor: '#D9D9D9',
          borderWidth: 2,
          paddingLeft: 15,
          borderRadius: 10,
          width: 250,
          height: 40,
          color: 'black',
        }}
        placeholder="Masukkan email anda"
        placeholderTextColor="black"
        onChangeText={text => setEmail(text)}
      />
      <Text style={{color: 'black', marginTop: 20, marginLeft: -130}}>
        Nomor Handphone
      </Text>
      <TextInput
        style={{
          backgroundColor: '#D9D9D9',
          marginTop: 5,
          borderColor: '#D9D9D9',
          borderWidth: 2,
          paddingLeft: 15,
          borderRadius: 10,
          width: 250,
          height: 40,
          color: 'black',
        }}
        placeholder="Masukkan nomor handphone anda"
        placeholderTextColor="black"
        onChangeText={text => setPhone(text)}
      />
      <Text style={{color: 'black', marginTop: 20, marginLeft: -200}}>
        Alamat
      </Text>
      <TextInput
        style={{
          backgroundColor: '#D9D9D9',
          marginTop: 5,
          borderColor: '#D9D9D9',
          borderWidth: 2,
          paddingLeft: 15,
          borderRadius: 10,
          width: 250,
          height: 40,
          color: 'black',
        }}
        placeholder="Masukkan alamat anda"
        placeholderTextColor="black"
        onChangeText={text => setAddress(text)}
      />
      <Text style={{color: 'black', marginTop: 20, marginLeft: -180}}>
        Password
      </Text>
      <TextInput
        style={{
          backgroundColor: '#D9D9D9',
          marginTop: 5,
          borderColor: '#D9D9D9',
          borderWidth: 2,
          paddingLeft: 15,
          borderRadius: 10,
          width: 250,
          height: 40,
          color: 'black',
        }}
        placeholder="Masukkan password anda"
        placeholderTextColor="black"
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          padding: 20,
          marginTop: 30,
          borderRadius: 25,
          width: 174,
          alignItems: 'center',
        }}
        onPress={() => {
          register(name, email, phone, address, password);
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
          }}>
          Daftar Sekarang
        </Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', marginTop: 20}}>Sudah punya akun?</Text>
        <TouchableOpacity onPress={() => handleGoTo('Login')}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              marginTop: 20,
              marginLeft: 5,
            }}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
