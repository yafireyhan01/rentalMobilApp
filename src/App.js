import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './router';
// import {Provider} from 'react-redux';
// import {store} from './redux';
import {AuthProvider} from './context/AuthContext';

const App = () => {
  return (
    // <AuthProvider>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.ligher,
  },
});

export default App;
