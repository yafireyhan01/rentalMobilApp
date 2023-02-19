import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {BackIcon, Xenia, YellowStar} from '../../assets';
import {AuthContext} from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

const Transaction = ({navigation}) => {
  const {userInfo, isLoading} = useContext(AuthContext);

  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={{marginTop: 60}}>
      <View style={{flexDirection: 'row', marginHorizontal: 22}}>
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
          Transaksi Anda
        </Text>
      </View>
      <View style={{marginTop: 50, marginLeft: 25}}>
        <Xenia />
        <Text
          style={{
            color: 'black',
            marginTop: 6,
            fontWeight: 'bold',
          }}>
          Daihatsu Xenia 2020
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{backgroundColor: 'green', borderRadius: 10}}>
            <Text
              style={{
                padding: 5,
                color: 'white',
                fontWeight: 'bold',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              Sudah dibayar
            </Text>
          </View>
        </View>
        <Text
          style={{
            // marginLeft: 250,
            color: 'black',
            fontWeight: 'bold',
            marginLeft: 55,
          }}>
          Menunggu konfirmasi
        </Text>
      </View>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({});
