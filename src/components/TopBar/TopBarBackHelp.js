import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { commonStyles } from '../../utils/commonStyles'
import { Fonts } from '../../utils/Fonts'
import Helper from '../../utils/Helper'
import BackIcon from '../Icon/BackIcon'


export default function TopBarBackHelp({
    onBackPress=()=>{},
    title="",
    noShadow=false
}){
    const navigation = useNavigation()
    return <View style={[noShadow ? commonStyles.topBatStylesNoShadow : commonStyles.topBatStyles,{
        backgroundColor:Colors.primary
    }]}>
        <BackIcon 
            color={Colors.black}
            onBackPress={() => navigation.goBack()}
        />
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
                {'How it works ?'}
            </Text>
        </View>
    </View>
}
const styles = StyleSheet.create({
    titleContainer:{
        flex:1,
        justifyContent:'center',
    },
    titleText:{
        // fontSize:20
        fontSize:Helper.fontSize16,
        fontFamily:Fonts.regular,
        color:Colors.white,
        alignSelf:'flex-end',
        marginRight:Helper.horizontal(20)
    },
})