import React,{useEffect} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native'
import {Colors} from '../utils/Colors'
import {commonStyles} from '../utils/commonStyles'
import StatusBar from '../components/StatusBar'
import Helper from '../utils/Helper'
import { ImagePath } from '../utils/ImagePath'


export default function Splash({
    navigation
}){
    useEffect(() => {
        setTimeout(()=> {
            navigation.replace('AppStack')
        },2000)
    },[])
    return <View style={styles.container}>
        <StatusBar 
            backgroundColor={Colors.primary}
            barStyle={commonStyles.statusBarStyleLight}
        />
        <View style={styles.imageContainer}>
        <Image 
            style={styles.logo}
            source={ImagePath.logo}
        />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.primary,
        ...commonStyles.center,
    },
    imageContainer:{
        height:Helper.getScreenHeight()*0.4,
        width:Helper.getScreenWidth()*0.8,
    },
    logo:{
        width:'100%',
        height:'100%',
    }
})