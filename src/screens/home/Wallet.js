import {StyleSheet, Text, View, ScrollView, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import {commonStyles} from '../../utils/commonStyles';
import StatusBar from '../../components/StatusBar';
import TopBarBack from '../../components/TopBar/TopBarBack';
import {Colors} from '../../utils/Colors';
import Helper from '../../utils/Helper';
import MyText from '../../components/Text/MyText';
import {Fonts} from '../../utils/Fonts';
import H1 from '../../components/Text/h1';
import ButtonSmall from '../../components/ButtonSmall';
import TitleButton from '../../components/Title/TitleButton';
import VectorIcon from '../../components/Icon/VectorIcon';
import {ImagePath} from '../../utils/ImagePath';

const Wallet = ({
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
        title={'Wallet'}
      />
      <ScrollView>
        <View style={styles.parent}>
          <View style={styles.credit_card}>
            <MyText text={'Available credits'} style={styles.txt} />
            <H1 text={'RS 0'} style={styles.h1} />
            <View style={styles.buttonContainer}>
              <ButtonSmall
                buttonTitle="Send credit"
                buttonTextStyle={{fontSize: Helper.fontSize12}}
                buttonStyle={{marginRight: 8}}
              />
              <ButtonSmall
                buttonTitle="Request Credit"
                buttonTextStyle={{fontSize: Helper.fontSize12}}
                buttonStyle={{marginLeft: 8}}
              />
            </View>
          </View>
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
            onPress={() => {
              navigation.navigate('AddCard')
            }}
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
          <View style={styles.transaction_container}>
            <View style={styles.transaction}>
              <Text style={styles.LeftSide_txt}>Transactions</Text>
              <TouchableOpacity>
                <Text style={styles.RightSide_txt}>View All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.transaction}>
              <View style={styles.grocery_Flex}>
                <View style={styles.grocery_icon_container}>
                  <VectorIcon
                    name="shopping-bag"
                    family="Feather"
                    color={Colors.primary}
                  />
                </View>
                <View style={{marginLeft:Helper.horizontal(15)}}>
                  <Text style={styles.smallTxt}>Shopping</Text>
                  <Text style={styles.transaction_txt}>Grocery</Text>
                </View>
              </View>
              <Text>{`- PKR 150`}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: Helper.HorizontalValue,
    marginVertical: Helper.vertical(32),
  },
  credit_card: {
    // width:297,
    width: Helper.getScreenWidth() * 0.85,
    alignSelf: 'center',
    borderRadius: 8,
    paddingVertical: Helper.vertical(31),
    backgroundColor: Colors.appBackgroundColor,
    ...commonStyles.shadow,
  },
  txt: {
    fontSize: Helper.fontSize18,
    fontFamily: Fonts.regular,
    color: '#2D2C2C',
    textAlign: 'center',
  },
  h1: {
    textAlign: 'center',
    marginTop: Helper.vertical(20),
    fontSize: 35,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: Helper.vertical(31),
    alignSelf: 'center',
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
  transaction_container: {
    backgroundColor: Colors.appBackgroundColor,
    ...commonStyles.shadow,
    marginTop: Helper.vertical(33),
    padding:10,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'

  },
  LeftSide_txt:{
      color:'#2D2C2C',
      fontSize:Helper.fontSize14,
      fontFamily:Fonts.regular

  },
  RightSide_txt:{
      color:Colors.primary,
      fontSize:Helper.fontSize14,
      fontFamily:Fonts.regular
  },
  grocery_Flex:{
      flexDirection:'row',
      marginTop:Helper.vertical(20),
      alignItems:'center'
  },
  grocery_icon_container:{
      backgroundColor:'#E5F3FF',
      borderRadius:100, 
  },
  transaction_txt:{
      fontSize:Helper.fontSize16,
      fontFamily:Fonts.regular,
      color:'#464646'

  },
  smallTxt:{
      fontSize:Helper.fontSize12,
      fontFamily:Fonts.regular,
      color:'#464646'
  }
});
