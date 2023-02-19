import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Transaction = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View>
      <Text style={{color: 'black'}}>Ini Halaman Transaksi</Text>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({});
