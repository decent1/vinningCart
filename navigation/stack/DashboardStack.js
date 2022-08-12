import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../../src/screens/home/Dashboard';
import CategoryItems from '../../src/screens/home/CategoryItems';
import ItemDetails from '../../src/screens/home/ItemDetails';
import Rewards from '../../src/screens/home/Rewards';
import SendCredit from '../../src/screens/home/SendCredit';
import SendCreditForm from '../../src/screens/home/SendCreditForm';
import SelectPaymentMethod from '../../src/screens/home/SelectPaymentMethod';
import SendingCash from '../../src/screens/home/SendingCash';
import CreditSend from '../../src/screens/home/CreditSend';
import RequestCredit from '../../src/screens/home/RequestCredit';
import RequestForm from '../../src/screens/home/RequestForm';
import RequestingRS from '../../src/screens/home/RequestingRS';
import RequestSend from '../../src/screens/home/RequestSend';
import Myaddress from '../../src/screens/home/MyAddress';
import AddNewAddress from '../../src/screens/home/AddNewAddress';
import ConfirmLocation from '../../src/screens/home/ConfirmLocation';
import CheckoutDetails from '../../src/screens/home/CheckoutDetails';
import OrderSummary from '../../src/screens/home/OrderSummary';

const Stack = createNativeStackNavigator();

function DashboardStack() {
  return (
      <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
      >
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="CategoryItems" component={CategoryItems} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
        <Stack.Screen name="Rewards" component={Rewards} />
        <Stack.Screen name="SendCredit" component={SendCredit} />
        <Stack.Screen name="SendCreditForm" component={SendCreditForm}/>
        <Stack.Screen name="SelectPaymentMethod" component={SelectPaymentMethod}/>
        <Stack.Screen name="SendingCash" component={SendingCash}/>
        <Stack.Screen name="CreditSend" component={CreditSend}/>

        <Stack.Screen name="RequestCredit" component={RequestCredit} />
        <Stack.Screen name="RequestForm" component={RequestForm} />
        <Stack.Screen name="RequestingRS" component={RequestingRS} />
        <Stack.Screen name="RequestSend" component={RequestSend} />

        <Stack.Screen name="Myaddress" component={Myaddress} />
        <Stack.Screen name="AddNewAddress" component={AddNewAddress} />
        <Stack.Screen name="ConfirmLocation" component={ConfirmLocation} />
        <Stack.Screen name="CheckoutDetails" component={CheckoutDetails} />
        <Stack.Screen name="OrderSummary" component={OrderSummary} />









      </Stack.Navigator>
  );
}

export default DashboardStack;