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

export default function Rewards({
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
            title={'Rewards'}
        />
        <Text style={styles.yourB}>{'Your Balance'}</Text>
        <Text style={styles.Balance}>
            <Text style={{
                fontFamily:Fonts.bold
            }}>{'120 '}</Text>
            <Text>{'points'}</Text>
        </Text>

        <View style={styles.selectionContainer}>
            <TouchableOpacity 
            onPress={() => setSelectedItem('1')}
            style={[styles.item,{
                borderColor:selectedItem == '1' ? '#2170F4' :  'rgba(140, 140, 140, 0.51)'
            }]}>    
                <Text style={[styles.itemText,{
                    fontFamily:selectedItem == '1' ? Fonts.bold :  Fonts.regular
                }]}>{'Reward Wallet'}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => setSelectedItem('2')}
            style={[styles.item,{
                borderColor:selectedItem == '2' ? '#2170F4' :  'rgba(140, 140, 140, 0.51)'
            }]}>    
                <Text style={[styles.itemText,{
                    fontFamily:selectedItem == '2' ? Fonts.bold :  Fonts.regular
                }]}>{'Transactions'}</Text>
            </TouchableOpacity>
        </View>
        <ScrollView>
            {
                selectedItem == '1'
                ?
                <View>
                    <RewardItem />
                    <RewardItem />
                </View>
                :
                <View>
                    {
                        transactions.map(item =>  <View
                        key={item.id}
                            style={{
                                width:'90%',
                                flexDirection:'row',
                                alignSelf:'center',
                                marginTop:Helper.vertical(28),
                                alignItems:'center',
                                paddingHorizontal:Helper.horizontal(16)
                            }}
                        >
                            <View style={{
                                height:36,
                                width:36,
                                borderRadius:16,
                                backgroundColor:'#F9E5E5',
                                alignItems:'center',
                                justifyContent:'center',
                            }}>
                                <Image 
                                    style={{
                                        width:(58/100)*24,
                                        height:(64/100)*24,
                                    }}
                                    source={ImagePath.transactionIcon}
                                />
                            </View>
                            <View style={{
                                marginLeft:Helper.horizontal(16)
                            }}>
                                <Text style={{
                                    fontSize:Helper.fontSize12,
                                    fontFamily:Fonts.regular,
                                    color:'#464646'
                                }}>{item.type}</Text>
                                <Text style={{
                                    fontSize:Helper.fontSize16,
                                    fontFamily:Fonts.regular,
                                    color:'#464646'
                                }}>{item.name}</Text>
                            </View>
                            <Text style={{
                                fontFamily:Fonts.regular,
                                color:'#464646',
                                position:'absolute',
                                right:0,
                            }}>
                                <Text style={{
                                    fontSize:Helper.fontSize12,
                                }}>{'-PKR '}</Text>
                                <Text
                                    style={{
                                        fontSize:Helper.fontSize16
                                    }}
                                >{item.amount}</Text>
                            </Text>
                        </View>)
                    }
                </View>
            }
        </ScrollView>
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