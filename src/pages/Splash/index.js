import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {SplashCar} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 2000);
  });
  return (
    <View>
      <SplashCar />
    </View>
  );
};

export default Splash;
