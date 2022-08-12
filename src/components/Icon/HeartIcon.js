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

export default function HeartIcon({
    onHeartPress=()=>{},
}){
    return  <TouchableOpacity 
    onPress={onHeartPress}
    style={styles.container}>
        <VectorIcon
            family={'AntDesign'}
            name={'hearto'}
            color={Colors.primary}
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