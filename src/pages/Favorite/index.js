import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Favorite = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View>
      <Text style={{color: 'black'}}>Ini Halaman Favorit</Text>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
