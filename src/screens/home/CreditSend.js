import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/commonStyles'
import StatusBar from '../../components/StatusBar';
import TopBarBack from '../../components/TopBar/TopBarBack';
import {Colors} from '../../utils/Colors';
import Helper from '../../utils/Helper';
import { ImagePath } from '../../utils/ImagePath';
import { Fonts } from '../../utils/Fonts';
import MyText from '../../components/Text/MyText';
import Button from '../../components/Button';
import ButtonSmall from '../../components/ButtonSmall';

const CreditSend = ({navigation}) => {
  return (
    <View style={commonStyles.container}>
    <StatusBar
      backgroundColor={Colors.statusBarBackgroundColor}
      barStyle={commonStyles.statusBarStyleDark}
    />
   
    <View style={styles.parent}>
      <Image source={ImagePath.confirmOrder} style={styles.Image} />
      <MyText text={`Credit Sent`} style={styles.txt} />
      <View style={styles.buttonContainer}>
      <ButtonSmall
        onPress={() => navigation.navigate('SendCredit')}
        buttonTitle="Send more credit"
        buttonStyle={[styles.btn, {backgroundColor: '#C4C4C4'}]}
        buttonTextStyle={{color: '#2D2C2C'}}
      />
      <ButtonSmall
        onPress={() => navigation.navigate('Dashboard')}

        buttonTitle="Continue Shopping"
        buttonStyle={styles.btn}
      />
      </View>
    
    </View>
  </View>
  )
}

export default CreditSend

const styles = StyleSheet.create({
    parent: {
      marginHorizontal: Helper.HorizontalValue,
      alignItems: 'center',
    },
    Image: {
      marginTop: Helper.vertical(121),
    },
    txt: {
      fontSize: Helper.fontSize18,
      color: '#2D2C2C',
      fontFamily: Fonts.regular,
    },
    btn: {
      //   width:168,
      width: Helper.getScreenWidth() * 0.48,
      //   height:37,
      height: Helper.getScreenHeight() * 0.06,
      marginTop: Helper.vertical(18),
    },
    buttonContainer:{
        marginTop:Helper.vertical(41)
    }
  });