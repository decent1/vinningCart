import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {commonStyles} from '../../utils/commonStyles';
import StatusBar from '../../components/StatusBar';
import TopBarBack from '../../components/TopBar/TopBarBack';
import {Colors} from '../../utils/Colors';
import Helper from '../../utils/Helper';
import TitleButton from '../../components/Title/TitleButton';
import {Fonts} from '../../utils/Fonts';
import Input from '../../components/Input';
import VectorIcon from '../../components/Icon/VectorIcon';
import MyText from '../../components/Text/MyText';
import {ImagePath} from '../../utils/ImagePath';
import Button from '../../components/Button';
const RequestForm = ({navigation}) => {
  const [userList, setuserList] = useState([
    {
      id: 1,
      userName: `ABC`,
      number: `03129387465`,
    },
    {
      id: 2,
      userName: `ABC`,
      number: `03129387465`,
    },
    {
      id: 3,
      userName: `ABC`,
      number: `03129387465`,
    },
    {
      id: 4,
      userName: `ABC`,
      number: `03129387465`,
    },
    {
      id: 5,
      userName: `ABC`,
      number: `03129387465`,
    },
    {
      id: 6,
      userName: `ABC`,
      number: `03129387465`,
    },
  ]);
  const [selected, setSelected] = useState(false);
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
        title={'Request Form'}
      />
      <View style={styles.parent}>
        <View style={styles.container_box}>
          <TitleButton
            title={'Enter Name or Phone number'}
            style={{marginHorizontal: null}}
            textStyle={{fontFamily: Fonts.regular}}
            noButton
          />
          <Input
            leftComponent={<VectorIcon name="search1" family="AntDesign" />}
            placeholder="Search"
            style={styles.input}
            keyboardType={'default'}
          />
        </View>
      </View>
      <View style={styles.contact_list}>
        <ScrollView>
          <MyText text={`Select`} style={styles.select} />
          {userList.map((value, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                    setSelected(value.id);
                  }}
                activeOpacity={0.6}
                
                style={styles.list_container}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.user_icon}>
                    <VectorIcon name="user-o" family="FontAwesome" />
                  </View>
                  <View style={styles.info_box}>
                    <MyText text={value.userName} style={styles.name} />
                    <Text style={styles.number}>{value.number}</Text>
                  </View>
                </View>
                {value.id === selected ? (
                  <ImageBackground
                    source={ImagePath.Vector}
                    resizeMode="cover"
                    style={styles.ImageBackground}>
                    <VectorIcon
                      family="AntDesign"
                      name="check"
                      color={Colors.primary}
                    />
                  </ImageBackground>
                ) : (
                  <View style={styles.rectangle_box}></View>
                )}
              </TouchableOpacity>
            );
          })}
            <Button 
            onPress={() => {
              navigation.navigate('RequestingRS')
            }}
            title='Continue' style={styles.btn} />
        </ScrollView>
      </View>
    </View>
  );
};

export default RequestForm;

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: Helper.HorizontalValue,
    marginVertical: Helper.vertical(32),
  },
  container_box: {
    marginTop: Helper.vertical(38),
  },
  input: {
    ...commonStyles.shadow,
    backgroundColor: Colors.appBackgroundColor,
    borderRadius: 5,
    marginHorizontal: null,

    marginTop: Helper.vertical(20),
    paddingLeft: 10,
    // height: 57,
    height: Helper.getScreenHeight() * 0.09,
  },
  contact_list: {
    backgroundColor: Colors.appBackgroundColor,
    ...commonStyles.shadow,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginHorizontal: null,
    height: Helper.getScreenHeight() * 0.64,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  select: {
    fontSize: Helper.fontSize20,
    fontFamily: Fonts.medium,
    color: '#464646',
    padding: 13,
  },
  list_container: {
    flexDirection: 'row',
    marginHorizontal: Helper.HorizontalValue,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Helper.vertical(20),
  },
  user_icon: {
    backgroundColor: '#E5F3FF',
    borderRadius: 100,
    alignItems: 'center',
    // width:37,
    width: Helper.getScreenWidth() * 0.12,
    // height:37,
    height: Helper.getScreenHeight() * 0.07,
  },
  info_box: {
    marginLeft: Helper.horizontal(13),
  },
  name: {
    fontFamily: Fonts.regular,
    fontSize: Helper.fontSize18,
  },
  number: {
    fontSize: Helper.fontSize14,
    fontFamily: Fonts.regular,
    marginTop: Helper.vertical(8),
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
  btn: {
    marginTop:Helper.vertical(129),
    marginHorizontal:null,
    borderRadius:10,
   marginBottom:Helper.vertical(20),
    alignSelf:'center',
  //   width:260,
    width:Helper.getScreenWidth()*0.72
},
});
