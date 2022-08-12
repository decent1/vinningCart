import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'
import Helper from '../../utils/Helper'
import { ImagePath } from '../../utils/ImagePath'


export default function BannerSimple({}){
    return <View style={styles.container}>
        <View style={styles.imageContanier}>
            <Image 
                style={styles.laptop}
                source={ImagePath.laptop}
                resizeMode={'contain'}
            />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.text}>{'50% DISCOUNT'}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        height:120,
        marginHorizontal:Helper.HorizontalValueSmall,
        marginTop:Helper.vertical(20),
        borderRadius:8,

        backgroundColor:Colors.primary,
        paddingHorizontal:Helper.horizontal(32),
        paddingVertical:Helper.vertical(40),
        flexDirection:'row'
    },
    imageContanier:{
        flex:1,
    },
    laptop:{
        width:'100%',
        height:'100%',
    },
    textContainer:{
        flex:2,
        paddingLeft:Helper.horizontal(16),
    },
    text:{
        fontSize:Helper.getScreenWidth()*0.070,
        color:Colors.white,
        fontFamily:Fonts.medium
    }
})