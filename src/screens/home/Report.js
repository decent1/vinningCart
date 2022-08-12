import {StyleSheet, Text, View, ScrollView,TouchableOpacity,ImageBackground,TextInput} from 'react-native';
import React,{useState} from 'react';
import {commonStyles} from '../../utils/commonStyles';
import StatusBar from '../../components/StatusBar';
import TopBarBack from '../../components/TopBar/TopBarBack';
import {Colors} from '../../utils/Colors';
import Helper from '../../utils/Helper';
import MyText from '../../components/Text/MyText';
import VectorIcon from '../../components/Icon/VectorIcon';
import { Fonts } from '../../utils/Fonts';
import Button from '../../components/Button';
import {ImagePath} from '../../utils/ImagePath'

const Report = ({
  navigation
}) => {
    const [data, setData] = useState([
        {
          id: 1,
          name: 'App is not working',
        
         
        },
        {
          id: 2,
          name: 'Products are not loading',
      

        },
        {
          id: 3,
          name: 'Issues with category or product',
 

        },
        {
          id: 4,
          name: 'Other',
         

        },
       
        
      ]);
      const [selected, setSelected] = useState(0)
      const [discription, setDiscription] = useState('')
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
        title={'Report Technical Issues'}
      />
      <ScrollView>
        <View style={styles.parent}>
          <MyText
            text={
              'We want your order experience to be perfect, if you have issues with the app or any technical problem. Please submit issues from below.'
            }
            style={{marginHorizontal: null}}
          />
          {data.map((value, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelected(value.id);
                }}
                key={index}
                activeOpacity={0.8}
                style={styles.card}>
                {value.id === selected ? (
                  <ImageBackground
                    source={ImagePath.Vector}
                    resizeMode="cover"
                    style={styles.ImageBackground}>
                    <VectorIcon family="AntDesign" name="check" color={Colors.primary} />
                  </ImageBackground>
                ) : (
                  <View style={styles.rectangle_box}></View>
                )}
                <Text style={styles.txt}>{value.name}</Text>
              </TouchableOpacity>
            );
          })}

          <TextInput
            multiline={true}
            numberOfLines={8}
            onChangeText={text => setDiscription({text})}
            value={discription}
            style={styles.des}
            placeholder="Describe your issues"
            textAlignVertical="top"
          />
          <Button 
          onPress={() => {
            navigation.goBack()
          }}
          title="Submit" style={styles.btn} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: Helper.HorizontalValue,
    marginVertical: Helper.vertical(32),
  },
  card: {
    borderRadius: 5,
    height: 57,
    backgroundColor: Colors.appBackgroundColor,
    ...commonStyles.shadow,
    marginTop: Helper.vertical(27),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: Helper.vertical(20),
  },
  txt: {
    // fontSize:18
    fontSize: Helper.getScreenWidth() * 0.045,
    color: '#464646',
    textAlign: 'center',
    fontFamily: Fonts.regular,
    marginLeft: Helper.horizontal(20),
  },
  rectangle_box: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: Colors.primary,
  },
  ImageBackground: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  des: {
    marginTop: Helper.vertical(100),
    borderRadius: 5,
    backgroundColor: Colors.appBackgroundColor,
    ...commonStyles.shadowBottom,
    paddingLeft: 10,
  },
  btn: {
    marginTop: Helper.vertical(100),
    borderRadius: 10,
  },
});
