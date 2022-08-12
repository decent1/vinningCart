// import React,{useState} from 'react'
// import {
//   View,
//   Text,
//   SafeAreaView
// } from 'react-native'
// import Button from './src/components/Button'
// import VectorIcon from './src/components/Icon/VectorIcon'
// import Input from './src/components/Input'
// import H1 from './src/components/Text/h1'
// import P1 from './src/components/Text/p1'
// import { commonStyles } from './src/utils/commonStyles'

// export default function App(){
//   const [value,setValue] = useState('')
//   return <SafeAreaView style={{
//     flex:1,
//   }}>
//     {/* <VectorIcon 
//       name="stepforward"
//       size={24}
//       color="red"
//       style={{
//         backgroundColor:'yellow'
//       }}
//       family={'AntDesign'}
//     /> */}

//     {/* <Input 
//       placeholder='Phone Number'
//       value={value}
//       onChangeText={(value) => {
//         setValue(value)
//       }}
//       keyboardType='phone-pad'
//       leftComponent={
//         <VectorIcon 
//           family='FontAwesome'
//           name="phone" 
//           size={18} 
//         />
//       }
//       style={commonStyles.inputCurved}
//     /> */}

//     {/* <Button 
//       title={'Next'}
//       onPress={()=>{
//         console.log('clicked')
//       }}
//       style={[
//         commonStyles.buttonCurved,
//         commonStyles.shadow,
//       ]}
//     /> */}
//     <H1 
//       text={'Hello World'}
//     />
//     <P1 
//       text={'Hello World'}
//     />


//   </SafeAreaView>
// }


import React from 'react'
import {
  View,
  Text
} from 'react-native'
import StatusBar from './src/components/StatusBar'

import Splash from './src/screens/Splash' //done
import EnterPhone from './src/screens/auth/EnterPhone' //done
import EnterCode from './src/screens/auth/EnterCode' //done
import Login from './src/screens/auth/Login' //done //forgot password remain
import SignUp from './src/screens/auth/SignUp' //done
import AddRefferal from './src/screens/auth/AddRefferal' //done
import Dashboard from './src/screens/home/Dashboard' //done
import Categories from './src/screens/home/Categories' //done 
import CategoryItems from './src/screens/home/CategoryItems' //done
import ItemDetails from './src/screens/home/ItemDetails' //done
import Account from './src/screens/home/Account' //done
import Search from './src/screens/home/Search' //done
import MyCart from './src/screens/home/MyCart' //done
import ConfirmLocation from './src/screens/home/ConfirmLocation' //done
import Myaddress from './src/screens/home/MyAddress' //done
import Notification from './src/screens/home/Notification' //done
import HelpSupport from './src/screens/home/HelpSupport' //done
import SuggestNewProduct from './src/screens/home/SuggestNewProduct'// done
import ReturnCancellation from './src/screens/home/ReturnCancellation' //done
import FAQS from './src/screens/home/FAQS' //done
import PrivacyPolicy from './src/screens/home/PrivacyPolicy' //done
import CheckoutDetails from './src/screens/home/CheckoutDetails' //done 
import CheckoutDetails2 from './src/screens/home/CheckOutDetails2' //done
import OrderSummary from './src/screens/home/OrderSummary' //done
import MyWhishList from './src/screens/home/MyWhishList' //done
import OrderStatus from './src/screens/home/OrderStatus' //done
import TrackOrder from './src/screens/home/TrackOrder' //done 
import OrderHistory from './src/screens/home/OrderHistory' //done
import Scan from './src/screens/home/Scan' //done
import Profile from './src/screens/home/Profile' //done
import Settings from './src/screens/home/Settings' //done
import EditProfile from './src/screens/home/EditProfile' //done
import ChangePassword from './src/screens/home/ChangePassword' //done
import RequestMoreItem from './src/screens/home/RequestMoreItem' //done
import Report from './src/screens/home/Report'
import Wallet from './src/screens/home/Wallet' //done
import AddCard from './src/screens/home/AddCard' //done
import RequestCredit from './src/screens/home/RequestCredit' //done
import RequestForm from './src/screens/home/RequestForm' //done
import RequestingRS from './src/screens/home/RequestingRS' //done
import RequestSend from './src/screens/home/RequestSend' //done
import RequestReceived from './src/screens/home/RequestReceived'
import SendCredit from './src/screens/home/SendCredit' //done
import SendCreditForm from './src/screens/home/SendCreditForm' //done
import SelectPaymentMethod from './src/screens/home/SelectPaymentMethod'
import SendingCash from './src/screens/home/SendingCash' //done
import CreditSend from './src/screens/home/CreditSend' //done
import Rewards from './src/screens/home/Rewards' //done
import RefferalProgram from './src/screens/home/RefferalProgramm'
import RefferalProgramDetails from './src/screens/home/RefferalProgramDetails'

import RootStack from './navigation/stack/RootStack'



export default function App({}){
  return <RootStack />
}