import React,{useState} from 'react'
import {
    View,
    Text,
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { commonStyles } from '../../utils/commonStyles'
import StatusBar from '../../components/StatusBar'
import H1 from '../../components/Text/h1'
import Helper from '../../utils/Helper'
import Input from '../../components/Input'
import VectorIcon from '../../components/Icon/VectorIcon'
import P1 from '../../components/Text/p1'
import Button from '../../components/Button'
import { Fonts } from '../../utils/Fonts'


export default function Login({
    navigation
}) {
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    return (
        <View style={commonStyles.container}>
            <StatusBar 
                backgroundColor={Colors.statusBarBackgroundColor}
                barStyle={commonStyles.statusBarStyleDark}
            />
            <H1
                style={{
                    marginTop:Helper.vertical(60)
                }} 
                text={'Login'}
            />
            <Input 
                leftComponent={
                    <VectorIcon
                        family='FontAwesome5'
                        name="user-alt"
                        color={Colors.primary}
                    />
                }
                placeholder='Username'
                style={[commonStyles.inputSimple,{
                    marginTop:Helper.vertical(62)
                }]}
                value={userName}
                onChangeText={(value) => {
                    setUserName(value)
                }}
            />
            <Input 
                leftComponent={
                    <VectorIcon
                        family='FontAwesome'
                        name="lock"
                        size={20}
                        color={Colors.primary}
                    />
                }
                placeholder='Password'
                style={[commonStyles.inputSimple,{
                    marginTop:Helper.vertical(44)
                }]}
                secureTextEntry={true}
                value={password}
                onChangeText={(value) => {
                    setPassword(value)
                }}
            />

            <P1 
                onPress={() => {
                    navigation.navigate('EnterPhoneR')
                }}
                style={{
                    color:Colors.primary,
                    alignSelf:'flex-end',
                    marginTop:Helper.vertical(20)
                }}
                text={'Forgot password?'}
            />

            <Button 
                onPress={() => navigation.navigate('HomeStack')}
                style={[commonStyles.buttonCurved,{
                    marginTop:Helper.vertical(160)
                }]}
                title='Login'
            />
            <Text style={{
                alignSelf:'center',
                position: 'absolute',
                bottom:Helper.vertical(24),
            }}>
            <P1 text={'New to Vinnigcart '}
            />
             <P1 
                onPress={() => {navigation.navigate('EnterPhone')}}
                style={{
                    color:Colors.primary,
                    fontFamily:Fonts.bold,
                }}
                text={'Sign up'}
            />
            </Text>
        </View>
    )
}