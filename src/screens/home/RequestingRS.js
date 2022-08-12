import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect} from 'react'
import { commonStyles } from '../../utils/commonStyles'
import StatusBar from '../../components/StatusBar';
import TopBarBack from '../../components/TopBar/TopBarBack';
import {Colors} from '../../utils/Colors';
import Helper from '../../utils/Helper';
import { ImagePath } from '../../utils/ImagePath';
import { Fonts } from '../../utils/Fonts';

const RequestingRS = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('RequestSend')
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
      <View style={{
        height:151,
        width:151,
        alignSelf:'center',
        marginTop:Helper.vertical(121)
      }}>
  <Image source={ImagePath.Cash} style={styles.Cash} />
      </View>
        <Text style={styles.normalTxt}>
          Requesting <Text style={styles.bold}>Rs 300</Text> from
          <Text style={styles.bold}>ABC</Text>{' '}
        </Text>
      </View>
    </View>
  );
}

export default RequestingRS

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: Helper.HorizontalValue,
    alignItems:'center'
  },
  Cash:{
    // height:151,
    // width:151,
    height:'100%',
    width:'100%'
   
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