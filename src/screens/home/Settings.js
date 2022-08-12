import {StyleSheet, Text, View, ScrollView, Switch, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {commonStyles} from '../../utils/commonStyles';
import StatusBar from '../../components/StatusBar';
import TopBarBack from '../../components/TopBar/TopBarBack';
import {Colors} from '../../utils/Colors';
import Helper from '../../utils/Helper';
import VectorIcon from '../../components/Icon/VectorIcon';
import {Fonts} from '../../utils/Fonts';
import ButtonSmall from '../../components/ButtonSmall';

const Settings = ({
  navigation
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
        title={'Settings'}
      />
      <ScrollView>
        <View style={styles.parent}>
          <View style={styles.child}>
            <View style={styles.info_box}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <VectorIcon
                  family={'Ionicons'}
                  name={'person-outline'}
                  color={Colors.primary}
                />
                <View>
                  <Text style={styles.key}>{'Full Name'}</Text>
                  <Text style={styles.value}>{'Wardah Rashid'}</Text>
                </View>
              </View>
              <TouchableOpacity 
              onPress={() => {
                navigation.navigate('EditProfile')
              }}
              style={styles.circle}>
                <VectorIcon
                  family="AntDesign"
                  name="edit"
                  style={styles.edit}
                  color={Colors.white}
                  size={14}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.info_box}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <VectorIcon
                  family={'Entypo'}
                  name={'mobile'}
                  color={Colors.primary}
                />
                <View>
                  <Text style={styles.key}>{'Mobile Number'}</Text>
                  <Text style={styles.value}>{'087438 7383'}</Text>
                </View>
              </View>
            </View>
            <View style={styles.info_box}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <VectorIcon
                  family={'Fontisto'}
                  name={'email'}
                  color={Colors.primary}
                />
                <View>
                  <Text style={styles.key}>{'Email'}</Text>
                  <Text style={styles.value}>{'Wrdavb@gmail.com'}</Text>
                </View>
              </View>
              <ButtonSmall onPress={() => {}} buttonTitle="Unverified" />
            </View>
            <View style={styles.info_box}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <VectorIcon
                  family={'Entypo'}
                  name={'calendar'}
                  color={Colors.primary}
                />
                <View>
                  <Text style={styles.key}>{'Date of Birth'}</Text>
                  <Text style={styles.value}>{'06/12/21'}</Text>
                </View>
              </View>
            </View>
            <View style={styles.info_box}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <VectorIcon
                  family={'FontAwesome'}
                  name={'transgender'}
                  color={Colors.primary}
                />
                <View>
                  <Text style={styles.key}>{'Gender'}</Text>
                  <Text style={styles.value}>{'Female'}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{marginVertical: Helper.vertical(20)}}>
            <View style={styles.botton_container}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <VectorIcon
                  family={'FontAwesome5'}
                  name={'award'}
                  color={Colors.primary}
                />
                <Text style={styles.txt}>Social Rewards Program</Text>
              </View>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? Colors.primary : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            {/* yaha */}
            <TouchableOpacity 
            onPress={() => navigation.navigate('ChangePassword')}
            style={[styles.botton_container]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <VectorIcon
                  family={'AntDesign'}
                  name={'lock'}
                  color={Colors.primary}
                />
                <Text style={styles.txt}>Change Password</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: Helper.HorizontalValue,
  },
  child: {
    backgroundColor: Colors.appBackgroundColor,
    ...commonStyles.shadow,
    padding: 12,
    marginVertical: Helper.vertical(30),
  },
  info_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    width: 30,
    height: 30,
    backgroundColor: Colors.primary,
    borderRadius: 100,
    alignItems: 'center',
  },
  edit: {
    marginTop: -6,
  },
  key: {
    // fontSize:14,
    fontSize: Helper.getScreenWidth() * 0.035,
    color: '#464646',
    fontFamily: Fonts.regular,
  },
  value: {
    // fontSize:14,
    fontSize: Helper.getScreenWidth() * 0.035,
    color: '#2D2C2C',
    fontFamily: Fonts.regular,
  },
  botton_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.appBackgroundColor,
    ...commonStyles.shadow,
  },
});
