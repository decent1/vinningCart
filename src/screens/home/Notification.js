import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {commonStyles} from '../../utils/commonStyles';
import StatusBar from '../../components/StatusBar';
import TopBarBack from '../../components/TopBar/TopBarBack';
import { Colors } from '../../utils/Colors';
import Helper from '../../utils/Helper';
import TitleButton from '../../components/Title/TitleButton';
import ButtonSmall from '../../components/ButtonSmall';
import { Fonts } from '../../utils/Fonts';
const Notification = () => {
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
        title={'Notifications'}
      />
      <ScrollView>
        <View style={styles.parent}>
          <View style={styles.notification_container}>
            <TitleButton
              title={'Welcome to Vinnigcart'}
              style={{marginHorizontal: null}}
              noButton
            />
            <View style={styles.apply_container}>
              <Text style={styles.txt}>
                Once they sign up using your referral code and complete a
                purchase, you and your friend become a part of the Referral
                Program. Get Airlift Credits when your friends complete their
                first purchase.
              </Text>
              <ButtonSmall onPress={() => {}} buttonTitle="APPLY" />
            </View>
            <Text style={styles.time}>4 hrs ago</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: Helper.HorizontalValue,
    marginVertical:Helper.vertical(10),
  },
  notification_container: {
    backgroundColor: Colors.appBackgroundColor,
    ...commonStyles.shadowBottom,
    marginTop: Helper.vertical(20),
    padding:15
  },
  apply_container:{
    flexDirection:'row',
  },
  txt:{
    flex:1,
    // fontSize:12,
    fontSize: Helper.getScreenWidth()*0.03,
    fontFamily:Fonts.regular
  },time:{
     // fontSize:12,
     fontSize: Helper.getScreenWidth()*0.03,
     alignSelf:'flex-end',
    //  fontSize:11
  }
});
