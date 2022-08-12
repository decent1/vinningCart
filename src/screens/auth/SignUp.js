import React,{useState} from 'react'
import {
    View,
    Text,
    ScrollView
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


export default function SignUp({
    navigation
}) {
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [email,setEmail] = useState('')
    return (
        <View style={commonStyles.container}>
            <StatusBar 
                backgroundColor={Colors.statusBarBackgroundColor}
                barStyle={commonStyles.statusBarStyleDark}
            />
            <ScrollView>
            <H1
                style={{
                    marginTop:Helper.vertical(60)
                }} 
                text={'Sign up'}
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
                secureTextEntry={true}
                placeholder='Password'
                style={[commonStyles.inputSimple,{
                    marginTop:Helper.vertical(28)
                }]}
                value={password}
                onChangeText={(value) => {
                    setPassword(value)
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
                secureTextEntry={true}
                placeholder='Confirm Password'
                style={[commonStyles.inputSimple,{
                    marginTop:Helper.vertical(28)
                }]}
                value={confirmPassword}
                onChangeText={(value) => {
                    setConfirmPassword(value)
                }}
            />
             <Input 
                leftComponent={
                    <VectorIcon
                        family='MaterialIcons'
                        name="email"
                        color={Colors.primary}
                    />
                }
                keyboardType="email-address"
                placeholder='Email Address'
                style={[commonStyles.inputSimple,{
                    marginTop:Helper.vertical(28)
                }]}
                value={email}
                onChangeText={(value) => {
                    setEmail(value)
                }}
            />

           

            <Button 
                onPress={() => navigation.navigate('AddRefferal')}
                style={[commonStyles.buttonCurved,{
                    marginTop:Helper.vertical(160)
                }]}
                title='Sign up'
            />
            </ScrollView>
           
        </View>
    )
}