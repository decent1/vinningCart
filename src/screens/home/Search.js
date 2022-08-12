import React from 'react'
import {
    View,
    Text
} from 'react-native'
import { commonStyles } from '../../utils/commonStyles'
import StatusBar from '../../components/StatusBar'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'
import Input from '../../components/Input'
import Helper from '../../utils/Helper'
import VectorIcon from '../../components/Icon/VectorIcon'
import ButtonSmall from '../../components/ButtonSmall'
export default function Search({
    navigation
}){
    return <View style={commonStyles.container}>
        <StatusBar 
            backgroundColor={Colors.statusBarBackgroundColor}
            barStyle={commonStyles.statusBarStyleDark}
        />
        <Input 
            leftComponent={
                <VectorIcon 
                    family='AntDesign'
                    name={'search1'}
                    color={'rgba(70, 70, 70, 0.49)'}
                />
            }
            style={[
                commonStyles.inputRound,
                {
                    marginTop:Helper.vertical(12)
                }
            ]}
            placeholder={'What are you looking for'}
        />

        <Text
            style={{
                fontSize:Helper.fontSize18,
                marginHorizontal:Helper.HorizontalValueSmall,
                fontFamily:Fonts.regular,
                color:'#2D2C2C',
                marginTop:Helper.vertical(20)
            }}
        >{'Recent Searches'}</Text>

        <View style={{
            marginHorizontal:Helper.HorizontalValue,
            flexDirection:'row',
            alignItems:'center'
        }}>
            <VectorIcon 
                family='Ionicons'
                name={'reload'}
                color={'#464646'}
            />
            <Text
                style={{
                    fontFamily:Fonts.regular,
                    fontSize:Helper.fontSize16,
                    color:'#464646',
                    marginLeft:Helper.horizontal(12)
                }}
            >{'Beans'}</Text>

            <View style={{
                position:'absolute',
                right:0,
            }}>
                <VectorIcon 
                    family='AntDesign'
                    name={'close'}
                    color={'#464646'}
                />
            </View>
        </View>

        <View style={{
            marginHorizontal:Helper.HorizontalValue,
            flexDirection:'row',
            alignItems:'center'
        }}>
            <VectorIcon 
                family='Ionicons'
                name={'reload'}
                color={'#464646'}
            />
            <Text
                style={{
                    fontFamily:Fonts.regular,
                    fontSize:Helper.fontSize16,
                    color:'#464646',
                    marginLeft:Helper.horizontal(12)
                }}
            >{'Beans'}</Text>

            <View style={{
                position:'absolute',
                right:0,
            }}>
                <VectorIcon 
                    family='AntDesign'
                    name={'close'}
                    color={'#464646'}
                />
            </View>
        </View>

        <View style={{
            marginHorizontal:Helper.HorizontalValue,
            flexDirection:'row',
            alignItems:'center'
        }}>
            <VectorIcon 
                family='Ionicons'
                name={'reload'}
                color={'#464646'}
            />
            <Text
                style={{
                    fontFamily:Fonts.regular,
                    fontSize:Helper.fontSize16,
                    color:'#464646',
                    marginLeft:Helper.horizontal(12)
                }}
            >{'Beans'}</Text>

            <View style={{
                position:'absolute',
                right:0,
            }}>
                <VectorIcon 
                    family='AntDesign'
                    name={'close'}
                    color={'#464646'}
                />
            </View>
        </View>

        <Text
            style={{
                fontSize:Helper.fontSize18,
                marginHorizontal:Helper.HorizontalValueSmall,
                fontFamily:Fonts.regular,
                color:'#2D2C2C',
                marginTop:Helper.vertical(20)
            }}
        >{'Popular Searches'}</Text>

        <View style={{
            flexDirection:'row'
        }}>
            <ButtonSmall 
            buttonStyle={[commonStyles.buttonRound,{
                ...commonStyles.shadow,
                marginLeft:Helper.horizontal(20),
                marginTop:Helper.vertical(20)
            }]}
        buttonTitle='Olive Oil'
        />

<ButtonSmall 
            buttonStyle={[commonStyles.buttonRound,{
                ...commonStyles.shadow,
                marginLeft:Helper.horizontal(20),
                marginTop:Helper.vertical(20)
            }]}
        buttonTitle='Olive Oil'
        />

<ButtonSmall 
            buttonStyle={[commonStyles.buttonRound,{
                ...commonStyles.shadow,
                marginLeft:Helper.horizontal(20),
                marginTop:Helper.vertical(20)
            }]}
        buttonTitle='Olive Oil'
        />
        </View>
        <View style={{
            flexDirection:'row'
        }}>
            <ButtonSmall 
            buttonStyle={[commonStyles.buttonRound,{
                ...commonStyles.shadow,
                marginLeft:Helper.horizontal(20),
                marginTop:Helper.vertical(20)
            }]}
        buttonTitle='Olive Oil'
        />

<ButtonSmall 
            buttonStyle={[commonStyles.buttonRound,{
                ...commonStyles.shadow,
                marginLeft:Helper.horizontal(20),
                marginTop:Helper.vertical(20)
            }]}
        buttonTitle='Olive Oil'
        />

<ButtonSmall 
            buttonStyle={[commonStyles.buttonRound,{
                ...commonStyles.shadow,
                marginLeft:Helper.horizontal(20),
                marginTop:Helper.vertical(20)
            }]}
        buttonTitle='Olive Oil'
        />
        </View>
        <View style={{
            flexDirection:'row'
        }}>
            <ButtonSmall 
            buttonStyle={[commonStyles.buttonRound,{
                ...commonStyles.shadow,
                marginLeft:Helper.horizontal(20),
                marginTop:Helper.vertical(20)
            }]}
        buttonTitle='Olive Oil'
        />

<ButtonSmall 
            buttonStyle={[commonStyles.buttonRound,{
                ...commonStyles.shadow,
                marginLeft:Helper.horizontal(20),
                marginTop:Helper.vertical(20)
            }]}
        buttonTitle='Olive Oil'
        />

        </View>
    </View>
}