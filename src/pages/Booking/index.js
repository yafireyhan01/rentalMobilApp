import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Booking = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View>
      <Text style={{color: 'black'}}>This is Booking page</Text>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({});
