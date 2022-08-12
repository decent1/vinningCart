import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React,{useState} from 'react'
import { commonStyles } from '../../utils/commonStyles'
import StatusBar from '../../components/StatusBar';
import TopBarBack from '../../components/TopBar/TopBarBack';
import { Colors } from '../../utils/Colors';
import Helper from '../../utils/Helper';
import Input from '../../components/Input';
import { Fonts } from '../../utils/Fonts';
import VectorIcon from '../../components/Icon/VectorIcon';
import TitleButton from '../../components/Title/TitleButton';
import ButtonSmall from '../../components/ButtonSmall';
import Button from '../../components/Button';
const EditProfile = ({
  navigation
}) => {
    const [selectGender, setSelectGender] = useState('male')
    const [isSelected, setIsSelected] = useState(1)
    console.log(isSelected)
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
        title={'Edit Profile'}
      />
      <ScrollView>
        <View style={[styles.parent]}>
          <View style={styles.input_container}>
            <TitleButton
              title={'Full Name'}
              style={{marginHorizontal: null}}
              noButton
            />
            <Input
              placeholder="Wardah Rashid"
              style={styles.input}
              keyboardType={'default'}
            />
          </View>
          <View style={styles.input_container}>
            <TitleButton
              title={'Mobile Number'}
              style={{marginHorizontal: null}}
              noButton
            />
            <Input
              placeholder="75895959 55"
              style={styles.input}
              keyboardType={'number-pad'}
            />
          </View>
          <View style={styles.input_container}>
            <TitleButton
              title={'Email'}
              style={{marginHorizontal: null}}
              noButton
            />
            <Input
              placeholder="wRAD@GMAIL.COM "
              style={styles.input}
              keyboardType={'email-address'}
            />
          </View>
          <View style={styles.input_container}>
            <TitleButton
              title={'Date of Birth'}
              style={{marginHorizontal: null}}
              noButton
            />
            <Input
              placeholder="DD/MM/YY"
              style={styles.input}
              keyboardType={'number-pad'}
            />
          </View>
          <View style={styles.input_container}>
            <TitleButton
              title={'Gender'}
              style={{marginHorizontal: null}}
              noButton
            />
          </View>
          <View style={styles.botton_container}>
            <ButtonSmall
              onPress={() => {
                setSelectGender('male')
              }}
              buttonStyle={{
                backgroundColor: selectGender === 'male' ? Colors.lightYellow : '#E5F3FF',
              }}
              buttonTitle="Male"
            />
            <ButtonSmall
              onPress={() => {
                setSelectGender('female')
              }}
              buttonTitle="Female"
              buttonStyle={{
                backgroundColor: selectGender === 'female' ? Colors.lightYellow : '#E5F3FF',
                marginLeft: 12,
              }}
            />
          </View>
          <Button 
          onPress={() => {
            navigation.goBack()
          }}
          title="Update Profile" style={styles.btn} />
        </View>
      </ScrollView>
    </View>
  );
}

export default EditProfile

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: Helper.HorizontalValue,
    marginVertical: Helper.vertical(49),
  },

  input: {
    ...commonStyles.shadow,
    backgroundColor: Colors.appBackgroundColor,
    borderRadius: 5,
    marginHorizontal: null,
    height: 57,
    marginTop: Helper.vertical(10),
    paddingLeft: 10,
  },
  input_container:{
      marginTop:Helper.vertical(20)
  },
  botton_container:{
      flexDirection:'row',
      marginTop:Helper.vertical(20)
  },
  btn:{
      marginTop:Helper.vertical(100),
      borderRadius:10
  }
});