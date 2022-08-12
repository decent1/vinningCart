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

export default function OrderHistory({
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
            title={'My Orders'}
        />
    

        <View style={styles.selectionContainer}>
            <TouchableOpacity 
            onPress={() => setSelectedItem('1')}
            style={[styles.item,{
                borderColor:selectedItem == '1' ? '#2170F4' :  'rgba(140, 140, 140, 0.51)'
            }]}>    
                <Text style={[styles.itemText,{
                    fontFamily:selectedItem == '1' ? Fonts.bold :  Fonts.regular
                }]}>{'Ongoing'}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => setSelectedItem('2')}
            style={[styles.item,{
                borderColor:selectedItem == '2' ? '#2170F4' :  'rgba(140, 140, 140, 0.51)'
            }]}>    
                <Text style={[styles.itemText,{
                    fontFamily:selectedItem == '2' ? Fonts.bold :  Fonts.regular
                }]}>{'History'}</Text>
            </TouchableOpacity>
        </View>
        <ScrollView>
            {
                selectedItem == '1'
                ?
                <View>
                     <TouchableOpacity 
                     onPress={() => navigation.navigate('OrderStatus')}
                     style={{
                         flexDirection: 'row',
                         marginTop: Helper.vertical(20),
                         padding: 3,
                         margin:12,
                         ...commonStyles.shadow,
                         backgroundColor:'white',
                         padding:12
                     }}>
            <View style={{
                width: Helper.getScreenWidth() * 0.17,
                height: Helper.getScreenHeight() * 0.13,
                backgroundColor: '#E5F3FF',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
                ...commonStyles.shadow,
            }}>
              <Image
                source={ImagePath.cookingoil}
                style={{
                    width: Helper.getScreenWidth() * 0.08,
                    height: Helper.getScreenHeight() * 0.11,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                    marginTop: Helper.vertical(20),
                }}
              />
            </View>
            <View style={{
                flex: 1,
                marginLeft: Helper.horizontal(6),
                justifyContent: 'space-between',
            }}>
              <View>
                <Text style={{
                    fontSize: Helper.getScreenWidth() * 0.035,
                    fontFamily: Fonts.regular,
                    color: Colors.black,
                }}>Slice Mango</Text>
                <Text style={{
                    // fontSize:12,
                    fontSize: Helper.getScreenWidth() * 0.03,
                    fontFamily: Fonts.regular,
                    color: Colors.gray,
                    marginTop: Helper.vertical(5),
                }}>Tetrapack 1L</Text>
              </View>
              <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
              }}>
                <Text style={{
                    fontFamily: Fonts.medium,
                    fontSize: Helper.fontSize18,
                    color: Colors.primary,
                    marginTop: Helper.vertical(5),                 
                }}>Rs 115</Text>
                <TouchableOpacity style={{
                     flexDirection: 'row',
                     height: 25,
                     width: 160,
                     justifyContent:'center',
                     backgroundColor: Colors.primary,
                     borderRadius: 4,
                     alignItems: 'center',
                     justifyContent: 'space-between',
                    //  paddingHorizontal: 4,
                }}>
                  {/* <AntDesign color={'white'} size={16} name={'shoppingcart'} /> */}
                  <MyText
                    fontSize={Helper.fontSize12}
                    text={'Select items to reorder'}
                    style={{color: 'white'}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => navigation.navigate('OrderStatus')}
          style={{
                         flexDirection: 'row',
                         marginTop: Helper.vertical(20),
                         padding: 3,
                         margin:12,
                         ...commonStyles.shadow,
                         backgroundColor:'white',
                         padding:12
                     }}>
            <View style={{
                width: Helper.getScreenWidth() * 0.17,
                height: Helper.getScreenHeight() * 0.13,
                backgroundColor: '#E5F3FF',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
                ...commonStyles.shadow,
            }}>
              <Image
                source={ImagePath.cookingoil}
                style={{
                    width: Helper.getScreenWidth() * 0.08,
                    height: Helper.getScreenHeight() * 0.11,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                    marginTop: Helper.vertical(20),
                }}
              />
            </View>
            <View style={{
                flex: 1,
                marginLeft: Helper.horizontal(6),
                justifyContent: 'space-between',
            }}>
              <View>
                <Text style={{
                    fontSize: Helper.getScreenWidth() * 0.035,
                    fontFamily: Fonts.regular,
                    color: Colors.black,
                }}>Slice Mango</Text>
                <Text style={{
                    // fontSize:12,
                    fontSize: Helper.getScreenWidth() * 0.03,
                    fontFamily: Fonts.regular,
                    color: Colors.gray,
                    marginTop: Helper.vertical(5),
                }}>Tetrapack 1L</Text>
              </View>
              <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
              }}>
                <Text style={{
                    fontFamily: Fonts.medium,
                    fontSize: Helper.fontSize18,
                    color: Colors.primary,
                    marginTop: Helper.vertical(5),                 
                }}>Rs 115</Text>
                <TouchableOpacity style={{
                     flexDirection: 'row',
                     height: 25,
                     width: 160,
                     justifyContent:'center',
                     backgroundColor: Colors.primary,
                     borderRadius: 4,
                     alignItems: 'center',
                     justifyContent: 'space-between',
                    //  paddingHorizontal: 4,
                }}>
                  {/* <AntDesign color={'white'} size={16} name={'shoppingcart'} /> */}
                  <MyText
                    fontSize={Helper.fontSize12}
                    text={'Select items to reorder'}
                    style={{color: 'white'}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
                </View>
                :
                <View>
                    <View style={{
                         flexDirection: 'row',
                         marginTop: Helper.vertical(20),
                         padding: 3,
                         margin:12,
                         ...commonStyles.shadow,
                         backgroundColor:'white',
                         padding:12
                     }}>
            <View style={{
                width: Helper.getScreenWidth() * 0.17,
                height: Helper.getScreenHeight() * 0.13,
                backgroundColor: '#E5F3FF',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
                ...commonStyles.shadow,
            }}>
              <Image
                source={ImagePath.cookingoil}
                style={{
                    width: Helper.getScreenWidth() * 0.08,
                    height: Helper.getScreenHeight() * 0.11,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                    marginTop: Helper.vertical(20),
                }}
              />
            </View>
            <View style={{
                flex: 1,
                marginLeft: Helper.horizontal(6),
                justifyContent: 'space-between',
            }}>
              <View>
                <Text style={{
                    fontSize: Helper.getScreenWidth() * 0.035,
                    fontFamily: Fonts.regular,
                    color: Colors.black,
                }}>Slice Mango</Text>
                <Text style={{
                    // fontSize:12,
                    fontSize: Helper.getScreenWidth() * 0.03,
                    fontFamily: Fonts.regular,
                    color: Colors.gray,
                    marginTop: Helper.vertical(5),
                }}>Tetrapack 1L</Text>
              </View>
              <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
              }}>
                <Text style={{
                    fontFamily: Fonts.medium,
                    fontSize: Helper.fontSize18,
                    color: Colors.primary,
                    marginTop: Helper.vertical(5),                 
                }}>Rs 115</Text>
                <TouchableOpacity style={{
                     flexDirection: 'row',
                     height: 25,
                     width: 80,
                     justifyContent:'center',
                     backgroundColor: Colors.primary,
                     borderRadius: 4,
                     alignItems: 'center',
                     justifyContent: 'space-between',
                    //  paddingHorizontal: 4,
                }}>
                  {/* <AntDesign color={'white'} size={16} name={'shoppingcart'} /> */}
                  <MyText
                    fontSize={Helper.fontSize12}
                    text={'Received'}
                    style={{color: 'white'}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{
                         flexDirection: 'row',
                         marginTop: Helper.vertical(20),
                         padding: 3,
                         margin:12,
                         ...commonStyles.shadow,
                         backgroundColor:'white',
                         padding:12
                     }}>
            <View style={{
                width: Helper.getScreenWidth() * 0.17,
                height: Helper.getScreenHeight() * 0.13,
                backgroundColor: '#E5F3FF',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
                ...commonStyles.shadow,
            }}>
              <Image
                source={ImagePath.cookingoil}
                style={{
                    width: Helper.getScreenWidth() * 0.08,
                    height: Helper.getScreenHeight() * 0.11,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                    marginTop: Helper.vertical(20),
                }}
              />
            </View>
            <View style={{
                flex: 1,
                marginLeft: Helper.horizontal(6),
                justifyContent: 'space-between',
            }}>
              <View>
                <Text style={{
                    fontSize: Helper.getScreenWidth() * 0.035,
                    fontFamily: Fonts.regular,
                    color: Colors.black,
                }}>Slice Mango</Text>
                <Text style={{
                    // fontSize:12,
                    fontSize: Helper.getScreenWidth() * 0.03,
                    fontFamily: Fonts.regular,
                    color: Colors.gray,
                    marginTop: Helper.vertical(5),
                }}>Tetrapack 1L</Text>
              </View>
              <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
              }}>
                <Text style={{
                    fontFamily: Fonts.medium,
                    fontSize: Helper.fontSize18,
                    color: Colors.primary,
                    marginTop: Helper.vertical(5),                 
                }}>Rs 115</Text>
                <TouchableOpacity style={{
                     flexDirection: 'row',
                     height: 25,
                     width: 80,
                     justifyContent:'center',
                     backgroundColor: Colors.primary,
                     borderRadius: 4,
                     alignItems: 'center',
                     justifyContent: 'space-between',
                    //  paddingHorizontal: 4,
                }}>
                  {/* <AntDesign color={'white'} size={16} name={'shoppingcart'} /> */}
                  <MyText
                    fontSize={Helper.fontSize12}
                    text={'Recieved'}
                    style={{color: 'white'}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
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