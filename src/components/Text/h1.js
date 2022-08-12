import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import {Fonts} from '../../utils/Fonts'
import {Colors} from '../../utils/Colors'
import Helper from '../../utils/Helper'

export default function H1({
    text,
    style,
    onPress
}) {
    return (
        <Text 
        onPress={onPress}
        style={[styles.text,style]}>
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: Helper.getScreenWidth()*0.07,
        fontFamily:Fonts.medium,
        color:Colors.primary,
        marginHorizontal:Helper.HorizontalValue
    }
})