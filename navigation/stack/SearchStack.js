import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../../src/screens/home/Search';

const Stack = createNativeStackNavigator();

function SearchStack() {
  return (
      <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
      >
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
  );
}

export default SearchStack;