import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { commonStyles } from '../../utils/commonStyles'
import Helper from '../../utils/Helper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Fonts } from '../../utils/Fonts'
import { ImagePath } from '../../utils/ImagePath'

export default function RewardItem({
    navigation
}){
    return <View style={styles.container}>
        <View style={styles.topContainer}>
            <View style={{
                width:60,
                height:60,
            }}>
                <Image 
                    style={{
                        height:'100%',
                        width:'100%'
                    }}
                    source={ImagePath.gift}
                />

            </View>
            <Text style={{
                color:Colors.white,
                fontFamily:Fonts.bold
            }}>
                <Text style={{
                    fontSize:Helper.fontSize22
                }}>{'Get  '}</Text>
                <Text style={{
                    fontSize:Helper.fontSize36
                }}>{'Rs 25'}</Text>
            </Text>
        </View>
        <View style={styles.bottomContainer}>
            <View style={styles.iconContainer}>
                <AntDesign 
                    name={'lock'}
                    size={14}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.pointText}>{'2500 more points to go'}</Text>
                <View style={{
                    width:'60%',
                    height:3,
                    flexDirection:'row',
                    borderRadius:2,
                    marginTop:Helper.vertical(4) 
                }}>
                    <View style={{
                        flex:1,
                        backgroundColor:Colors.primary    
                    }}/>
                    <View style={{
                        flex:1,
                        backgroundColor:'rgba(140, 140, 140, 0.51)'    
                    }}/>
                </View>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        height:120,
        width:'95%',
        alignSelf:'center',
        marginTop:Helper.vertical(32),
        backgroundColor:'white',
        ...commonStyles.shadow,
    },
    topContainer:{
        flex:1,
        backgroundColor:Colors.primary,
        borderTopLeftRadius:4,
        borderTopRightRadius:4,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:5,
        justifyContent:'space-between',
        paddingRight:Helper.horizontal(32)
    },
    bottomContainer:{
        height:50,
        flexDirection:'row',
        alignItems:'center',
        padding:Helper.horizontal(16)
    },
    iconContainer:{
        height:28,
        width:28,
        borderRadius:14,
        backgroundColor:'rgba(196, 196, 196, 0.5)',
        alignItems:'center',
        justifyContent:'center'
    },
    textContainer:{
        marginLeft:Helper.horizontal(12),
        width:'100%'
    },
    pointText:{
        fontSize:Helper.fontSize16,
        color:'#464646',
        fontFamily:Fonts.regular
    }
})