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

const Register = ({navigation}) => {
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  // const val = useContext(AuthContext);

  const {register} = useContext(AuthContext);

  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          color: 'black',
          marginTop: 100,
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        Register
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
        placeholder="Nama"
        placeholderTextColor="black"
        onChangeText={text => setName(text)}
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
        placeholder="No. HP"
        placeholderTextColor="black"
        onChangeText={text => setPhone(text)}
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
        placeholder="Email"
        placeholderTextColor="black"
        onChangeText={text => setEmail(text)}
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
        onChangeText={text => setPassword(text)}
        secureTextEntry
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
        placeholder="Ketik ulang password"
        placeholderTextColor="black"
      />
      <Button
        title="Register"
        onPress={() => {
          register(name, phone, email, password);
        }}
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
        // onPress={() => handleGoTo('Home')}
        onPress={() => {
          register(name, phone, email, password);
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
