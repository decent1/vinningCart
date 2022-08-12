import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Helper from '../../utils/Helper'
import { commonStyles } from '../../utils/commonStyles'
export default function MyText({
    text,
    style,
    onPress,
    fontSize=Helper.getScreenWidth()*0.035
}) {
    return (
        <Text 
        onPress={onPress}
        style={[
            styles.text,
            style,
            {fontSize:fontSize}
        ]}>
            {text}
        </Text>
    )   
}

const styles = StyleSheet.create({
    text:{
        ...commonStyles.textStyle
    }
})