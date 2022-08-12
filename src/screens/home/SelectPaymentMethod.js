import {StyleSheet, Text, View, ScrollView, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import {commonStyles} from '../../utils/commonStyles';
import StatusBar from '../../components/StatusBar';
import TopBarBack from '../../components/TopBar/TopBarBack';
import {Colors} from '../../utils/Colors';
import Helper from '../../utils/Helper';
import {Fonts} from '../../utils/Fonts';
import TitleButton from '../../components/Title/TitleButton';
import VectorIcon from '../../components/Icon/VectorIcon';
import {ImagePath} from '../../utils/ImagePath';
import Button from '../../components/Button';

const SelectPaymentMethod = ({
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
        title={'Select Payment Method'}
      />
      <ScrollView>
      <View style={styles.parent}>
    <View style={styles.masterCard}>
            <View style={[styles.Top]}>
              <TitleButton
                title={'Cards'}
                noButton
                style={{marginHorizontal: null, padding: 10}}
              />
              <View style={{flexDirection: 'row'}}>
                <VectorIcon
                  name="pencil"
                  family="EvilIcons"
                  style={{marginRight: -20}}
                  color={Colors.primary}
                />
                <VectorIcon
                  name="delete"
                  family="AntDesign"
                  color={Colors.primary}
                />
              </View>
            </View>
            
            <View style={[styles.Top]}>
              <View style={{flexDirection: 'row', padding: 10}}>
                <Image source={ImagePath.masterCard} style={styles.image} />
                <View style={styles.cardNumber}>
                  <Text style={styles.cardtxt}>**** **** **** **87</Text>
                  <Text style={styles.cardtxt}>Mastercard</Text>
                </View>
              </View>
              <View style={styles.circleOutline}>
                <View style={styles.innerOutline}></View>
              </View>
            </View>
            <View style={styles.hr} />
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <VectorIcon
                name="pluscircleo"
                family="AntDesign"
                size={15}
                color={Colors.primary}
              />
              <Text style={styles.addCardTxt}>Add Card</Text>
            </TouchableOpacity>
          </View>
          <Button 
          onPress={() => navigation.navigate('SendingCash')}
          title='Send' style={styles.btn} />
    </View>

      </ScrollView>
   
    </View>
  )
}

export default SelectPaymentMethod

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: Helper.HorizontalValue,
    marginVertical: Helper.vertical(32),
  },
  masterCard: {
    backgroundColor: Colors.appBackgroundColor,
    ...commonStyles.shadow,
    marginTop: Helper.vertical(36),
    // padding: 10,
    borderRadius: 5,
  },
  Top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  image: {
    height: 21,
    // width:29,
    width: Helper.getScreenWidth() * 0.08,
  },
  cardNumber: {
    marginLeft: 13,
  },
  cardtxt: {
    color: '#464646',
    fontSize: Helper.fontSize14,
  },
  circleOutline: {
    borderWidth: 1,
    width: 15,
    height: 15,
    borderRadius: 100,
    alignSelf: 'center',
    marginRight: Helper.horizontal(20),
    borderColor: Colors.primary,
  },
  innerOutline: {
    backgroundColor: Colors.primary,
    borderWidth: 1,
    width: 10,
    height: 10,
    borderRadius: 100,
    alignSelf: 'center',
    borderColor: Colors.primary,
    marginTop: Helper.vertical(70),
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: '#8C8C8C',
  },
  addCardTxt: {
    fontSize: Helper.fontSize14,
    fontFamily: Fonts.regular,
    color: Colors.primary,
  },
  btn: {
    marginTop: Helper.vertical(152),
    marginHorizontal: null,
    borderRadius: 10,
    marginBottom: Helper.vertical(20),
    alignSelf: 'center',
    //   width:260,
    width: Helper.getScreenWidth() * 0.72,
  },
});