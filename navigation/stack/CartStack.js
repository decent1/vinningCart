import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyCart from '../../src/screens/home/MyCart';

const Stack = createNativeStackNavigator();

function CartStack() {
  return (
      <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
      >
        <Stack.Screen name="MyCart" component={MyCart} />
      </Stack.Navigator>
  );
}

export default CartStack;