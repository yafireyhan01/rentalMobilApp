// import axios from 'axios';
// import React, {Component, createContext} from 'react';
// import {BASE_URL} from '../config';

// export const AuthContext = createContext();

// export const AuthProvider = ({children}) => {
//   const register = (name, phone, email, password) => {
//     // console.log(`${BASE_URL}/register`);
//     // console.log('masuk');
//     // let data = axios
//     //   .get(`https://www.reactnative.dev/movies.json`)
//     //   .then(res => {
//     //     console.log(res);
//     //   })
//     //   .catch(e => {
//     //     console.log(e.response.data);
//     //   });
//     // console.log(data);
//     // console.log('=========');
//     axios
//       .post(`${BASE_URL}/register`, {
//         name,
//         phone,
//         email,
//         password,
//       })
//       .then(res => {
//         let userInfo = res.data;
//         console.log(userInfo);
//       })
//       .catch(e => {
//         console.log(`belum bisa nih ${e}`);
//       });
//   };

//   return (
//     <AuthContext.Provider value={{register}}>{children}</AuthContext.Provider>
//   );
// };
