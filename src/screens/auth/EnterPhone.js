import React,{useState} from 'react';
import { 
    Text, 
    View, 
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import StatusBar from '../../components/StatusBar'
import { Colors } from '../../utils/Colors';
import { commonStyles } from '../../utils/commonStyles';
import Helper from '../../utils/Helper';
import { ImagePath } from '../../utils/ImagePath';
import H1 from '../../components/Text/h1'
import P1 from '../../components/Text/p1'
import Input from '../../components/Input';
import VectorIcon from '../../components/Icon/VectorIcon'
import Button from '../../components/Button'

const EnterPhone = ({ navigation }) => {
    const [phone,setPhone] = useState('')
    return (
        <View style={commonStyles.container}>
            <StatusBar 
                backgroundColor={Colors.statusBarBackgroundColor}
                barStyle={commonStyles.statusBarStyleDark}
            />
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image 
                        source={ImagePath.phoneImage}
                        style={styles.phoneImage}
                        resizeMode={'stretch'}
                    />
                </View>
                <H1 
                    style={{
                        marginTop:Helper.vertical(48)
                    }}
                    text={'Welcome!'}
                />
                <P1 
                    style={{
                        marginTop:Helper.vertical(8)
                    }}
                    text={'Enter your phone number'}
                />
                <Input 
                    leftComponent={
                        <VectorIcon 
                            
                        />
                    }
                    keyboardType='phone-pad'
                    placeholder='Phone Number'
                    style={[commonStyles.inputSimple,{
                        marginTop:Helper.vertical(24)
                    }]}
                    value={phone}
                    onChangeText={(value) => {
                        setPhone(value)
                    }}
                />
    
                <Button 
                    onPress={() => {
                        navigation.navigate('EnterCode')
                    }}
                    style={[commonStyles.buttonCurved,{
                        marginTop:Helper.vertical(92)
                    }]}
    
                    title='Next'
                />
            </ScrollView>
        </View>
    )
};

export default EnterPhone;

const styles = StyleSheet.create({
    imageContainer:{
        height:Helper.getScreenHeight()*0.40,
        width:Helper.getScreenWidth(),
    },
    phoneImage:{
        width:'100%',
        height:'100%',
    }
})