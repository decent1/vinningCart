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

export default function MyCart({
    navigation
}){
    return <View style={commonStyles.container}>
        <StatusBar 
            backgroundColor={Colors.statusBarBackgroundColor}
            barStyle={commonStyles.statusBarStyleDark}
        />
        <TopBarBack 
            noShadow
            title='My Cart'
        />
        <View style={{
            width:215,
            height:229,
            alignSelf:'center',
            marginTop:Helper.vertical(48)
        }}>
            <Image 
                style={{
                    height:'100%',
                    width:'100%'
                }}
                source={ImagePath.cartImage}
            />
        </View>

        <Text
            style={{
                fontFamily:Fonts.regular,
                fontSize:Helper.fontSize20,
                color:'#464646',
                alignSelf:'center',
                marginTop:Helper.vertical(12)
            }}
        >{'No Items in your Cart'}</Text>

        <Button 
        onPress={() => navigation.navigate('Dashboard')}
        style={[commonStyles.buttonCurved,{
            marginTop:Helper.vertical(92)
        }]}
        title='Start Shopping'
        />

    </View>
}