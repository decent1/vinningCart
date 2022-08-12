import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { commonStyles } from '../../utils/commonStyles'
import Helper from '../../utils/Helper'
import VectorIcon from '../Icon/VectorIcon'
import address from '../../data/address.json'

export default function TopBarAddress({
    onPress,
    selectedAddress
}){
    return <TouchableOpacity 
        onPress={onPress}
    style={commonStyles.topBatStyles}>
        <View style={styles.iconContainer}>
            <VectorIcon
                family={'Feather'}
                name={'map-pin'}
                color={Colors.primary}
                size={20}
            />
        </View>
        <View style={styles.addressContainer}>
            <Text style={styles.addressText}>
                {'Deliver to:'}
            </Text>
            <Text style={[styles.addressText,{
                color:Colors.primary,
            }]}>{
                address.find(x => x.id === selectedAddress).address
            }</Text>
        </View>
        <View style={styles.iconContainer}>
            <VectorIcon
                family={'Entypo'}
                name={'chevron-down'}
                size={20}
            />
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    iconContainer:{
        height:52,
        width: 52,
        ...commonStyles.center
    },
    addressContainer:{
        flex:1,
        justifyContent:'center',
    },
    addressText:{
        // fontSize:12,
        fontSize: Helper.getScreenWidth()*0.03,
    }
})