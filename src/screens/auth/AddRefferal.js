import React, {useState} from 'react';
import {View, Text, Keyboard, StyleSheet, ScrollView} from 'react-native';
import {commonStyles} from '../../utils/commonStyles';
import {Colors} from '../../utils/Colors';
import {Fonts} from '../../utils/Fonts';
import StatusBar from '../../components/StatusBar';
import H1 from '../../components/Text/h1';
import Helper from '../../utils/Helper';
import TopBarBack from '../../components/TopBar/TopBarBack';
import P1 from '../../components/Text/p1';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import ButtonSmall from '../../components/ButtonSmall';
import P3 from '../../components/Text/p3';
import P2 from '../../components/Text/p2';
import Input from '../../components/Input';
import MyText from '../../components/Text/MyText';
import Button from '../../components/Button';

export default function AddRefferal({
  navigation
}) {
  const [refferalCode, setRefferalCode] = useState('');
  const [timeLeft, setTimeLeft] = useState('00:60');
  const onVerifyCode = async code => {};
  return (
    <View style={commonStyles.container}>
      <StatusBar
        backgroundColor={Colors.statusBarBackgroundColor}
        barStyle={commonStyles.statusBarStyleDark}
      />
      <ScrollView>
      <TopBarBack noShadow />
      <P3 style={styles.title} text={'Your account is being created'} />
      <P2 style={styles.question} text={'Do you have a refferal code?'} />

      <Input
        style={[commonStyles.inputCurved, styles.input]}
        placeholder={'Enter Refferal Code'}
        value={refferalCode}
        onChangeText={value => setRefferalCode(value)}
      />
     
     <MyText 
        fontSize={Helper.fontSize12}
        style={styles.description}
        text={'Enter the code shared by your friend via sms or email'}
     />

     <Button 
      onPress={() => navigation.navigate('HomeStack')}
      style={[commonStyles.buttonCurved,styles.button1]}
      title={'Sign up'}
     />
     <Button 
     onPress={() => navigation.navigate('HomeStack')}
        style={[
          commonStyles.buttonCurved,
          styles.button2,
        ]}
        textStyle={styles.buttonText}
        title={'No refferal code'}
     />
     </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    marginTop: Helper.vertical(32),
  },
  title: {
    marginTop: Helper.vertical(10),
    color: Colors.primary,
  },
  description: {
    color: '#464646',
    marginTop: Helper.vertical(10),
    marginRight: Helper.horizontal(100),
  },
  timeLeftText: {
    // fontSize: 16,
    fontSize: Helper.getScreenWidth() * 0.04,
    fontFamily: Fonts.regular,
    marginHorizontal: Helper.HorizontalValue,
    color: '#464646',
    marginTop: Helper.vertical(36),
  },
  timeText: {
    fontFamily: Fonts.bold,
  },
  button: {
    marginHorizontal: Helper.HorizontalValue,
    marginTop: Helper.vertical(12),
    backgroundColor: Colors.primary,
  },
  buttonText: {
    color: Colors.white,
    fontFamily: Fonts.regular,
  },
  question: {
    color: '#464646',
    marginTop: Helper.vertical(40),
  },
  input: {
    marginTop: Helper.vertical(12),
  },
  description:{
    color:Colors.primary,
    marginTop:Helper.vertical(8)
  },
  button1:{
    marginTop:Helper.vertical(116)
  },
  button2:{
    backgroundColor:Colors.white,
    borderWidth:1,
    borderColor:'#464646',
    marginTop:Helper.vertical(12)
  },
  buttonText:{
    color:'#464646'
  }
});
