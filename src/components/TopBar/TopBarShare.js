import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import { commonStyles } from '../../utils/commonStyles'
import BackIcon from '../Icon/BackIcon'
import HeartIcon from '../Icon/HeartIcon'
import ShareIcon from '../Icon/ShareIcon'

export default function TopBarShare({
    onBackPress=()=>{},
    onSharePress=()=>{},
    onHeartPress=()=>{},
}){
    const navigation = useNavigation()
    return <View style={commonStyles.topBatStyles}>
        <BackIcon 
            onBackPress={() => navigation.goBack()}
        />
        <View style={styles.rightContainer}>
            <HeartIcon
                onHeartPress={onHeartPress} 
            /> 
            <ShareIcon 
                onSharePress={onSharePress}
            /> 
        </View>
    </View>
}

const styles = StyleSheet.create({
    rightContainer:{
        flexDirection:'row',
        position:'absolute',
        right:0,
    }
})