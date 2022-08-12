import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator
} from 'react-native'
import { Colors } from '../utils/Colors'
import { commonStyles } from '../utils/commonStyles'
import { Fonts } from '../utils/Fonts'
import Helper from '../utils/Helper'

export default function Button({
    title='ok',
    onPress=()=>{},
    style,
    textStyle,
    leftComponent=null,
    rightComponent=null,
    isLoading=false,
    indicatorColor=Colors.white,
    indicatorSize='small',
}){
    return <TouchableOpacity
        disabled={isLoading}
        onPress={onPress}
        style={[styles.container, style]}
    >
        {leftComponent}
        {
            isLoading?
            <ActivityIndicator 
                size={indicatorSize}
                color={indicatorColor}
            />
            :
            <Text style={[styles.text,textStyle]}>{title}</Text>
        }
        {rightComponent}
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:Helper.horizontal(58),
        height:44,
        backgroundColor:Colors.primary,
        ...commonStyles.center
    },
    text:{
        fontFamily:Fonts.medium,
        color:Colors.white,
        // fontSize:18
        fontSize: Helper.getScreenWidth()*0.045,
    }
})