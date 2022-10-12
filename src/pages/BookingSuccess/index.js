import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {CheckIcon} from '../../assets';

const BookingSuccess = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <CheckIcon style={{marginTop: 190}} />
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            fontWeight: 'bold',
            marginTop: 30,
          }}>
          BERHASIL MENYEWA
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            padding: 20,
            marginTop: 55,
            borderRadius: 25,
          }}
          onPress={() => handleGoTo('Home')}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Kembali Ke Beranda
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookingSuccess;

const styles = StyleSheet.create({});
