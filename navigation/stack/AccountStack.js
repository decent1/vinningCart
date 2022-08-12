import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../../src/screens/home/Account';
import Notification from '../../src/screens/home/Notification'
import HelpSupport from '../../src/screens/home/HelpSupport';
import SuggestNewProduct from '../../src/screens/home/SuggestNewProduct';
import RequestMoreItem from '../../src/screens/home/RequestMoreItem';
import FAQS from '../../src/screens/home/FAQS';
import ReturnCancellation from '../../src/screens/home/ReturnCancellation';
import PrivacyPolicy from '../../src/screens/home/PrivacyPolicy';
import MyWhishList from '../../src/screens/home/MyWhishList';
import OrderHistory from '../../src/screens/home/OrderHistory';
import OrderStatus from '../../src/screens/home/OrderStatus';
import TrackOrder from '../../src/screens/home/TrackOrder';
import Wallet from '../../src/screens/home/Wallet';
import AddCard from '../../src/screens/home/AddCard';
import Scan from '../../src/screens/home/Scan';
import Settings from '../../src/screens/home/Settings';
import ChangePassword from '../../src/screens/home/ChangePassword';
import EditProfile from '../../src/screens/home/EditProfile';
import Profile from '../../src/screens/home/Profile';
import RefferalProgram from '../../src/screens/home/RefferalProgramm';
import RefferalProgramDetails from '../../src/screens/home/RefferalProgramDetails';
import Report from '../../src/screens/home/Report';
const Stack = createNativeStackNavigator();

function AccountStack() {
  return (
      <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
      >
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="SuggestNewProduct" component={SuggestNewProduct} />
        <Stack.Screen name="HelpSupport" component={HelpSupport} />
        <Stack.Screen name="RequestMoreItem" component={RequestMoreItem} />
        <Stack.Screen name="FAQS" component={FAQS}/>
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy}/>
        <Stack.Screen name="ReturnCancellation" component={ReturnCancellation}/>
        <Stack.Screen name="MyWhishList" component={MyWhishList}/>
        <Stack.Screen name="OrderHistory" component={OrderHistory}/>
        <Stack.Screen name="OrderStatus" component={OrderStatus}/>
        <Stack.Screen name="TrackOrder" component={TrackOrder}/>
        <Stack.Screen name="Wallet" component={Wallet}/>
        <Stack.Screen name="AddCard" component={AddCard}/>
        <Stack.Screen name="Scan" component={Scan}/>
        <Stack.Screen name="Settings" component={Settings}/>
        <Stack.Screen name="ChangePassword" component={ChangePassword}/>
        <Stack.Screen name="EditProfile" component={EditProfile}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="RefferalProgram" component={RefferalProgram}/>
        <Stack.Screen name="RefferalProgramDetails" component={RefferalProgramDetails}/>
        <Stack.Screen name="Report" component={Report}/>

      </Stack.Navigator>
  );
}

export default AccountStack;