import React,{useState} from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Image
} from 'react-native'
import {commonStyles} from '../../utils/commonStyles'
import StatusBar from '../../components/StatusBar'
import { Colors } from '../../utils/Colors'
import TopBarBack from '../../components/TopBar/TopBarBack'
import Helper from '../../utils/Helper'
import { Fonts } from '../../utils/Fonts'
import RewardItem from '../../components/RewardItem/Rewards'
import { ImagePath } from '../../utils/ImagePath'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MyText from '../../components/Text/MyText';
import Button from '../../components/Button'

export default function Scan({
    navigation
}){
    const [selectedItem, setSelectedItem] = useState('1')
    const [transactions,setTransactions] = useState([
        {
            id:"1",
            type:'shopping',
            name:"Grocery",
            amount:150
        },
        {
            id:"2",
            type:'shopping',
            name:"Grocery",
            amount:150
        },
        {
            id:"3",
            type:'shopping',
            name:"Grocery",
            amount:150
        }
    ])
    return <View style={commonStyles.container}>
        <StatusBar 
            backgroundColor={Colors.statusBarBackgroundColor}
            barStyle={commonStyles.statusBarStyleDark}
        />
        <TopBarBack
            noShadow
            title={'Scan'}
        />
    
        <View style={{
            height:140,
            width:'90%',
            alignSelf:'center',
            marginTop:Helper.vertical(40),
            borderRadius:20,
            backgroundColor:'rgba(33, 112, 244, 0.4)',
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Text
                style={{
                    fontFamily:Fonts.medium,
                    fontSize:Helper.fontSize22,
                    color:'#2D2C2C',
                    alignSelf:'center',
                   
                }}
            >{'Scan QR Code'}</Text>
            <Text style={{
                fontFamily:Fonts.regular,
                color:'#8C8C8C',
                fontSize:Helper.fontSize16,
                textAlign:'center',
                marginHorizontal:50,
            }}>{'Lorem ipsum. lorem ipsum Lorem ipsum. lorem ipsum Lorem ipsum. lorem ipsum'}</Text>
            
        </View>

        <View style={{
            height:320,
            width:320,
            alignSelf:'center',
            marginTop:Helper.vertical(40),
        }}>
            <Image  
                style={{
                    height:'100%',
                    width:'100%'
                }}
                source={ImagePath.scanImage}
            />
        </View>

        <Button 
            onPress={() => {
                navigation.goBack()
            }}
            style={[commonStyles.buttonCurved,{
                marginTop:Helper.vertical(80)
            }]}
            title={'Scan Code'}
        />
        
    </View>

}

const styles = StyleSheet.create({
    yourB:{
        fontSize:Helper.fontSize22,
        alignSelf:'center',
        marginTop:Helper.vertical(28),
        color:'#2D2C2C',
        fontFamily:Fonts.regular
    },
    Balance:{
        fontSize:Helper.fontSize36,
        alignSelf:'center',
        fontFamily:Fonts.regular,
        color:'#2D2C2C',
        marginTop:Helper.vertical(12)
    },
    selectionContainer:{
        height:50,
        
        width:'90%',
        alignSelf:'center',
        marginTop:Helper.vertical(40),
        
        flexDirection:'row'
    },
    item:{
        flex:1,
        borderRadius:2,
        borderBottomWidth:4,
        alignItems:'center',
        justifyContent:'center',
        
    },
    itemText:{
        fontSize:Helper.fontSize18,
        color:'#2D2C2C'
    }
})