import React from 'react';
import {StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Router from './router';
// import {Provider} from 'react-redux';
// import {store} from './redux';
import {AuthProvider} from './context/AuthContext';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.ligher,
  },
});

export default App;
