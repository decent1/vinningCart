import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {commonStyles} from '../../utils/commonStyles';
import StatusBar from '../../components/StatusBar';
import TopBarBack from '../../components/TopBar/TopBarBack';
import {Colors} from '../../utils/Colors';
import Helper from '../../utils/Helper';
import {ImagePath} from '../../utils/ImagePath';
import VectorIcon from '../../components/Icon/VectorIcon';
import {Fonts} from '../../utils/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../components/Button';
import MyText from '../../components/Text/MyText';
const MyWhishList = () => {
  const [qty, setQty] = useState(0);
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
        title={'My Wishlist'}
      />
      <ScrollView>
        <View style={styles.parent}>
          <View style={styles.card}>
            <View style={styles.container_image}>
              <Image
                source={ImagePath.cookingoil}
                style={styles.product_image}
              />
            </View>
            <View style={styles.boxContent}>
              <View>
                <Text style={styles.title}>Slice Mango</Text>
                <Text style={styles.description}>Tetrapack 1L</Text>
              </View>
              <View style={styles.buttons}>
                <Text style={styles.rs}>Rs 115</Text>
                <TouchableOpacity style={styles.add_btn}>
                  <AntDesign color={'white'} size={16} name={'shoppingcart'} />
                  <MyText
                    fontSize={Helper.fontSize12}
                    text={'Add to cart'}
                    style={{color: 'white'}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.listContianer}>
            <MyText text={'Just For You'} style={styles.txt} />

            <ScrollView horizontal>
              <View style={styles.mini_card}>
                <View style={[styles.mini_card_image_container,{margin:10}]}>
                  <Image
                    source={ImagePath.cookingoil}
                    style={styles.product_image}
                  />
                </View>

                <View style={[styles.boxContent,{margin:10}]}>
                  <View>
                    <Text style={styles.title}>Slice Mango</Text>
                    <Text style={styles.description}>Tetrapack 1L</Text>
                  </View>
                  <View style={styles.buttons}>
                    <Text style={styles.rs}>Rs 115</Text>
                  </View>
                </View>
       
                <View style={styles.counterContainer}>
                  <TouchableOpacity
                    onPress={() => setQty(qty + 1)}
                    style={[
                      styles.plusMinusContainer,
                      {
                        borderTopRightRadius: 12,
                      },
                    ]}>
                    <Text style={styles.plusMinusText}>{'+'}</Text>
                  </TouchableOpacity>
                  <View style={styles.hr} />
                  {qty > 0 && (
                    <View>
                      <TouchableOpacity
                        style={[
                          styles.plusMinusContainer,
                          {
                            borderBottomLeftRadius: 0,
                          },
                        ]}>
                        <Text style={styles.plusMinusText}>{qty}</Text>
                      </TouchableOpacity>
                      <View style={styles.hr} />
                    </View>
                  )}
                  <TouchableOpacity
                    onPress={() => {
                      if (qty > 0) {
                        setQty(qty - 1);
                      }
                    }}
                    style={[
                      styles.plusMinusContainer,
                      {
                        borderBottomLeftRadius: 12,
                      },
                    ]}>
                    <Text style={[styles.plusMinusText, {color: Colors.black}]}>
                      {'-'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.mini_card}>
                <View style={[styles.mini_card_image_container,{margin:10}]}>
                  <Image
                    source={ImagePath.cookingoil}
                    style={styles.product_image}
                  />
                </View>

                <View style={[styles.boxContent,{margin:10}]}>
                  <View>
                    <Text style={styles.title}>Slice Mango</Text>
                    <Text style={styles.description}>Tetrapack 1L</Text>
                  </View>
                  <View style={styles.buttons}>
                    <Text style={styles.rs}>Rs 115</Text>
                  </View>
                </View>
       
                <View style={styles.counterContainer}>
                  <TouchableOpacity
                    onPress={() => setQty(qty + 1)}
                    style={[
                      styles.plusMinusContainer,
                      {
                        borderTopRightRadius: 12,
                      },
                    ]}>
                    <Text style={styles.plusMinusText}>{'+'}</Text>
                  </TouchableOpacity>
                  <View style={styles.hr} />
                  {qty > 0 && (
                    <View>
                      <TouchableOpacity
                        style={[
                          styles.plusMinusContainer,
                          {
                            borderBottomLeftRadius: 0,
                          },
                        ]}>
                        <Text style={styles.plusMinusText}>{qty}</Text>
                      </TouchableOpacity>
                      <View style={styles.hr} />
                    </View>
                  )}
                  <TouchableOpacity
                    onPress={() => {
                      if (qty > 0) {
                        setQty(qty - 1);
                      }
                    }}
                    style={[
                      styles.plusMinusContainer,
                      {
                        borderBottomLeftRadius: 12,
                      },
                    ]}>
                    <Text style={[styles.plusMinusText, {color: Colors.black}]}>
                      {'-'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
            
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyWhishList;

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: Helper.HorizontalValue,
    marginVertical: Helper.vertical(30),
  },
  //card
  card: {
    flexDirection: 'row',
    marginTop: Helper.vertical(20),
    padding: 3,
    // alignItems: 'center',
    // ...commonStyles.shadow,
    // backgroundColor: Colors.appBackgroundColor,
  },
  container_image: {
    width: Helper.getScreenWidth() * 0.17,
    height: Helper.getScreenHeight() * 0.13,
    backgroundColor: '#E5F3FF',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    ...commonStyles.shadow,
  },
  product_image: {
    width: Helper.getScreenWidth() * 0.08,
    height: Helper.getScreenHeight() * 0.11,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: Helper.vertical(20),
  },
  //
  boxContent: {
    flex: 1,
    marginLeft: Helper.horizontal(6),
    justifyContent: 'space-between',
  
  },
  title: {
    // fontSize:14,
    fontSize: Helper.getScreenWidth() * 0.035,
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  description: {
    // fontSize:12,
    fontSize: Helper.getScreenWidth() * 0.03,
    fontFamily: Fonts.regular,
    color: Colors.gray,
    marginTop: Helper.vertical(5),
  },
  rs: {
    fontFamily: Fonts.medium,
    fontSize: Helper.fontSize18,
    color: Colors.primary,
    marginTop: Helper.vertical(5),
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  add_btn: {
    flexDirection: 'row',
    height: 25,
    width: 94,
    backgroundColor: Colors.primary,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  listContianer: {
    marginTop: Helper.vertical(32),
  },
  txt: {
    marginHorizontal: null,
    fontSize: Helper.fontSize20,
    color: '#2D2C2C',
  },

  ///Horizontal Card(mini)
 
  mini_card: {
    // width:269,
    width: Helper.getScreenWidth() * 0.7,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: Colors.appBackgroundColor,
    ...commonStyles.shadow,
    marginTop: Helper.vertical(20),
    marginBottom:10,
    marginLeft:16
  
  },
  mini_card_image_container: {
    // width:66
    width: Helper.getScreenWidth() * 0.2,
    // height:74,
    height: Helper.getScreenHeight() * 0.12,
    backgroundColor: '#E5F3FF',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    ...commonStyles.shadow,
 
   
  },
  ///
  plusMinusContainer: {
    height: 22,
    width: 24,
    backgroundColor: Colors.lightYellow,
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  plusMinusText: {
    fontFamily: Fonts.bold,
    color: Colors.primary,
  },
  hr: {
    width: 16,
    height: 1,
    backgroundColor: 'gray',
    alignSelf: 'center',
  },
  cartContainer: {
    height: 32,
    width: 32,
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
