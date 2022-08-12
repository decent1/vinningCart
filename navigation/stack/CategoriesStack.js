import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../../src/screens/home/Categories';

const Stack = createNativeStackNavigator();

function CategoriesStack() {
  return (
      <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
      >
        <Stack.Screen name="CategoriesScreen" component={Categories} />
      </Stack.Navigator>
  );
}

export default CategoriesStack;