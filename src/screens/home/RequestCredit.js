import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {commonStyles} from '../../utils/commonStyles';
import StatusBar from '../../components/StatusBar';
import TopBarBack from '../../components/TopBar/TopBarBack';
import {Colors} from '../../utils/Colors';
import Helper from '../../utils/Helper';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TitleButton from '../../components/Title/TitleButton';
import { Fonts } from '../../utils/Fonts';
const RequestCredit = ({navigation}) => {
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
        title={'Request Credit'}
      />
      <ScrollView>
        <View style={styles.parent}>
          <View style={styles.container_box}>
            <TitleButton
              title={'Enter amount to request'}
              style={{marginHorizontal: null}}
              textStyle={{fontFamily: Fonts.regular}}
              noButton
            />
            <Input
              placeholder=""
              style={styles.input}
              keyboardType={'number-pad'}
            />
          </View>
          <View style={styles.container_box}>
            <TitleButton
              title={'Add message'}
              style={{marginHorizontal: null}}
              textStyle={{fontFamily: Fonts.regular}}
              noButton
            />
            <Input
              placeholder=""
              style={styles.input}
              keyboardType={'default'}
            />
          </View>
          <Button 
          onPress={() => navigation.navigate('RequestForm')}
          title='Continue' style={styles.btn} />
        </View>
      </ScrollView>
    </View>
  );
};

export default RequestCredit;

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: Helper.HorizontalValue,
    marginVertical: Helper.vertical(32),
  },
  input: {
    ...commonStyles.shadow,
    backgroundColor: Colors.appBackgroundColor,
    borderRadius: 5,
    marginHorizontal: null,
  
    marginTop: Helper.vertical(20),
    paddingLeft: 10,
    // height: 57,
    height:Helper.getScreenHeight()*0.09
  },
  container_box:{
      marginTop:Helper.vertical(38)
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
