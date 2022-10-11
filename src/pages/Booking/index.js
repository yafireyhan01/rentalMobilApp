import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BackIcon} from '../../assets';

const Booking = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View>
      <View style={{flexDirection: 'row', marginTop: 70}}>
        <BackIcon style={{marginLeft: 30}} />
        <Text style={{color: 'black', marginLeft: 65}}>Tanggal & Waktu</Text>
      </View>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({});
