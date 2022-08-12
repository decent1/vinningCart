import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/commonStyles'
import StatusBar from '../../components/StatusBar';
import TopBarBack from '../../components/TopBar/TopBarBack';
import { Colors } from '../../utils/Colors';
import Helper from '../../utils/Helper';
import VectorIcon from '../../components/Icon/VectorIcon';
import { Fonts } from '../../utils/Fonts';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ChangePassword = ({
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
        title={'Change Password'}
      />
      <View style={styles.parent}>
        <Input
          placeholder="Current Password"
          style={styles.input}
          keyboardType={'default'}
          rightComponent={
            <VectorIcon family="AntDesign" name="eyeo" color={Colors.primary} />
          }
        />
        <Input
          placeholder="New Password"
          style={styles.input}
          keyboardType={'default'}
          rightComponent={
            <VectorIcon family="AntDesign" name="eyeo" color={Colors.primary} />
          }
        />
        <Input
          placeholder="Re-enter New Password"
          style={styles.input}
          keyboardType={'default'}
          rightComponent={
            <VectorIcon family="AntDesign" name="eyeo" color={Colors.primary} />
          }
        />

        <Button 
        onPress={() => navigation.goBack()}
        title="Change Password" style={styles.btn} />
      </View>
    </View>
  );
}

export default ChangePassword

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: Helper.HorizontalValue,
    marginVertical: Helper.vertical(20),
  },

  input: {
    ...commonStyles.shadow,
    backgroundColor: Colors.appBackgroundColor,
    borderRadius: 5,
    marginHorizontal: null,
    height: 57,
    marginTop: Helper.vertical(20),
    paddingLeft: 10,
  },
  txt: {
    // fontSize: 16,
    fontSize: Helper.getScreenWidth() * 0.04,
    color: '#464646',
    fontFamily: Fonts.regular,
    marginLeft: Helper.horizontal(15),
  },
  btn: {
    marginTop: Helper.vertical(159),
    borderRadius: 10,
  },
});