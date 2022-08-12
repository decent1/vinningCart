import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {commonStyles} from '../../utils/commonStyles';
import StatusBar from '../../components/StatusBar';
import TopBarBack from '../../components/TopBar/TopBarBack';
import { Colors } from '../../utils/Colors';
import Helper from '../../utils/Helper';
import { ImagePath } from '../../utils/ImagePath';
import ButtonSmall from '../../components/ButtonSmall';
import Button from '../../components/Button';
import { Fonts } from '../../utils/Fonts';

const RequestMoreItem = ({
  navigation
}) => {
  return (
    <View style={commonStyles.container}>
      <StatusBar
        backgroundColor={Colors.statusBarBackgroundColor}
        barStyle={commonStyles.statusBarStyleDark}
      />
      <TopBarBack
        noShadow
        onBackPress={() => {
          console.log('clicked');
        }}
        title={'Suggest New Product'}
      />
      <View style={styles.parent}>
        <Image source={ImagePath.confirmOrder} style={styles.img} />
        <Text style={styles.txt}>Request Received</Text>
        <TouchableOpacity 
        onPress={() => navigation.goBack()}
        style={styles.Button}>
         <Text style={styles.button_txt}>Request more items</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Dashboard')}
        style={styles.Button2}>
         <Text style={styles.button_txt2}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default RequestMoreItem

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: Helper.HorizontalValue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Helper.vertical(173),
  },
  txt: {
    // fontSize:14,
    fontSize: Helper.getScreenWidth() * 0.035,
    color:'#2D2C2C',

  },
  Button:{
      alignSelf:'center',
      width:Helper.getScreenWidth()*0.40,
      padding:5,
      borderRadius:8,
      marginTop:Helper.vertical(40),
      backgroundColor:'#e3e3e3',
      ...commonStyles.shadow
     
  },
button_txt:{
    textAlign:'center',
    // fontSize:14,
    fontSize:Helper.getScreenWidth()*0.035,
    fontFamily:Fonts.regular,
    color:'#2D2C2C',
  
},
Button2:{
    alignSelf:'center',
    width:Helper.getScreenWidth()*0.40,
    padding:5,
    borderRadius:8,
    marginTop:Helper.vertical(40),
    backgroundColor:'#E5F3FF',
    ...commonStyles.shadow
   
},
button_txt2:{
    textAlign:'center',
    // fontSize:14,
    fontSize:Helper.getScreenWidth()*0.035,
    fontFamily:Fonts.regular,
    color:Colors.primary,
  
},
 
});