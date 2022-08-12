import React,{useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { commonStyles } from '../../utils/commonStyles'
import { Fonts } from '../../utils/Fonts'
import Helper from '../../utils/Helper'
import VectorIcon from '../Icon/VectorIcon'
import address from '../../data/address.json'
import { useNavigation } from '@react-navigation/native'

export default function AddressModal({
    modalVisible,
    selectedAddress,
    setSelectedAddress
}){
    const navigation = useNavigation()
    return <View style={styles.container}>
        <View style={styles.modalView}>
            <View style={styles.topContainer}>
                <Text style={styles.titleText}>
                    {'Deliver to'}
                </Text>
                <VectorIcon 
                    onPress={modalVisible}
                    family={'AntDesign'}
                    name={'close'}
                    size={20}
                />
            </View>
            {
                address.map(item => <TouchableOpacity 
                onPress={() => {
                    setSelectedAddress(item.id)
                    modalVisible(false)
                }}
                style={styles.addressContainer}>
                    <View style={[styles.radio,{
                        borderColor:item.id === selectedAddress ? Colors.primary : '#8C8C8C'
                    }]}>
                        {
                            item.id === selectedAddress && <View
                                style={styles.radioChild}
                            />
                        }
                    </View>
                    <View style={styles.contentContianer}>
                        <Text style={[styles.contentText,{
                            color:item.id === selectedAddress ? Colors.black : '#8C8C8C'
                        }]}>{item.type}</Text>
                        <Text style={styles.contentText}>{item.address}</Text>
                    </View>
                </TouchableOpacity>)
            }
             <TouchableOpacity 
             onPress={() => navigation.navigate('Myaddress')}
             style={styles.addAddressButton}>
                <VectorIcon 
                    family={'MaterialIcons'}
                    name={'add-circle-outline'}
                    size={20}  
                    color={Colors.primary}
                />
                <Text style={styles.addLocation}>{'Add Location'}</Text>
            </TouchableOpacity>
        </View>
       
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
    },
    modalView:{
        width: '100%',
        // height:200,
        backgroundColor:'white',
        alignSelf:'flex-end',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        ...commonStyles.shadow
    },
    topContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    titleText:{
        fontFamily:Fonts.regular,
        // fontSize:18
        fontSize: Helper.getScreenWidth()*0.045,
        color:Colors.black,
        marginLeft:Helper.HorizontalValueSmall,
        marginTop:Helper.vertical(24)
    },
    addressContainer:{
        height:48,
        borderBottomWidth:1,
        borderColor:'#8C8C8C',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:Helper.HorizontalValueSmall,
    },
    radio:{
        height:20,
        width: 20,
        borderWidth:1,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    radioChild:{
        height:10,
        width: 10,
        borderRadius:5,
        backgroundColor:Colors.primary   
    },
    contentContianer:{
        flex:1,
        marginLeft:16
    },
    contentText:{
        fontFamily:Fonts.regular,
        color:'#8C8C8C',
    },
    addAddressButton:{
        height:48,
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginBottom:Helper.vertical(32)
    },
    addLocation:{
        fontFamily:Fonts.regular,
        color:Colors.primary,
    }
})