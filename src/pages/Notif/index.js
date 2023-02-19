import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Notif = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View>
      <Text style={{color: 'black'}}>Ini Halaman Notifikasi</Text>
    </View>
  );
};

export default Notif;

const styles = StyleSheet.create({});
