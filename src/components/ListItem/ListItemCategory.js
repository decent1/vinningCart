import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'
import Helper from '../../utils/Helper'
import { ImagePath } from '../../utils/ImagePath'

export default function ListItemCategory({
    item={},
}){
    const navigation = useNavigation()
    return <TouchableOpacity
        onPress={() => {
            navigation.navigate('CategoryItems',{
                title:item.name
            })
        }}
    >
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={ImagePath[item.image]}
                />
            </View>
        </View>
        <View style={styles.nameContainer}>
            <Text style={styles.name}>
                {item.name}
            </Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container:{
        width:Helper.getScreenWidth()/4,
        height:Helper.getScreenWidth()/4,
        alignItems:'center',
        justifyContent:'center',
        // borderWidth:1,
    },
    imageContainer:{
        height:'60%',
        width:'60%',
        borderRadius:2000,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#E5F3FF'
    },
    image:{
        height:'48%',
        width: '48%',
    },
    name:{
        fontFamily:Fonts.regular,
        fontSize: Helper.getScreenWidth()*0.03,
        alignSelf:'center',
        color:Colors.black
    },
    nameContainer:{
        // marginTop:-10,
        width:Helper.getScreenWidth()/4
    }
})