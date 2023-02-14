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

const Login = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const {isLoading, login} = useContext(AuthContext);

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
        Login
      </Text>
      <Text style={{color: 'black', marginTop: 30, marginLeft: -210}}>
        Email
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
        placeholder="Masukkan Email Anda"
        placeholderTextColor="black"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text style={{color: 'black', marginTop: 30, marginLeft: -180}}>
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
        placeholder="Masukkan Password Anda"
        placeholderTextColor="black"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
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
        onPress={() => {
          login(email, password);
        }}
        // onPress={onSignInPressed}
      >
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
          }}>
          Login
        </Text>
      </TouchableOpacity>
      {/* <Button
        title="Login"
        onPress={() => {
          login(email, password);
        }}
      /> */}
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', marginTop: 20}}>Belum punya akun?</Text>
        <TouchableOpacity onPress={() => handleGoTo('Register')}>
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
