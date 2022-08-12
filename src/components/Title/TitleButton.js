import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'
import Helper from '../../utils/Helper'
import Button from '../Button'
import { commonStyles } from '../../utils/commonStyles'
import ButtonSmall from '../ButtonSmall'

export default function TitleButton({
    title="",
    onPress=()=>{},
    style={},
    textStyle={},
    buttonStyle={},
    buttonTextStyle={},
    buttonTitle='',
    noButton
}){
    return <View style={[styles.container,{...style}]}>
        <Text style={[styles.text,textStyle]}>{title}</Text>
        {noButton ? null : <ButtonSmall 
            onPress={onPress}
            buttonTitle={buttonTitle}
            buttonTextStyle={buttonTextStyle}
            buttonStyle={buttonStyle}
        />}
    </View>
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:Helper.HorizontalValueSmall,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    text:{
        fontFamily:Fonts.medium,
        color:Colors.black,
        // fontSize:18
        fontSize: Helper.getScreenWidth()*0.045,
    }
})