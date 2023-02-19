import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {BackIcon} from '../../assets';
import {AuthContext} from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

const Profile = ({navigation}) => {
  const {userInfo, isLoading} = useContext(AuthContext);

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
          Annas Yafi Reyhan
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
          yafireyhan01@gmail.com
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
          08123456789
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
          Depok
        </Text>
      </View>
      <View
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 40}}>
        <Button title="Logout" color="black" />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
