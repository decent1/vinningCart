import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/commonStyles'
import StatusBar from '../../components/StatusBar';
import TopBarBack from '../../components/TopBar/TopBarBack';
import { Colors } from '../../utils/Colors';
import Helper from '../../utils/Helper';
import VectorIcon from '../../components/Icon/VectorIcon';
import { Fonts } from '../../utils/Fonts';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TitleButton from '../../components/Title/TitleButton';

const SuggestNewProduct = ({navigation}) => {
  return (
    <View style={commonStyles.container}>
      <StatusBar
        backgroundColor={Colors.statusBarBackgroundColor}
        barStyle={commonStyles.statusBarStyleDark}
      />
      <TopBarBack
        noShadow
        onBackPress={() => {
          console.log('clicked');
        }}
        title={'Suggest New Product'}
      />
      <ScrollView>
        <View style={styles.parent}>
          <View style={styles.input_container}>
            <TitleButton
              title={'Brand & Product Name'}
              style={{marginHorizontal: null}}
              noButton
            />
            <Input
              placeholder="chips"
              style={styles.input}
              keyboardType={'default'}
            />
          </View>
          <View style={styles.input_container}>
            <TitleButton
              title={'Size (Optional)'}
              style={{marginHorizontal: null}}
              noButton
            />
            <Input
              placeholder="5 kg"
              style={styles.input}
              keyboardType={'default'}
            />
          </View>

          <Button 
          onPress={() => {
            navigation.navigate('RequestMoreItem')
          }}
          title="Submit" style={styles.btn} />
        </View>
      </ScrollView>
    </View>
  );
}

export default SuggestNewProduct

const styles = StyleSheet.create({
    parent: {
      marginHorizontal: Helper.HorizontalValue,
      marginVertical: Helper.vertical(20),
    },
  
    input: {
      ...commonStyles.shadow,
      backgroundColor: Colors.appBackgroundColor,
      borderRadius: 5,
      marginHorizontal: null,
      height: 57,
      marginTop: Helper.vertical(20),
      paddingLeft: 10,
    },
    txt: {
      // fontSize: 16,
      fontSize: Helper.getScreenWidth() * 0.04,
      color: '#464646',
      fontFamily: Fonts.regular,
      marginLeft: Helper.horizontal(15),
    },
    btn: {
      marginTop: Helper.vertical(159),
      borderRadius: 10,
    },
    input_container:{
        marginTop:Helper.vertical(21)
    }
  });