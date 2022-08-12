import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import StatusBar from '../../components/StatusBar';
import TopBarBack from '../../components/TopBar/TopBarBack';
import { commonStyles } from '../../utils/commonStyles';
import Helper from '../../utils/Helper';
import { Colors } from '../../utils/Colors';
import TitleButton from '../../components/Title/TitleButton';
import MyText from '../../components/Text/MyText';
import { Fonts } from '../../utils/Fonts';

const ReturnCancellation = () => {
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
        title={'Return & Cancellation'}
      />
      <ScrollView>
        <View style={styles.parent}>
          <TitleButton
            title="Return & Cancellation Policy"
            noButton
            style={{marginHorizontal: null}}
            textStyle={{
              // fontSize:20
              fontSize: Helper.getScreenWidth() * 0.052,
            }}
          />
          <MyText
            style={styles.txt}
            text={`You are eligible for a refund/replacement on items that were delivered to you if the item was (i) incorrect (ii) damaged, (iii) expired or (iv) missed. Place the complaint in-app in the “product quality” section. All complaints must be submitted within 2 hours of receiving the order for highly perishable items* and 24 hours for all other items. We will send you the replacement or refund within 24 hours of your complaint, if it is verified.`}
          />
           <MyText
            style={styles.txt}
            text={`*Fruits, Ice cream, Vegetables, Meat, Bread, Eggs, Butter`}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default ReturnCancellation

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: Helper.HorizontalValue,
    marginVertical: Helper.vertical(32),
  },
  txt:{
    marginHorizontal: null,
    marginTop:Helper.vertical(10)
    
  }

});