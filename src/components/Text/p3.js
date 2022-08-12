import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Helper from '../../utils/Helper'
import { commonStyles } from '../../utils/commonStyles'

export default function P3({
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
        // fontSize:20
        fontSize:Helper.getScreenWidth()*0.052,
        ...commonStyles.textStyle
    }
})