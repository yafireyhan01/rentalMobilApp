import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Profile = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View>
      <Text style={{color: 'black'}}>Ini Halaman Favorit</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
