import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '../utils/Colors'
import { commonStyles } from '../utils/commonStyles'
import Helper from '../utils/Helper'
import Button from './Button'


export default function ButtonSmall({
    onPress=()=>{},
    buttonTitle='',
    buttonTextStyle={},
    buttonStyle={},
}){
    return <Button 
        onPress={onPress}
        title={buttonTitle}
        textStyle={[styles.buttonText,buttonTextStyle]}
        style={[
            commonStyles.buttonCurved,
            styles.button,
            buttonStyle,
        ]}
/>
}
const styles = StyleSheet.create({
    buttonText:{
        color:Colors.primary,
        fontSize:Helper.getScreenWidth()*0.035,
    },
    button:{
        width:Helper.getScreenWidth()*0.24,
        height:Helper.getScreenWidth()*0.08,
        backgroundColor:'#E5F3FF',
        marginHorizontal:0,
    },
})