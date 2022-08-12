import React from 'react'
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native'
import {Fonts} from '../utils/Fonts'
import {Colors} from '../utils/Colors'
import Helper from '../utils/Helper'
export default function Input({
    placeholder = '',
    value = '',
    onChangeText = () => {},
    keyboardType = 'default',
    secureTextEntry = false,
    leftComponent = null,
    rightComponent = null,
    style = {},
    inputStyle={},
}) {
    return (
        <View style={[styles.container, style]}>
            {leftComponent}
            <TextInput 
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                style={[styles.input,inputStyle]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />
            {rightComponent}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal:Helper.HorizontalValue,
        height:44,
        backgroundColor:Colors.white
    },
    input: {
        flex:1,
        // paddingHorizontal:8,
        paddingHorizontal:Helper.horizontal(8),
        // fontSize:16,
        fontSize: Helper.getScreenWidth()*0.04,
        fontFamily:Fonts.regular,
        color:Colors.black
    }
})