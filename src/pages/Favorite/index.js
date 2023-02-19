import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {BackIcon, RedHeart, Xenia, YellowStar} from '../../assets';
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
          Disukai
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
          <Text
            style={{
              marginTop: 7,
              color: 'black',
              marginRight: 5,
            }}>
            300.000/Hari
          </Text>
          <RedHeart style={{marginLeft: 70}} />
        </View>
      </View>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({});
