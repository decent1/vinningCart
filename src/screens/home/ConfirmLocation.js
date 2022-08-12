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

export default function ConfirmLocation({
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
        <Input 
            leftComponent={
                <VectorIcon 
                    family='Entypo'
                    name={'location-pin'}
                    color={Colors.primary}
                />
            }
            style={[
                commonStyles.inputRound,
                {
                    marginTop:Helper.vertical(12),
                    position:'absolute',
                    width:'90%',
                    marginTop:Helper.vertical(20)
                }
            ]}
            placeholder={'Search Location'}
        />
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

        <Button 
            onPress={() => navigation.navigate('CheckoutDetails')}
            style={[commonStyles.buttonCurved,{
                marginTop:Helper.vertical(40)
            }]}
            title='Confirm'
        />
        <Text style={{
            alignSelf:'center',
            color:Colors.primary,
            fontFamily:Fonts.regular,
            marginTop:Helper.vertical(24)
        }}>{'Select from saved address'}</Text>
        </View>

    </View>
}