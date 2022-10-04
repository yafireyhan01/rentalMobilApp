import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 2000);
  });
  return (
    <View>
      <Text style={{color: 'black'}}>Splash Screen</Text>
    </View>
  );
};

export default Splash;
