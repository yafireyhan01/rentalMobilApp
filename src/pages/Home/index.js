import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ChatIcon, LocationIcon} from '../../assets';

const Home = ({navigation}) => {
  return (
    <View>
      <View style={styles.container.top}>
        <LocationIcon style={styles.icon.location} />
      </View>
      <View style={styles.container.bottom}>
        <TextInput style={styles.textInput} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: -25,
    borderColor: 'white',
    borderWidth: 2,
    elevation: 8,
    borderRadius: 25,
  },
  icon: {
    location: {
      marginLeft: 22,
      marginTop: 81,
    },
  },
  container: {
    top: {backgroundColor: '#C1BEBE', height: 304},
    bottom: {
      backgroundColor: 'white',
      height: 480,
      borderRadius: 25,
      marginTop: -40,
    },
  },
});
