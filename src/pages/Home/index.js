import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  LocationIcon,
  BmwLogo,
  DaihatsuLogo,
  MitsubishiLogo,
  ToyotaLogo,
  Xenia,
  YellowStar,
  Expander,
  DownIcon,
  ActivityIcon,
  HeartIcon,
  BellIcon,
  PersonIcon,
} from '../../assets';

const CarLogo = props => {
  return (
    <View>
      <TouchableOpacity>
        <Image source={props.BmwLogo} />
      </TouchableOpacity>
    </View>
  );
};

const Home = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View>
      <View style={styles.container.top.container}>
        <View style={styles.container.top.textContainer}>
          <LocationIcon />
          <View style={{marginLeft: 17}}>
            <Text style={{color: '#505050'}}>Lokasi Anda</Text>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              Bojongsari, Depok
            </Text>
          </View>
          <TouchableOpacity style={{marginTop: 20, marginLeft: 8}}>
            <DownIcon style={{}} />
          </TouchableOpacity>
          <View style={styles.container.top.photo.container}>
            <View style={styles.container.top.photo.dimension} />
          </View>
        </View>
        <Text style={styles.container.top.title}>
          Temukan Kendaraan Terbaikmu
        </Text>
      </View>
      <View style={styles.container.bottom}>
        <TextInput
          style={styles.textInput}
          placeholder="Cari Kendaraan Terbaikmu..."
          placeholderTextColor="#505050"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            maxWidth: 400,
            marginTop: -10,
          }}>
          <Text
            style={{
              color: 'black',
              marginTop: 26,
              marginLeft: 22,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Paling dicari
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#5a5a5a',
                marginTop: 26,
                marginRight: 22,
                fontSize: 12,
              }}>
              Lihat Semua
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal style={{maxHeight: 80}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 24,
              marginLeft: 22,
            }}>
            <TouchableOpacity style={{marginRight: 40}}>
              <DaihatsuLogo />
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: 40}}>
              <ToyotaLogo />
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: 40}}>
              <MitsubishiLogo />
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: 40}}>
              <BmwLogo />
            </TouchableOpacity>
            {/* <CarLogo image={BmwLogo} /> */}
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            maxWidth: 400,
          }}>
          <Text
            style={{
              color: 'black',
              marginTop: 26,
              marginLeft: 22,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Tersedia Didekatmu
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#5a5a5a',
                marginTop: 26,
                marginRight: 22,
                fontSize: 12,
              }}>
              Lihat Semua
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal style={{maxHeight: 200}}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginHorizontal: 23}}>
                <TouchableOpacity onPress={() => handleGoTo('DetailCar')}>
                  <Xenia style={{marginTop: 20}} />
                  <Text
                    style={{
                      color: 'black',
                      marginTop: 6,
                      fontWeight: 'bold',
                    }}>
                    Daihatsu Xenia 2020
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <YellowStar style={{marginTop: 11}} />
                    <Text
                      style={{
                        marginTop: 7,
                        marginLeft: 5,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      4.7
                    </Text>
                    <Text style={{marginTop: 7, color: '#686666'}}>
                      (14 review)
                    </Text>
                    <Text
                      style={{
                        marginTop: 7,
                        color: 'black',
                        marginRight: 5,
                        marginLeft: 20,
                      }}>
                      300.000/Hari
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{marginLeft: 28}}>
                <TouchableOpacity>
                  <Expander style={{marginTop: 20, height: 45, width: 45}} />
                  <Text
                    style={{
                      color: 'black',
                      marginTop: 6,
                      fontWeight: 'bold',
                    }}>
                    Mitsubishi Expander 2022
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <YellowStar style={{marginTop: 11}} />
                    <Text
                      style={{
                        marginTop: 7,
                        marginLeft: 5,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      4.7
                    </Text>
                    <Text style={{marginTop: 7, color: '#686666'}}>
                      (14 review)
                    </Text>
                    <Text
                      style={{
                        marginTop: 7,
                        color: 'black',
                        marginRight: 5,
                        marginLeft: 20,
                      }}>
                      300.000/Hari
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          elevation: 25,
          height: 70,
          borderRadius: 25,
          marginTop: -70,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 22,
          }}>
          <TouchableOpacity
            style={{
              marginTop: 10,
              backgroundColor: 'white',
              borderRadius: 25,
              width: 35,
              height: 35,
              elevation: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIcon style={{}} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 22,
              marginTop: 10,
              backgroundColor: 'white',
              width: 35,
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
              elevation: 3,
            }}>
            <HeartIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 22,
              marginTop: 10,
              backgroundColor: 'white',
              width: 35,
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
              elevation: 3,
            }}>
            <BellIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 22,
              marginTop: 10,
              backgroundColor: 'white',
              width: 35,
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,
              elevation: 3,
            }}>
            <PersonIcon />
          </TouchableOpacity>
        </View>
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
    paddingLeft: 24,
    elevation: 10,
    borderRadius: 25,
    color: 'black',
  },
  container: {
    top: {
      container: {
        backgroundColor: '#C1BEBE',
        height: 304,
      },
      textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 22,
        marginTop: 50,
      },
      photo: {
        container: {
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginRight: 26,
        },
        dimension: {
          borderRadius: 25,
          height: 45,
          width: 45,
          backgroundColor: 'black',
        },
      },
      title: {
        color: 'black',
        marginLeft: 22,
        marginTop: 50,
        fontSize: 20,
        maxWidth: 202,
        fontWeight: 'bold',
      },
    },
    bottom: {
      backgroundColor: 'white',
      height: 480,
      borderRadius: 25,
      marginTop: -40,
    },
  },
});
