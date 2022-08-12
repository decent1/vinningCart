import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import { commonStyles } from '../../utils/commonStyles'
import StatusBar from '../../components/StatusBar'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'
import TopBarBack from '../../components/TopBar/TopBarBack'
import Helper from '../../utils/Helper'
import { ImagePath } from '../../utils/ImagePath'
import Button from '../../components/Button'
import Input from '../../components/Input'
import VectorIcon from '../../components/Icon/VectorIcon'

export default function TrackOrder({
    navigation
}){
    return <View style={commonStyles.container}>
    <StatusBar 
        backgroundColor={Colors.statusBarBackgroundColor}
        barStyle={commonStyles.statusBarStyleDark}
    />
    <TopBarBack 
        noShadow
        title='Confirm Delivery Location'
    />
    <View style={{
        height:'70%',
        width:'100%',
        
    }}>
        <Image 
            style={{
                height:'100%',
                width:'100%',
                borderTopRightRadius:30,
                borderTopLeftRadius:30
            }}
            source={ImagePath.mapImage}
        />
       <View style={{
           height:50,
           width:'100%',
           position:'absolute',
           borderTopRightRadius:20,
           borderTopLeftRadius:20,
           alignItems:'center',
           justifyContent:'center',
           backgroundColor:'rgba(0, 0, 0, 0.25)'
       }}>
           <Text
            style={{
                fontFamily:Fonts.bold,
                color:Colors.white,
                fontSize:Helper.fontSize20
            }}
           >{'Rider is on the move'}</Text>
       </View>
       <View style={{
           width:62,
           height:67,
           position:'absolute',
           top:Helper.vertical(240),
           right:0
       }}>
           <Image   
           style={{
               height:'100%',
               width:'100%',
           }}
            source={ImagePath.riderIcon}
            />
       </View>
        <View style={{
            height:100,
            width:'70%',
            alignSelf:'center',
            position:'absolute',
            top:Helper.vertical(120),
            alignItems:'center',
            justifyContent:'center'
        }}>
            <View style={{
                backgroundColor:'white',
                paddingVertical:8,
                paddingHorizontal:12
            }}>
                <Text style={{
                    fontFamily:Fonts.regular,
                    color:'#464646',
                    fontSize:Helper.fontSize12,
                }}>{'We will deliver you here'}</Text>
            </View>
            <VectorIcon 
                family='Entypo'
                name={'location-pin'}
                color={Colors.primary}
                size={32}
            />
        </View>

       <Text
        style={{
            marginTop:Helper.vertical(12),
            fontFamily:Fonts.regular,
            color:'#464646',
            fontSize:Helper.fontSize22,
            marginLeft:Helper.HorizontalValue
        }}
       >{'Order no: 12A384'}</Text>
       <Text style={{
           fontFamily:Fonts.regular,
           fontSize:Helper.fontSize16,
           color:'gray',
           marginLeft:Helper.HorizontalValue,
           marginTop:Helper.vertical(12)
       }}>{'Payment Method: COD'}</Text>
       <Text style={{
           fontFamily:Fonts.regular,
           fontSize:Helper.fontSize16,
           color:'gray',
           marginLeft:Helper.HorizontalValue
       }}>{'Delivery Address: Johar block 2'}</Text>
       <Text style={{
           fontFamily:Fonts.regular,
           fontSize:Helper.fontSize16,
           color:'gray',
           marginLeft:Helper.HorizontalValue
       }}>{'Estimated Delivery Time:'}</Text>

<View style={{
                  flexDirection:'row',
                  alignItems:'center',
                  justifyContent:'space-between',
                  marginHorizontal:Helper.HorizontalValue,
                  marginBottom:20,
                  marginTop:Helper.vertical(20),

              }}>
                <Text
                    style={{
                        fontFamily:Fonts.regular,
                        fontSize:Helper.fontSize12,
                        color:Colors.primary,
                    }}
                  >{'3:04 PM'}</Text>

                <Text
                    style={{
                        fontFamily:Fonts.regular,
                        fontSize:Helper.fontSize12,
                        color:Colors.black,
                    }}
                  >{'12 MAR 2022'}</Text>
              </View>
        </View>



    </View>
}