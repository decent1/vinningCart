import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import {commonStyles} from '../../utils/commonStyles'
import StatusBar from '../../components/StatusBar'
import { Colors } from '../../utils/Colors'
import TopBarBackHelp from '../../components/TopBar/TopBarBackHelp'
import Helper from '../../utils/Helper'
import { Fonts } from '../../utils/Fonts'
import RewardItem from '../../components/RewardItem/Rewards'
import { ImagePath } from '../../utils/ImagePath'
import Button from '../../components/Button'

export default function RefferalProgram({
    navigation
}){
    return <View style={[commonStyles.container,{
        backgroundColor:Colors.primary
    }]}>
    <StatusBar 
        backgroundColor={Colors.primary}
        barStyle={commonStyles.statusBarStyleLight}
    />
    {/* <TopBarBackHelp 
        noShadow
    /> */}

    <Text 
    onPress={() => {
        navigation.navigate('RefferalProgramDetails')
    }}
    style={{
        alignSelf:'flex-end',
        color:'white',
        fontFamily:Fonts.regular,
        fontSize:Helper.fontSize16,
        margin:12
    }}>
        {'How it works ?'}
    </Text>
    <View style={{
        flex:1,
    }}>
        <Text style={{
            fontSize:Helper.fontSize22,
            color:Colors.white,
            alignSelf:'center',
            marginTop:16
        }}>{'Refferal Program'}</Text>
        <View style={{
            width:169,
            height:141,
            alignSelf:'center'
        }}>
            <Image 
                style={{
                    height:'100%',
                    width:'100%'
                }}
                source={ImagePath.refferalIcon}
            />
        </View>
       <View style={{
           backgroundColor:Colors.white,
           width:'70%',
           height:60,
           alignItems:'center',
           justifyContent:'center',
           borderRadius:20,
           borderBottomLeftRadius:0,
           alignSelf:'center',
           marginTop:Helper.vertical(12)
       }}>
           <Text
            style={{
                fontFamily:Fonts.medium,
                color:Colors.primary,
                fontSize:Helper.fontSize22
            }}
           >{'ABXVHNIKFKHD'}</Text>
       </View>
       <Text style={{
           fontSize:Helper.fontSize16,
           color:Colors.white,
           alignSelf:'center',
           fontFamily:Fonts.regular,
           marginTop:Helper.vertical(12)
       }}>{'Complete milestone to unlock'}</Text>

    </View>
    <View style={{
        flex:1,
        backgroundColor:Colors.white,
        borderTopRightRadius:20,
        borderTopLeftRadius:20
    }}>
        <Text
            style={{
                fontSize:Helper.fontSize20,
                color:'#2D2C2C',
                fontFamily:Fonts.regular,
                alignSelf:'center',
                marginTop:Helper.vertical(56)
            }}
        >{'Unlock your referrals'}</Text>
        <Text style={{
            fontSize:Helper.fontSize16,
            color:'#464646',
            fontFamily:Fonts.regular,
            marginHorizontal:Helper.horizontal(40),
            textAlign:'center',
            marginTop:Helper.vertical(16)
        }}>{'You need to place an order to unlock refferal program'}</Text>

        <Button 
            onPress={() => {
                navigation.navigate('Dashboard')
            }}
            style={[commonStyles.buttonCurved,{
                marginTop:Helper.vertical(100)
            }]}
            title='Shop Now'
        />
    </View>


    </View>
}