import React,{useState} from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import {commonStyles} from '../../utils/commonStyles'
import StatusBar from '../../components/StatusBar'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'
import Helper from '../../utils/Helper'
import { ImagePath } from '../../utils/ImagePath'
import ListItemProfileOptions from '../../components/ListItem/ListItemProfileOptions'
import categories from '../../data/profileOptions.json'
import VectorIcon from '../../components/Icon/VectorIcon'

export default function Profile({
    navigation
}){
    const [buttons, setButton] = useState([
        {
          id:1,
          name:'Notifications',
          family:'Fontisto',
          iconName:'bell',
      nav:'Notification',

        },
        {
          id:2,
          name:'Suggest New Product',
          family:'AntDesign',
          iconName:'questioncircleo',
      nav:'SuggestNewProduct',
      

        },
        {
          id:3,
          name:'Help & Support',
          family:'Feather',
          iconName:'box',
      nav:'HelpSupport',

        },
        {
            id:4,
            name:'Sign out',
            family:'Feather',
            iconName:'box',
            nav:'AuthStack',
        }
      ])
    return <View style={commonStyles.container}>
        <StatusBar 
            barStyle={commonStyles.statusBarStyleLight}
            backgroundColor={Colors.primary}
        />
        <View style={{
            backgroundColor:Colors.primary,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            paddingHorizontal:Helper.horizontal(24),
            paddingTop:Helper.vertical(40),
            paddingBottom:Helper.vertical(80),
        }}>
            <View>
                <Text style={{
                    fontFamily:Fonts.medium,
                    color:Colors.white,
                    fontSize:Helper.fontSize22
                }}>{'Hello'}</Text>
                <Text style={{
                    fontFamily:Fonts.medium,
                    color:Colors.white,
                    fontSize:Helper.fontSize22
                }}>{'Javed Shuja'}</Text>
            </View>
            <View style={{
                height:28,
                width:28,
                backgroundColor:Colors.white,
                borderRadius:4,
                alignItems:'center',
                justifyContent:'center',
                borderBottomLeftRadius:0,
            }}>
                <Image 
                    style={{
                        height:16,
                        width:16,
                        tintColor:Colors.primary
                    }}
                    source={ImagePath.phoneIcon}
                />
            </View>
            
        </View>
        <View style={{
                height:80,
                borderRadius:20,
                backgroundColor:Colors.white,
                ...commonStyles.shadow,
                marginTop:-16,
                flexDirection:'row',
                
            }}>
                <View style={{
                    flex:1, 
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <View style={{
                        height:60,
                        width:60,
                    }}>
                        <Image 
                            style={{
                                height:'100%',
                                width:'100%'
                            }}
                            source={ImagePath.gift}
                        />
                    </View>
                    <View>
                        <Text style={{
                            fontSize:Helper.fontSize18,
                            color:Colors.black,
                            fontFamily:Fonts.medium
                        }}>{'Rewards'}</Text>
                       <View style={{
                           flexDirection:'row'
                       }}>
                       <View style={{
                            height:12,
                            width:12
                        }}>
                            <Image 
                                style={{
                                    height:'100%',
                                    width:'100%'
                                }}
                                source={ImagePath.pointsIcon}
                            />
                        </View>
                        <Text style={{
                            fontSize:Helper.fontSize12,
                            color:'#464646',
                            fontFamily:Fonts.regular,
                            marginLeft:4
                        }}>{'250 pts'}</Text>
                       </View>
                    </View>
                </View>
                <View style={{
                    flex:1, 
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <View style={{
                        height:60,
                        width:60,
                    }}>
                        <Image 
                            style={{
                                height:'100%',
                                width:'100%'
                            }}
                            source={ImagePath.refferalIcon2}
                        />
                    </View>
                    <View>
                        <Text style={{
                            fontSize:Helper.fontSize18,
                            color:Colors.black,
                            fontFamily:Fonts.medium
                        }}>{'Refferal'}</Text>
                       <View style={{
                           flexDirection:'row'
                       }}>
                       <View style={{
                            height:12,
                            width:12
                        }}>
                            <Image 
                                style={{
                                    height:'100%',
                                    width:'100%'
                                }}
                                source={ImagePath.pointsIcon}
                            />
                        </View>
                        <Text style={{
                            fontSize:Helper.fontSize12,
                            color:'#464646',
                            fontFamily:Fonts.regular,
                            marginLeft:4
                        }}>{'250 pts'}</Text>
                       </View>
                    </View>
                </View>
                
          
            </View>
            <ScrollView>
                <View style={{
                    flexDirection:'row',
                    flexWrap:'wrap',
                    backgroundColor:Colors.white,
                    ...commonStyles.shadow,
                    paddingBottom:Helper.vertical(20),
                    borderRadius:20,
                    marginTop:Helper.vertical(40)
                }}>
                    {
                        categories.map(item => <ListItemProfileOptions 
                            item={item}
                        />)
                    }
                </View>
              <View style={{
                  backgroundColor:Colors.white,
                  ...commonStyles.shadow,
                  margin:16,
                  padding:12,
                  borderRadius:20

              }}>
              {
          buttons.map((value,index)=>{
            return (
              <TouchableOpacity 
              onPress={() => navigation.navigate(value.nav)}
              key={index} style={{
                borderRadius:5,
                height:57,
                backgroundColor:Colors.appBackgroundColor,
                ...commonStyles.shadow,
                marginTop: Helper.vertical(27),
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center'
              }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <VectorIcon
                    family={value.family}
                    name={value.iconName}
                    color={Colors.gray}
                  />
                  <Text style={{
                       // fontSize:18
                        fontSize: Helper.getScreenWidth()*0.045,
                        color:'#464646',
                        textAlign:'center',
                        fontFamily:Fonts.regular
                  }}>{value.name}</Text>
                </View>

                <VectorIcon
                  family="MaterialIcons"
                  name="keyboard-arrow-right"
                  color={Colors.gray}
                />
              </TouchableOpacity>
            );
          })
        }
              </View>

              <View style={{
                  flexDirection:'row',
                  alignItems:'center',
                  justifyContent:'space-between',
                  marginHorizontal:Helper.horizontal(20),
                  marginBottom:20,
                  marginTop:Helper.vertical(20),

              }}>
                <Text
                    style={{
                        fontFamily:Fonts.regular,
                        fontSize:Helper.fontSize12,
                        color:Colors.primary,
                    }}
                  >{'Read Terms & Conditions'}</Text>

                <Text
                    style={{
                        fontFamily:Fonts.regular,
                        fontSize:Helper.fontSize12,
                        color:Colors.black,
                    }}
                  >{'App version 7.7.3'}</Text>
              </View>
            </ScrollView>


    </View>
}