import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {Component, createContext, useState} from 'react';
import {Alert} from 'react-native';
import {BASE_URL} from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const register = (name, email, phone, address, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/register`, {
        name,
        email,
        phone,
        address,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
        Alert.alert('Register success');
      })
      .catch(e => {
        console.log(`belum bisa nih ${e}`);
        setIsLoading(false);
      });
  };

  const login = (email, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/login`, {
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch(e => {
        console.log(`belum bisa ${e}`);
        setIsLoading(false);
      });
  };

  return (
    <AuthContext.Provider value={{isLoading, userInfo, register, login}}>
      {children}
    </AuthContext.Provider>
  );
};
