import { Colors } from "./Colors";
import { Fonts } from "./Fonts";
import Helper from "./Helper";

let shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  elevation: 3,
}

let shadowBottom = {
  shadowColor: '#000',
  shadowOffset: {width: 1, height: 3},
  shadowOpacity: 0.2,
  elevation: 4,
}

let center = {
  alignItems:'center',
  justifyContent:'center'
}

let topBatStyles = {
  height:52,
  width:'100%',
  flexDirection:'row',
  backgroundColor:Colors.white
}

export const commonStyles = {
  //statusbar
  statusBarStyleDark: 'dark-content',
  statusBarStyleLight: 'light-content',

  //shadow
  shadow: shadow,
  shadowBottom: shadowBottom,

  //center
  center:center,

  //container
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },

  //input
  inputSimple:{
    borderBottomWidth:1,
    borderBottomColor:'#464646',
  },
  inputRound:{
    borderRadius:30,
    ...shadow,
  },
  inputCurved:{
    borderRadius:8,
    ...shadow,
  },

  //input
  buttonCurved:{
    borderRadius:8,
  },
  buttonRound:{
    borderRadius:30,
  },

  topBatStyles:{
    ...topBatStyles,
    ...shadowBottom
  },
  topBatStylesNoShadow:topBatStyles,
  textStyle:{
    fontFamily:Fonts.regular,
    color:Colors.black,
    marginHorizontal:Helper.HorizontalValue,
  },
  // // fontSize:10,
  // fontSize: Helper.getScreenWidth()*0.027,
  // // fontSize:12,
  // fontSize: Helper.getScreenWidth()*0.03,
  // // fontSize:14,
  //     fontSize:Helper.getScreenWidth()*0.035,
  // // fontSize: 16,
  // fontSize: Helper.getScreenWidth()*0.04,
  // // fontSize:18
  //   fontSize: Helper.getScreenWidth()*0.045,
  // // fontSize:20
  //     fontSize:Helper.getScreenWidth()*0.052,
  // // fontSize:22,
  // fontSize:Helper.getScreenWidth()*0.060,
  // //fontSize:28
  // fontSize: Helper.getScreenWidth()*0.07,
  // // fontSize:32,
  //   fontSize:Helper.getScreenWidth()*0.082,

};
