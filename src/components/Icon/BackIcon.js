import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { commonStyles } from '../../utils/commonStyles'
import VectorIcon from './VectorIcon'

export default function BackIcon({
    onBackPress=()=>{},
    color=Colors.primary
}){
    return  <TouchableOpacity 
    onPress={onBackPress}
    style={styles.container}>
        <VectorIcon
            family={'Feather'}
            name={'arrow-left'}
            color={color}
            size={20}
        />
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container:{
        height:52,
        width: 52,
        ...commonStyles.center
    },
})