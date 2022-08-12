import React,{useState} from 'react'
import {
    View,
    Text,
    Keyboard,
    StyleSheet,
    ToastAndroid
} from 'react-native'
import {commonStyles} from '../../utils/commonStyles'
import { Colors } from '../../utils/Colors'
import {Fonts} from '../../utils/Fonts'
import StatusBar from '../../components/StatusBar'
import H1 from '../../components/Text/h1'
import Helper from '../../utils/Helper'
import TopBarBack from '../../components/TopBar/TopBarBack'
import P1 from '../../components/Text/p1'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import ButtonSmall from '../../components/ButtonSmall'

export default function EnterCode({
    navigation
}){
    const [code, setCode] = useState('')
    const [timeLeft, setTimeLeft] = useState('00:60')
    const onVerifyCode = async (code) => {
        navigation.navigate('SignUp')
    }
    return <View style={commonStyles.container}>
        <StatusBar 
            backgroundColor={Colors.statusBarBackgroundColor}
            barStyle={commonStyles.statusBarStyleDark}
        />
        <TopBarBack
            noShadow
        />
        <H1
            style={styles.title} 
            text={'Enter OTP Code'}
        />
        <P1 
            style={styles.description}
            text={'A code has been sent to this number 0467 477 4678 via SMS.'}
        />
         <View style={styles.inputContainer}>
          <SmoothPinCodeInput
            codeLength={6}
            cellSize={36}
            cellSpacing={8}
            value={code}
            onTextChange={code => setCode(code)}
            onFulfill={code => {
              onVerifyCode(code);
              Keyboard.dismiss();
            }}
            cellStyle={{
              backgroundColor: Colors.white,
              borderRadius: 3,
              borderBottomWidth: 1,
              borderColor: Colors.primary,
            }}
            cellStyleFocused={{
              borderWidth: 1,
              borderColor: Colors.primary,
            }}
          />
        </View>
        <Text style={styles.timeLeftText}>
            <Text>{'Wait for '}</Text>
            <Text style={styles.timeText}>{timeLeft}</Text>
        </Text>
        <ButtonSmall 
            onPress={() => {
                ToastAndroid.show('Code has been sent!',2000)
            }}
            buttonStyle={styles.button}
            buttonTextStyle={styles.buttonText}
            buttonTitle={"Resend"}
        />    

    </View>
}

const styles = StyleSheet.create({
    inputContainer:{
        alignItems: 'center', 
        marginTop: Helper.vertical(32)
    },
    title:{
        marginTop:Helper.vertical(16)
    },
    description:{
        color:"#464646",
        marginTop:Helper.vertical(10),
        marginRight:Helper.horizontal(100)
    },
    timeLeftText:{
        // fontSize: 16,
        fontSize: Helper.getScreenWidth()*0.04,
        fontFamily:Fonts.regular,
        marginHorizontal:Helper.HorizontalValue,
        color:'#464646',
        marginTop:Helper.vertical(36)
    },
    timeText:{
        fontFamily:Fonts.bold
    },
    button:{
        marginHorizontal:Helper.HorizontalValue,
        marginTop:Helper.vertical(12),
        backgroundColor:Colors.primary
    },
    buttonText:{
        color:Colors.white,
        fontFamily:Fonts.regular
    }
})