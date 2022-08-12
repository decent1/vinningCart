import React from 'react'
import {
    View,
    Image,
    StyleSheet,
} from 'react-native'
import Helper from '../../utils/Helper'
import { ImagePath } from '../../utils/ImagePath'

export default function BannerImage({
    image
}){
    return <View style={styles.container}>
        <Image 
            source={ImagePath[image]}
            style={styles.image}
        />
    </View>
}

const styles = StyleSheet.create({
    container:{
        height:120,
        marginHorizontal:Helper.HorizontalValueSmall,
        marginTop:Helper.vertical(20),
        borderRadius:8,
    },
    image:{
        height:'100%',
        width:'100%',
        borderRadius:8,
    }
})