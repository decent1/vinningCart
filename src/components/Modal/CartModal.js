import {StyleSheet, Text, View, Image,TouchableOpacity,ScrollView} from 'react-native';
import React,{useState} from 'react';
import {commonStyles} from '../../utils/commonStyles';
import {Colors} from '../../utils/Colors';
import Helper from '../../utils/Helper';
import {ImagePath} from '../../utils/ImagePath';
import {Fonts} from '../../utils/Fonts';
import VectorIcon from '../Icon/VectorIcon';
import TitleButton from '../Title/TitleButton'
import Button from '../Button';
import { useNavigation } from '@react-navigation/native';


const CartModal = ({modalVisible=()=>{}}) => {
  const navigation = useNavigation()
  const [qty, setQty] = useState(1)
  const [price, setPrice] = useState(115)
  const [totalAmount, setTotalAmount] = useState(price)

  return (
    <View style={styles.container}>
      <View style={styles.modalView}>
        <ScrollView>
        <View style={styles.header}>
          <TitleButton title={'Cart'} noButton />
          <VectorIcon
            family="EvilIcons"
            name="close"
            size={20}
            color={Colors.gray}
            onPress={() => modalVisible()}
          />
        </View>
        <View style={styles.card}>
          <View style={styles.container_image}>
            <Image source={ImagePath.cookingoil} style={styles.product_image} />
          </View>
          <View style={styles.boxContent}>
            <Text style={styles.title}>Slice Mango</Text>
            <Text style={styles.description}>Tetrapack 1L</Text>
            <View style={styles.buttons}>
              <Text style={styles.rs}>Rs 115</Text>
              <VectorIcon
                family="AntDesign"
                name="close"
                size={13}
                color={'#464646'}
              />

              <View style={styles.counterContainer}>
                {qty > 0 && (
                  <View>
                    <TouchableOpacity
                      style={[
                        styles.plusMinusContainer,
                        {
                          borderTopLeftRadius: 8,
                          borderBottomLeftRadius: 8,
                          backgroundColor: Colors.white,
                          borderColor: '#E5E5E5',
                          borderWidth: 1,
                        },
                      ]}>
                      <Text style={styles.plusMinusText}>{qty}</Text>
                    </TouchableOpacity>
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
                      // borderBottomLeftRadius:12
                    },
                  ]}>
                  <Text style={[styles.plusMinusText, {color: Colors.black}]}>
                    {'-'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setQty(qty + 1);
                  }}
                  style={[
                    styles.plusMinusContainer,
                    {
                      borderTopRightRadius: 8,
                      borderBottomRightRadius: 8,
                    },
                  ]}>
                  <Text style={styles.plusMinusText}>{'+'}</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.amount}>= Rs115</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.container_image}>
            <Image source={ImagePath.cookingoil} style={styles.product_image} />
          </View>
          <View style={styles.boxContent}>
            <Text style={styles.title}>Slice Mango</Text>
            <Text style={styles.description}>Tetrapack 1L</Text>
            <View style={styles.buttons}>
              <Text style={styles.rs}>Rs 115</Text>
              <VectorIcon
                family="AntDesign"
                name="close"
                size={13}
                color={'#464646'}
              />

              <View style={styles.counterContainer}>
                {qty > 0 && (
                  <View>
                    <TouchableOpacity
                      style={[
                        styles.plusMinusContainer,
                        {
                          borderTopLeftRadius: 8,
                          borderBottomLeftRadius: 8,
                          backgroundColor: Colors.white,
                          borderColor: '#E5E5E5',
                          borderWidth: 1,
                        },
                      ]}>
                      <Text style={styles.plusMinusText}>{qty}</Text>
                    </TouchableOpacity>
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
                      // borderBottomLeftRadius:12
                    },
                  ]}>
                  <Text style={[styles.plusMinusText, {color: Colors.black}]}>
                    {'-'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setQty(qty + 1);
                  }}
                  style={[
                    styles.plusMinusContainer,
                    {
                      borderTopRightRadius: 8,
                      borderBottomRightRadius: 8,
                    },
                  ]}>
                  <Text style={styles.plusMinusText}>{'+'}</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.amount}>= Rs115</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.container_image}>
            <Image source={ImagePath.cookingoil} style={styles.product_image} />
          </View>
          <View style={styles.boxContent}>
            <Text style={styles.title}>Slice Mango</Text>
            <Text style={styles.description}>Tetrapack 1L</Text>
            <View style={styles.buttons}>
              <Text style={styles.rs}>Rs 115</Text>
              <VectorIcon
                family="AntDesign"
                name="close"
                size={13}
                color={'#464646'}
              />

              <View style={styles.counterContainer}>
                {qty > 0 && (
                  <View>
                    <TouchableOpacity
                      style={[
                        styles.plusMinusContainer,
                        {
                          borderTopLeftRadius: 8,
                          borderBottomLeftRadius: 8,
                          backgroundColor: Colors.white,
                          borderColor: '#E5E5E5',
                          borderWidth: 1,
                        },
                      ]}>
                      <Text style={styles.plusMinusText}>{qty}</Text>
                    </TouchableOpacity>
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
                      // borderBottomLeftRadius:12
                    },
                  ]}>
                  <Text style={[styles.plusMinusText, {color: Colors.black}]}>
                    {'-'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setQty(qty + 1);
                  }}
                  style={[
                    styles.plusMinusContainer,
                    {
                      borderTopRightRadius: 8,
                      borderBottomRightRadius: 8,
                    },
                  ]}>
                  <Text style={styles.plusMinusText}>{'+'}</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.amount}>= Rs115</Text>
            </View>
          </View>
        </View>
        <View style={styles.note}>
          <Text style={styles.noteText}>Minimum purchase of Rs 100 to place your order</Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.Total_item_container}>
            <Text style={styles.total_txt}>
              Total <Text style={styles.small}>(3 Items)</Text>
            </Text>
            <Text style={styles.small}>
            (Inc. of Taxes)
              <Text style={[styles.total_txt, {fontFamily: Fonts.regular}]}>
              Rs 594
              </Text>
            </Text>
        </View>
        <Button
          onPress={() => navigation.navigate('ConfirmLocation')}
          title="Checkout"
          style={styles.button}
        />
        </ScrollView>
      </View>
    </View>
  );
};

export default CartModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    // width: Helper.getScreenWidth() * 0.8,
    borderRadius: 6,
    padding: Helper.vertical(10),
    backgroundColor: Colors.white,
    ...commonStyles.shadow,
    marginHorizontal: Helper.HorizontalValueSmall,
    height:'80%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  //card
  card: {
    flexDirection: 'row',
    marginTop: Helper.vertical(20),
    padding: 3,
    alignItems: 'center',
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
    alignItems: 'flex-start',
    marginLeft: 6,
  },
  title: {
   // fontSize:14,
   fontSize:Helper.getScreenWidth()*0.035,
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  description: {
    // fontSize:12,
    fontSize: Helper.getScreenWidth()*0.03,
    fontFamily: Fonts.regular,
    color: Colors.gray,
    marginTop: Helper.vertical(5),
  },
  rs: {
    fontFamily: Fonts.regular,
   // fontSize:14,
   fontSize:Helper.getScreenWidth()*0.035,
    color: Colors.primary,
    marginTop: Helper.vertical(5),
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  //plus minus
  counterContainer: {
    flexDirection: 'row',

  },
  plusMinusContainer: {
    height: 25,
    width: 20,
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusMinusText: {
    fontFamily: Fonts.bold,
    color: Colors.primary,
  },
  amount: {
  // fontSize:14,
  fontSize:Helper.getScreenWidth()*0.035,
    fontFamily: Fonts.regular,
    color: Colors.black,
    marginLeft: Helper.horizontal(10),
    flex:1
  },
  note:{
    backgroundColor:Colors.lightYellow,
    marginTop:Helper.vertical(20),
    width: Helper.getScreenWidth() * 0.9,
    alignSelf:'center'

  },
  noteText:{
    // fontSize:12,
    fontSize: Helper.getScreenWidth()*0.03,
    color:Colors.primary,
    textAlign:'center',
  },
  horizontalLine: {
    width: Helper.getScreenWidth() * 0.8,
    height: 1,
    backgroundColor: 'gray',
    alignSelf: 'center',
    marginTop: Helper.vertical(20),
  },
  Total_item_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Helper.vertical(21),
  },
  total_txt: {
    fontFamily: Fonts.medium,
    color: Colors.black,
    // fontSize:18
    fontSize: Helper.getScreenWidth() * 0.045,
  },
  small: {
    // fontSize:14,
    fontSize: Helper.getScreenWidth() * 0.035,
    color: '#464646',
  },
  button: {
    borderRadius: 10,
    width:Helper.getScreenWidth()*0.7,
    alignSelf:'center',
    marginTop:Helper.vertical(49)
  },
});
