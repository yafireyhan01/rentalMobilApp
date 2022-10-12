import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackIcon, DownIcon} from '../../assets';
import Calendar from 'react-native-calendars/src/calendar';

const Booking = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View>
      <View style={{flexDirection: 'row', marginTop: 60, marginHorizontal: 22}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon style={{marginLeft: 10}} />
        </TouchableOpacity>
        <Text style={{color: 'black', marginLeft: 40, fontWeight: 'bold'}}>
          Tentukan Tanggal & Waktu
        </Text>
      </View>
      <Calendar style={{borderRadius: 10, elevation: 4, margin: 30}} />
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 40,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: 'black',
            maxWidth: 100,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Waktu Pengambilan
        </Text>
        <Text
          style={{
            color: 'black',
            maxWidth: 100,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Waktu Pengembalian
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 40,
          justifyContent: 'space-between',
          marginTop: 15,
        }}>
        <View
          style={{
            backgroundColor: '#c1bebe',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            flexDirection: 'row',
          }}>
          <Text style={{color: 'black'}}>10:00</Text>
          <TouchableOpacity>
            <DownIcon style={{marginLeft: 15}} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#c1bebe',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
            padding: 10,
            flexDirection: 'row',
          }}>
          <Text style={{color: 'black'}}>10:00</Text>
          <TouchableOpacity>
            <DownIcon style={{marginLeft: 15}} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 100,
          marginTop: 33,
          padding: 10,
          borderRadius: 25,
        }}
        onPress={() => handleGoTo('BookingSuccess')}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Sewa Sekarang</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({});
