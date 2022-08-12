import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity
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

export default function Myaddress({
    navigation
}){
    return <View style={commonStyles.container}>
    <StatusBar 
        backgroundColor={Colors.statusBarBackgroundColor}
        barStyle={commonStyles.statusBarStyleDark}
    />
    <TopBarBack 
        noShadow
        title='My Address'
    />
        <View style={{
            height:147,
            width:147,
            alignSelf:'center',
            marginTop:'30%',
        }}>
            <Image 
                style={{
                    height:'100%',
                    width:'100%',
                }}
                source={ImagePath.myAddressImage}
            />
        </View>

        <TouchableOpacity

        onPress={() => navigation.navigate('AddNewAddress')}
            style={{
                height:52,
                width:52,
                borderRadius:28,
                backgroundColor:Colors.primary,
                alignSelf:'center',
                alignItems:'center',
                justifyContent:'center'
            }}
        >
            <VectorIcon 
                family='Entypo'
                name='plus'
                size={36}
                color={'white'}
            />
        </TouchableOpacity>
    </View>
}