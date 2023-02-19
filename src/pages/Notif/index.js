import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackIcon} from '../../assets';

const Notif = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={{flexDirection: 'row', marginHorizontal: 22, marginTop: 60}}>
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
        Notifikasi
      </Text>
    </View>
  );
};

export default Notif;

const styles = StyleSheet.create({});
