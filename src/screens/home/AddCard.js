import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import React, {useState} from 'react';
import {commonStyles} from '../../utils/commonStyles';
import StatusBar from '../../components/StatusBar';
import TopBarBack from '../../components/TopBar/TopBarBack';
import {Colors} from '../../utils/Colors';
import Helper from '../../utils/Helper';
import Input from '../../components/Input';
import { Fonts } from '../../utils/Fonts';
import TitleButton from '../../components/Title/TitleButton';
import { ImagePath } from '../../utils/ImagePath';
import Button from '../../components/Button';
const AddCard = ({
  navigation
}) => {
  const [card_number, setCard_number] = useState('');
  const [name, setName] = useState('uroosa')
  const [date, setDate] = useState(`24/1997`)
  const [cvv, setCvv] = useState('4000')
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
        title={'Add Card'}
      />
      <ScrollView>
        <View style={styles.parent}>
          <View style={styles.card}>
            <TextInput
              value={card_number}
              style={styles.input}
              placeholder="**** **** **** 6878"
              // textAlignVertical="center"
              placeholderTextColor={Colors.white}
              keyboardType={'number-pad'}
            />

            <View style={styles.card_footer}>
              <Text style={styles.name}>AbC</Text>
              <Text style={styles.name}>07/25</Text>
            </View>
          </View>
          <View style={styles.form}>
            <Input
              placeholder="Name"
              style={styles.formInput}
              keyboardType={'default'}
              onChangeText={value => {
                setName(value);
              }}
              value={name}
            />
            <Input
              placeholder="Card Number"
              style={styles.formInput}
              keyboardType={'default'}
              onChangeText={value => {
                setCard_number(value);
              }}
              value={card_number}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Input
                  placeholder="MM/YY"
                  style={[
                    styles.formInput,
                    {width: Helper.getScreenWidth() * 0.59},
                  ]}
                  keyboardType={'default'}
                  onChangeText={value => {
                    setDate(value);
                  }}
                  value={date}
                />
                <Text style={styles.expiry}>Enter expiry date</Text>
              </View>
              <Input
                placeholder="Cvv"
                style={[styles.formInput, {width: 73}]}
                keyboardType={'default'}
                onChangeText={value => {
                  setCvv(value);
                }}
                value={cvv}
              />
            </View>
            <View style={styles.creditsCards}>
              <Image source={ImagePath.visa} style={[styles.creditsCardsImage,{marginRight:5}]} />
              <Image source={ImagePath.masterCardOrange} style={styles.creditsCardsImage} />
              <Image source={ImagePath.americanexpress} style={[styles.creditsCardsImage,{marginLeft:5}]} />
            </View>
            <Button 
            onPress={() => {
              navigation.goBack()
            }}
            title='Add Card' style={styles.btn} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: Helper.HorizontalValue,
    marginVertical: Helper.vertical(32),
  },
  card: {
    backgroundColor: Colors.primary,
    ...commonStyles.shadow,
    borderRadius: 10,
    // width:297,
    width: Helper.getScreenWidth() * 0.85,
    alignSelf: 'center',

    padding: 20,
    // height:140,
    height: Helper.getScreenHeight() * 0.25,
  },
  input: {
    backgroundColor: Colors.primary,
    fontSize: Helper.fontSize20,
    marginTop: Helper.vertical(55),
    color: Colors.white,
  },
  card_footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: Helper.fontSize14,
    fontFamily: Fonts.regular,
    color: Colors.white,
  },
  form: {
    marginTop: Helper.vertical(20),
  },
  formInput: {
    ...commonStyles.shadow,
    backgroundColor: Colors.appBackgroundColor,
    borderRadius: 5,
    marginHorizontal: null,
    marginTop: Helper.vertical(30),
    paddingLeft: 10,
    fontSize: Helper.fontSize14,
    fontFamily: Fonts.regular,
    color: '#2D2C2C',
  },
  expiry: {
    fontSize: Helper.fontSize12,
    fontFamily: Fonts.medium,
    color: '#353535',
    opacity: 0.6,
    marginTop: 5,
  },
  creditsCards: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: Helper.vertical(22),
  },
  creditsCardsImage: {
    //   height:23,
    height: Helper.getScreenHeight() * 0.04,
    //   width:29,
    width: Helper.getScreenWidth() * 0.09,
  },
  btn: {
      marginTop:Helper.vertical(129),
      marginHorizontal:null,
      borderRadius:10,
     
      alignSelf:'center',
    //   width:260,
      width:Helper.getScreenWidth()*0.72
  },
});
