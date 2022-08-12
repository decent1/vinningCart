import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { commonStyles } from '../../utils/commonStyles'
import StatusBar from '../../components/StatusBar'
import TopBarBack from '../../components/TopBar/TopBarBack'
import { Colors } from '../../utils/Colors'
import Helper from '../../utils/Helper'
import TitleButton from '../../components/Title/TitleButton'
import VectorIcon from '../../components/Icon/VectorIcon'
import { Fonts } from '../../utils/Fonts'
import Button from '../../components/Button'

const HelpSupport = ({
  navigation
}) => {
    const [buttons, setButton] = useState([
      // {
      //   id: 1,
      //   name: 'Report Technical Complaint',
      //   family: 'AntDesign',
      //   iconName: 'setting',
      // },
      // {
      //   id: 2,
      //   name: 'My Tickets',
      //   family: 'FontAwesome',
      //   iconName: 'ticket',
      // },
      {
        id: 3,
        name: 'FAQs',
        family: 'Entypo',
        iconName: 'dots-three-horizontal',
        nav:"FAQS",
      },
      {
        id: 4,
        name: 'Privacy Policy',
        family: 'MaterialCommunityIcons',
        iconName: 'file-search-outline',
        nav:"PrivacyPolicy",
      },
      {
        id: 5,
        name: 'Return & Cancellation Policy',
        family: 'MaterialCommunityIcons',
        iconName: 'file-search-outline',
        nav:"ReturnCancellation",
      },
      
    ]);
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
        title={'Help & Support'}
      />
      <ScrollView>
        <Text
          style={{
            fontFamily:Fonts.regular,
            alignSelf:'center',
            fontSize:Helper.fontSize16,
            color:'#464646',
            marginTop:Helper.vertical(20)
          }}
        >{'Do you want our help & support?'}</Text>

        <Button 
          onPress={() => navigation.navigate('AuthStack')}
          style={[commonStyles.buttonCurved,{
            marginTop:Helper.vertical(28)
          }]}
          title='Login/Signup Now'
        />
        <View style={styles.parent}>
          {buttons.map((value, index) => {
            return (
              <TouchableOpacity 
              onPress={() => navigation.navigate(value.nav)}
              key={index} style={styles.card}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <VectorIcon
                    family={value.family}
                    name={value.iconName}
                    color={Colors.primary}
                  />
                  <Text style={styles.txt}>{value.name}</Text>
                </View>

                <VectorIcon
                  family="MaterialIcons"
                  name="keyboard-arrow-right"
                  color={Colors.gray}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export default HelpSupport

const styles = StyleSheet.create({
    parent:{
      marginHorizontal:Helper.HorizontalValue,
      marginVertical:Helper.vertical(20)
      
    },
    header:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop: Helper.vertical(12),
  
    },
    card:{
      borderRadius:5,
      height:57,
      backgroundColor:Colors.appBackgroundColor,
      ...commonStyles.shadow,
      marginTop: Helper.vertical(27),
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
  
    },
    txt:{
      // fontSize:18
    fontSize: Helper.getScreenWidth()*0.045,
    color:'#464646',
    textAlign:'center',
    fontFamily:Fonts.regular
    },
    note:{
      // fontSize: 16,
  fontSize: Helper.getScreenWidth()*0.04,
  color:Colors.gray,
  marginTop:Helper.vertical(30),
  fontFamily:Fonts.regular
  
    },
    btn:{
      backgroundColor:Colors.primary,
      width:Helper.getScreenWidth()*0.35,
      padding:10,
      alignItems:'center',
      borderRadius:8,
      marginTop:Helper.vertical(20),
      ...commonStyles.shadowBottom
    },
    btn_txt:{
      fontFamily:Fonts.medium,
      // fontSize:14,
      fontSize:Helper.getScreenWidth()*0.035,
      color:Colors.white
    }
    
  })