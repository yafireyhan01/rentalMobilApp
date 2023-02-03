import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {BackIcon, DownIcon} from '../../assets';
// import Calendar from 'react-native-calendars/src/calendar';
import {launchImageLibrary} from 'react-native-image-picker';
// import {options} from 'yargs';

const Payment = ({navigation}) => {
  const [galleryPhoto, setGalleryPhoto] = useState();

  const handleGoTo = screen => {
    navigation.navigate(screen);
  };

  let options = {
    saveToPhoto: true,
    mediaType: 'photo',
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setGalleryPhoto(result.assets[0].uri);
  };

  return (
    <View>
      <View style={{flexDirection: 'row', marginTop: 60, marginHorizontal: 22}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon style={{marginLeft: 10}} />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            marginLeft: 20,
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          Upload Bukti Pembayaran
        </Text>
      </View>
      <View style={{marginTop: 60}}>
        <Image
          style={{width: 100, height: 100, marginLeft: 43}}
          source={{uri: galleryPhoto}}
        />
        <TouchableOpacity
          onPress={openGallery}
          style={{
            backgroundColor: '#5A4BFF',
            marginLeft: 43,
            marginRight: 187,
            marginTop: 33,
            padding: 10,
            paddingLeft: 10,
          }}>
          <Text style={{color: 'white'}}>Pilih File..</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 40,
          justifyContent: 'space-between',
          //   marginTop: 300,
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 40,
          justifyContent: 'space-between',
          marginTop: 15,
        }}></View>
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

export default Payment;

const styles = StyleSheet.create({});
