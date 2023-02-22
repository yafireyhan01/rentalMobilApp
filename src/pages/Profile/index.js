import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {BackIcon} from '../../assets';
import {AuthContext} from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../Login';

const Profile = ({navigation}) => {
  const {userInfo, isLoading, logout} = useContext(AuthContext);

  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View>
      <Spinner visible={isLoading} />
      <View style={{flexDirection: 'row', marginTop: 60, marginHorizontal: 22}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon style={{marginLeft: 10}} />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            marginLeft: 20,
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          Profile
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: 'black',
            marginLeft: 32,
            marginTop: 50,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Nama :
        </Text>
        <Text
          style={{
            color: 'black',
            marginLeft: 32,
            marginTop: 50,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          {/* {userInfo.data.name} */}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: 'black',
            marginLeft: 32,
            marginTop: 50,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Email :
        </Text>
        <Text
          style={{
            color: 'black',
            marginLeft: 32,
            marginTop: 50,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          {userInfo.data.email}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: 'black',
            marginLeft: 32,
            marginTop: 50,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Nomor :
        </Text>
        <Text
          style={{
            color: 'black',
            marginLeft: 25,
            marginTop: 50,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          {userInfo.data.phone}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: 'black',
            marginLeft: 32,
            marginTop: 50,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Alamat :
        </Text>
        <Text
          style={{
            color: 'black',
            marginLeft: 23,
            marginTop: 50,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          {userInfo.data.address}
        </Text>
      </View>
      <View
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 40}}>
        <Button
          title="Logout"
          color="black"
          onPress={() => {
            // AsyncStorage.clear();
            // AsyncStorage.removeItem('userInfo');
            // navigation.replace('Login');
          }}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
