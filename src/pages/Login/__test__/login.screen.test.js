import React from 'react';
import {render} from '@testing-library/react-native';
import Login from '../index';
import axios from 'axios';

// describe('LoginScreen', () => {
//   it('should go to home page on login', () => {
//     const page = render(<Login />);
//     const loginButton = page.getByTestId('loginButton');
//   });
// });

test('post', () => {
  axios.post.mockImplementation(() =>
    Promise.resolve({data: {status: 'request is called'}}),
  );
});
