import axios from 'axios';
import React, {Component, createContext} from 'react';
import {Alert} from 'react-native';
import {BASE_URL} from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const register = (name, email, phone, address, password) => {
    console.log(`${BASE_URL}/register`);
    console.log('masuk');
    let data = axios;
    // //   .get(`http://127.0.0.1:3000/api/user/testing`)
    // .get(`https//192.168.1.11:3000/fact`)
    // .then(res => {
    //   console.log(res.data);
    //   Alert.alert('Login Berhasil');
    // })
    // .catch(e => {
    //   console.log(e.message);
    //   Alert.alert('Login gagal');
    // });
    // console.log(data);
    console.log('=========');
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
        console.log(userInfo);
      })
      .catch(e => {
        console.log(`belum bisa nih ${e}`);
      });
  };

  return (
    <AuthContext.Provider value={{register}}>{children}</AuthContext.Provider>
  );
};
