import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect} from 'react'
import { commonStyles } from '../../utils/commonStyles'
import StatusBar from '../../components/StatusBar';
import TopBarBack from '../../components/TopBar/TopBarBack';
import {Colors} from '../../utils/Colors';
import Helper from '../../utils/Helper';
import { ImagePath } from '../../utils/ImagePath';
import { Fonts } from '../../utils/Fonts';

const SendingCash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('CreditSend')
    },2000)
  },[])
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
        title={''}
      />
      <View style={styles.parent}>
        <Image source={ImagePath.money} style={styles.Cash} />
        <Text style={styles.normalTxt}>
          Sending <Text style={styles.bold}>Rs 300</Text> to
          <Text style={styles.bold}> ABC</Text>{' '}
        </Text>
      </View>
    </View>
  );
}

export default SendingCash

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: Helper.HorizontalValue,
    alignItems:'center'
  },
  Cash:{
    width:Helper.getScreenWidth()*0.3,
    height:Helper.getScreenHeight()*0.2,
    marginTop:Helper.vertical(121)
  },
  bold:{
    fontSize:Helper.fontSize18,
    fontFamily:Fonts.regular,
    color:Colors.primary
  },
  normalTxt:{
    fontSize:Helper.fontSize18,
    fontFamily:Fonts.regular
  }
})