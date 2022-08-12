import { StyleSheet, Text, View ,ScrollView,TouchableOpacity} from 'react-native'
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

const Account = ({
  navigation
}) => {
  const [buttons, setButton] = useState([
    {
      id:9,
      name:'Profile',
      family:'Feather',
      iconName:'box',
      nav:'Profile',
    },
    {
      id:1,
      name:'Notifications',
      family:'Fontisto',
      iconName:'bell',
      nav:'Notification',
    },
    {
      id:2,
      name:'Suggest New Product',
      family:'AntDesign',
      iconName:'questioncircleo',
      nav:'SuggestNewProduct',
    },
    {
      id:3,
      name:'Help & Support',
      family:'Feather',
      iconName:'box',
      nav:'HelpSupport',
    },
    {
      id:4,
      name:'My Wish List',
      family:'Feather',
      iconName:'box',
      nav:'MyWhishList',
    },
    {
      id:5,
      name:'Order History',
      family:'Feather',
      iconName:'box',
      nav:'OrderHistory',
    },
    {
      id:6,
      name:'Wallet',
      family:'Feather',
      iconName:'box',
      nav:'Wallet',
    },
    {
      id:7,
      name:'Scan',
      family:'Feather',
      iconName:'box',
      nav:'Scan',
    },
    {
      id:8,
      name:'Settings',
      family:'Feather',
      iconName:'box',
      nav:'Settings',
    },
    {
      id:10,
      name:'Refferal Program',
      family:'Feather',
      iconName:'box',
      nav:'RefferalProgram',
    },
    {
      id:11,
      name:'Report',
      family:'Feather',
      iconName:'box',
      nav:'Report',
    }
    
  ])
  return (
    <View style={commonStyles.container}>
         <StatusBar 
            backgroundColor={Colors.statusBarBackgroundColor}
            barStyle={commonStyles.statusBarStyleDark}
        />
        <ScrollView>
      <View style={styles.parent}>
        <View style={styles.header}>
        <TitleButton
            title={'Welcome !'}
            style={{marginHorizontal:null}}
            noButton
          />
          <VectorIcon
          family='Feather'
          name='phone-call'
          color={Colors.primary}
          />
        </View>
        {
          buttons.map((value,index)=>{
            return (
              <TouchableOpacity 
              onPress={() => navigation.navigate(value.nav)}
              key={index} style={styles.card}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <VectorIcon
                    family={value.family}
                    name={value.iconName}
                    color={Colors.gray}
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
          })
        }

        <Text style={styles.note}>To continue shopping please login/signup to vinnig cart and get 200 off on your first order!</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btn_txt}>SignIn/SignUp</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  parent:{
    marginHorizontal:Helper.HorizontalValue,
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
    ...commonStyles.shadowBottom,
    marginBottom:20
  },
  btn_txt:{
    fontFamily:Fonts.medium,
    // fontSize:14,
    fontSize:Helper.getScreenWidth()*0.035,
    color:Colors.white
  }
  
})