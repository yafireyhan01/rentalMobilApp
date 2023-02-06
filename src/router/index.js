import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Splash,
  Login,
  Home,
  WelcomeAuth,
  DetailCar,
  Booking,
  BookingSuccess,
  Register,
  Payment,
} from '../pages';
import {AuthContext} from '../context/AuthContext';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Router = () => {
  const {userInfo} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userInfo.access_token ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{headerShown: false}}
            />
          </>
        )}
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WelcomeAuth"
          component={WelcomeAuth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailCar"
          component={DetailCar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Booking"
          component={Booking}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BookingSuccess"
          component={BookingSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
