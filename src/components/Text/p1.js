import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Helper from '../../utils/Helper'
import { commonStyles } from '../../utils/commonStyles'

export default function P1({
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
        // fontSize: 16,
        fontSize: Helper.getScreenWidth()*0.04,
        ...commonStyles.textStyle
    }
})