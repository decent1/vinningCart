import { useNavigation } from '@react-navigation/native'
import React,{useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { commonStyles } from '../../utils/commonStyles'
import { Fonts } from '../../utils/Fonts'
import Helper from '../../utils/Helper'
import { ImagePath } from '../../utils/ImagePath'
import VectorIcon from '../Icon/VectorIcon'

export default function ListItemProduct({
    item,
    onPress,
    index=0
}){
    const navigation = useNavigation()
    const [qty, setQty] = useState(0)
    const [selectedVariation, setSelectedVariation] = useState(0)
    return <TouchableOpacity 
    onPress={() => navigation.navigate('ItemDetails')}
    style={[styles.container,{
        backgroundColor:index % 2 == 0 ? Colors.lightYellow : '#E5F3FF',
    }]}>
        <View style={styles.topContainer}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={ImagePath[item.image]}
                />
            </View>
            <View style={styles.counterContainer}>
                <TouchableOpacity 
                onPress={() => setQty(qty+1)}
                style={[styles.plusMinusContainer,{
                    borderTopRightRadius:12,
                }]}>
                    <Text style={styles.plusMinusText}>{'+'}</Text>
                </TouchableOpacity>
                <View style={styles.hr} />
                {
                    qty > 0 && <View>
                        <TouchableOpacity style={[styles.plusMinusContainer,{
                        borderBottomLeftRadius:0,
                    }]}>
                        <Text style={styles.plusMinusText}>{qty}</Text>
                    </TouchableOpacity>
                    <View style={styles.hr} />
                    </View>

                }
                <TouchableOpacity 
                    onPress={() => {
                        if(qty > 0){
                            setQty(qty-1)
                        }
                    }}
                style={[styles.plusMinusContainer,{
                    borderBottomLeftRadius:12
                }]}>
                    <Text style={[styles.plusMinusText,{color:Colors.black}]}>{'-'}</Text>
                </TouchableOpacity>
            </View>
        </View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{`Rs ${item.variation[selectedVariation].price}`}</Text>
        <View style={styles.bottomParentContainer}>
            <View style={styles.bottomContainer}>
                <View style={styles.variationContainer}>
                    <TouchableOpacity style={styles.variationChildContainer}>
                        <Text style={styles.variationName}>{item.variation[selectedVariation].name}</Text>
                        <VectorIcon 
                            name={'chevron-down'}
                            family={'Entypo'}
                            size={14}
                            color={Colors.primary}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.cartContainer}>
                    <VectorIcon 
                        name={'add-shopping-cart'}
                        family={'MaterialIcons'}
                        color={Colors.primary}
                    />
                </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container:{
        // height:200,
        width:124,
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        ...commonStyles.shadow,
        marginBottom:16,
        marginLeft:16
    },
    topContainer:{
        height:100,
        flexDirection:'row'
    },
    imageContainer:{
        flex:1,
        marginTop:8
    },
    plusMinusContainer:{
        height:22,
        width:24,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    plusMinusText:{
        fontFamily:Fonts.bold,
        color:Colors.primary,
    },
    hr:{
        width: 16,
        height:1,
        backgroundColor:'gray',
        alignSelf:'center'
    },
    image:{
        height:'100%',
        width:'100%',
    },
    name:{
        fontFamily:Fonts.regular,
        marginTop:12,
        marginLeft:8,
        color:Colors.black,
        fontSize:14,
    },
    price:{
        fontFamily:Fonts.bold,
        marginTop:4,
        marginLeft:8,
        color:Colors.black,
    },
    bottomContainer:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        alignSelf:'flex-end'
    },
    variationContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    cartContainer:{
        height:32,
        width: 32,
        backgroundColor:'white',
        borderTopLeftRadius:12,
        alignItems:'center',
        justifyContent:'center'
    },
    variationChildContainer:{
        width:72,
        height:20,
        borderWidth:1,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:0,
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
        borderColor:Colors.primary,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:4,
    },
    variationName:{
        fontFamily:Fonts.regular,
        fontSize:12,
        color:Colors.primary
    },
    bottomParentContainer:{
        flexDirection:'row', 
        flex:1,
    }
})