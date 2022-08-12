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
import { ImagePath } from '../../utils/ImagePath'
import VectorIcon from '../Icon/VectorIcon'


export default function ListItemRewards({
    item={},
    onPress=()=>{}
}){
    return <TouchableOpacity style={styles.container}>
        <View style={styles.childContianer}>
           
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.rewardsIcon}
                    source={ImagePath.rewardsIcon}
                />
            </View>
            <View style={styles.poinstContianer}>
                <Image 
                    style={styles.pointsIcon}
                    source={ImagePath.pointsIcon}
                />
                <Text style={styles.pointsText}>
                    {`${item.points} pts`}
                </Text>
            </View>
        </View>
        <Image 
            style={styles.lockIcon}
            source={ImagePath.lockIcon}
        />
        <Text style={styles.bottomText}>{`Win upto Rs ${item.win_rupees}`}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container:{
        marginLeft:16
    },
    childContianer:{
        backgroundColor:Colors.gray,
        width:100,
        height:88,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        justifyContent:'space-between'
    },
    imageContainer:{
        height:60,
        width: 60,
        alignSelf:'center',
        marginTop:4
    },
    poinstContianer:{
        height:20,
        width: 64,
        alignSelf:'flex-end',
        borderBottomRightRadius:30,
        borderTopLeftRadius:12,
        backgroundColor:'rgba(255,255,255,0.5)',
        flexDirection:'row',
        alignItems:'center',
    },
    pointsIcon:{
        height:14,
        width: 14,
        marginLeft:4,
    },
    pointsText:{
        fontSize:10,
        fontFamily:Fonts.medium,
        color:'#464646',
        marginLeft:2
    },
    rewardsIcon:{
        height:'100%',
        width:'100%',
    },
    lockIcon:{
        height:16,
        width: 16,
        position: 'absolute',
        left:8,
        top:8,
    },
    bottomText:{
        fontSize:10,
        fontFamily:Fonts.regular,
        color:'#2D2C2C',
        margin:4,     
    }
})