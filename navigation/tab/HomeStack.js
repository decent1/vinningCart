import * as React from 'react';
import {
    Image,
    View
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashboardStack from '../stack/DashboardStack';
import CategoriesStack from '../stack/CategoriesStack';
import CartStack from '../stack/CartStack';
import SearchStack from '../stack/SearchStack';
import AccountStack from '../stack/AccountStack';
import { ImagePath } from '../../src/utils/ImagePath';
import { Colors } from '../../src/utils/Colors';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown:false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'tab1'
            } else if (route.name === 'Categories') {
              iconName = 'tab2';
            } else if (route.name === 'Cart') {
                iconName = 'tab3';
            } else if (route.name === 'Search') {
                iconName = 'tab4';
            } else if (route.name === 'Account') {
                iconName = 'tab5';
            }
            

            // You can return any component that you like here!
            return <View style={{
                height:16,
                width:17,
            }}>
                <Image 
                    style={{
                        height:'100%',
                        width:'100%',
                        tintColor:focused ? Colors.primary : '#8C8C8C'
                    }}
                    source={ImagePath[iconName]}
                />
            </View>;
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={DashboardStack} />
        <Tab.Screen name="Categories" component={CategoriesStack} />
        <Tab.Screen name="Cart" component={CartStack} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Account" component={AccountStack} />
      </Tab.Navigator>
  );
}
