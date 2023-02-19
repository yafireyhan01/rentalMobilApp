import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  BackIcon,
  ChatIcon,
  Expander,
  GasIcon,
  GaugeIcon,
  HeartIcon,
  PersonIcon,
  PhoneIcon,
  TransmisionIcon,
  XeniaDetail,
  YellowStar,
} from '../../assets';

const DetailCar = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon style={{marginLeft: 20, marginTop: 20}} />
      </TouchableOpacity>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <View>
          <XeniaDetail />
          <Text style={{color: 'black', fontWeight: 'bold', marginTop: 7}}>
            Daihatsu Xenia 2020
          </Text>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <YellowStar />
            <Text style={{color: 'black', fontWeight: 'bold', marginLeft: 6}}>
              4.7
            </Text>
            <Text style={{color: '#686666', marginLeft: 5}}>(14 Review)</Text>
            <HeartIcon style={{marginLeft: 100}} />
          </View>
          <View
            style={{
              backgroundColor: '#C1BEBE',
              padding: 17,
              borderRadius: 25,
              marginTop: 60,
            }}>
            <Text style={{color: 'black'}}>Info Kendaraan</Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View>
                <PersonIcon style={{marginTop: 15}} />
                <GaugeIcon style={{marginTop: 15}} />
                <TransmisionIcon style={{marginTop: 15}} />
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={{color: 'black', marginTop: 18}}>
                  4-6 Penumpang
                </Text>
                <Text style={{color: 'black', marginTop: 18}}>1,500 CC</Text>
                <Text style={{color: 'black', marginTop: 18}}>Matic</Text>
              </View>
              <View>
                <GasIcon style={{marginTop: 15, marginLeft: 5}} />
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={{color: 'black', marginTop: 18}}>Penuh</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              marginTop: 50,
              alignItems: 'center',
              padding: 14,
              borderRadius: 25,
            }}
            onPress={() => handleGoTo('Booking')}>
            <Text style={{fontWeight: 'bold', color: 'white'}}>
              Sewa Sekarang
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailCar;

const styles = StyleSheet.create({});
