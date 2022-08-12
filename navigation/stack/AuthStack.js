import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../src/screens/Splash';
import EnterPhone from '../../src/screens/auth/EnterPhone';
import EnterCode from '../../src/screens/auth/EnterCode';
import Login from '../../src/screens/auth/Login';
import SignUp from '../../src/screens/auth/SignUp';
import AddRefferal from '../../src/screens/auth/AddRefferal';
import ResetPassword from '../../src/screens/home/ResetPassword';
import EnterPhoneR from '../../src/screens/auth/EnterPhoneR';
import EnterCodeR from '../../src/screens/auth/EnterCodeR';


const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
      <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="EnterPhone" component={EnterPhone} />
        <Stack.Screen name="EnterPhoneR" component={EnterPhoneR} />

        <Stack.Screen name="EnterCode" component={EnterCode} />
        <Stack.Screen name="EnterCodeR" component={EnterCodeR} />


        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="AddRefferal" component={AddRefferal} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />

      </Stack.Navigator>
  );
}

export default AuthStack;