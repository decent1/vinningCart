import {StyleSheet, Text, View, Image,ScrollView,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import {commonStyles} from '../../utils/commonStyles';
import StatusBar from '../../components/StatusBar';
import TopBarBack from '../../components/TopBar/TopBarBack';
import {Colors} from '../../utils/Colors';
import Helper from '../../utils/Helper';
import {ImagePath} from '../../utils/ImagePath';
import { Fonts } from '../../utils/Fonts';
import TitleButton from '../../components/Title/TitleButton';
import StepIndicator from 'react-native-step-indicator';
import VectorIcon from '../../components/Icon/VectorIcon';
import Input from '../../components/Input';

const OrderSummary = () => {
  const [currentPosition, setCurrentPosition] = useState(0)
  const [qty, setQty] = useState(0)
const labels = ["Cart","Delivery Address"];
const names=['calendar-check-outline','truck-delivery-outline','done']

const getStepIndicatorIconConfig = ({position, stepStatus}) => {
  const iconConfig = {
    name: '',
    // color: stepStatus === 'finished' ? '#ffffff' : stepStatus === 'current' ? '#ffffff' : Colors.gray ,
    color: stepStatus === 'current' ? '#ffffff' :  Colors.primary,
    size: 20,
  };
  switch (position) {
    case 0: {
      iconConfig.name = 'calendar-check-outline';
      break;
    }
    case 1: {
      iconConfig.name = 'truck-delivery-outline';
      break;
    }
    case 2: {
      iconConfig.name = 'check-circle-outline';
      break;
    }
    default: {
      break;
    }
  }
  return iconConfig;
};
const renderStepIndicator = (params) => (
 console.log(params),
  <VectorIcon family='MaterialCommunityIcons' {...getStepIndicatorIconConfig(params)} />
);
const customStyles = {
  stepIndicatorSize: 40,
  currentStepIndicatorSize: 45,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: Colors.primary,
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: Colors.primary,
  stepStrokeUnFinishedColor: Colors.gray,
  separatorFinishedColor: Colors.primary,
  separatorUnFinishedColor: Colors.gray,
  stepIndicatorFinishedColor:Colors.white,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: Colors.primary,
  // stepIndicatorLabelFontSize: 13,
  // currentStepIndicatorLabelFontSize: 13,
  // stepIndicatorLabelCurrentColor: '#fe7013',
  // stepIndicatorLabelFinishedColor: '#ffffff',
  // stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  // labelColor: '#999999',
  // labelSize: 13,
  // currentStepLabelColor: '#fe7013',
};
const onPageChange =(position)=>{
  console.log('pos',position)
//  setState({currentPosition: position});
setCurrentPosition(position)
}
  return (
    <View style={commonStyles.container}>
      <StatusBar
        backgroundColor={Colors.statusBarBackgroundColor}
        barStyle={commonStyles.statusBarStyleDark}
      />
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.top}>
            <View style={styles.checkContainer}>
              <Image source={ImagePath.cheque} style={styles.cheque} />
            </View>
            <Text style={styles.message}>Thankyou for Shopping!</Text>
            <Text style={styles.orderNo}>Order no 12A384</Text>
          </View>
          <TitleButton
            title={'Order Status'}
            style={{marginTop: Helper.vertical(32), marginHorizontal: null}}
            noButton
          />
          <View style={styles.stepper}>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={currentPosition}
              labels={null}
              onPress={onPageChange}
              stepCount={3}
              renderStepIndicator={renderStepIndicator}
            />
          </View>
          <Input
            placeholder="Cancel Order in 1:59 "
            style={styles.input}
            rightComponent={<Text style={styles.cancel}>CANCEL</Text>}
          />
          <Text style={styles.order_quantity}>You have ordered 3 Items</Text>
          <View style={styles.card}>
            <View style={styles.container_image}>
              <Image
                source={ImagePath.cookingoil}
                style={styles.product_image}
              />
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
                    onPress={() => setQty(qty + 1)}
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
                <Text style={styles.amount}>= Rs 115</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.container_image}>
              <Image
                source={ImagePath.cookingoil}
                style={styles.product_image}
              />
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
                    onPress={() => setQty(qty + 1)}
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
                <Text style={styles.amount}>= Rs 115</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.container_image}>
              <Image
                source={ImagePath.cookingoil}
                style={styles.product_image}
              />
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
                    onPress={() => setQty(qty + 1)}
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
                <Text style={styles.amount}>= Rs 115</Text>
              </View>
            </View>
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.Total_item_container}>
            <Text style={styles.total_txt}>
              Total <Text style={styles.small}>(3 Items)</Text>
            </Text>
            <Text style={styles.small}>
              Total
              <Text style={[styles.total_txt, {fontFamily: Fonts.regular}]}>
                (3 Items)
              </Text>
            </Text>
          </View>
          <Text style={styles.methodStyle}>
            Payment Method:<Text style={styles.paymentDetail}> COD</Text>{' '}
          </Text>
          <Text style={styles.methodStyle}>
            Delivery Address:
            <Text style={styles.paymentDetail}> Johar block 2</Text>{' '}
          </Text>
          <Text style={styles.methodStyle}>Estimated Delivery Time:</Text>
          <View style={styles.deliveryTime}>
            <Text style={styles.time}> 3:04 PM </Text>
            <Text style={styles.date}> 12 MAR 2022</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  body: {
    marginHorizontal: Helper.HorizontalValueSmall,
    marginVertical: Helper.vertical(10),
  },
  top: {
    alignItems: 'center',
    marginTop: Helper.vertical(10),
  },
  checkContainer:{
    height:136,
    width:136,
    alignSelf:'center',
  },
  cheque: {
    height:'100%',
    width:'100%'
  },
  message: {
    fontFamily: Fonts.medium,
    // fontSize:22
    fontSize: Helper.getScreenWidth() * 0.054,
    color: '#2D2C2C',
  },
  orderNo: {
    fontFamily: Fonts.regular,
    // fontSize:14,
    fontSize: Helper.getScreenWidth() * 0.035,
    marginTop: Helper.vertical(6),
    color: '#464646',
  },
  stepper: {
    marginTop: Helper.vertical(20),
  },
  cancel: {
    paddingRight: Helper.getScreenWidth() * 0.08,
    fontSize: Helper.getScreenWidth() * 0.04,
    fontFamily: Fonts.medium,
    color: Colors.primary,
  },
  input: {
    ...commonStyles.shadow,
    backgroundColor: Colors.white,
    marginTop: Helper.vertical(44),
    alignItems: 'center',
    paddingLeft: Helper.getScreenWidth() * 0.03,
    marginBottom: Helper.getScreenWidth() * 0.05,
    borderRadius: 5,
    marginHorizontal: null,
    width: Helper.getScreenWidth() * 0.8,
  },
  order_quantity: {
    marginTop: Helper.vertical(20),
  },
  //card
  card: {
    flexDirection: 'row',
    marginTop: Helper.vertical(20),
    // borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    // ...commonStyles.shadow,
    // backgroundColor: Colors.appBackgroundColor,
  },
  // container_image: {
  //   width: Helper.getScreenWidth() * 0.2,
  //   height: Helper.getScreenHeight() * 0.15,
  //   backgroundColor: '#E5F3FF',
  //   borderTopLeftRadius: 12,
  //   borderTopRightRadius: 12,
  //   borderBottomRightRadius: 12,
  //   ...commonStyles.shadow,
  // },
  // product_image: {
  //   width: Helper.getScreenWidth() * 0.08,
  //   height: Helper.getScreenHeight() * 0.13,
  //   alignSelf: 'center',
  //   justifyContent: 'center',
  //   alignContent: 'center',
  //   marginTop: Helper.vertical(20),
  // },
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
  // button: {
  //   height: 35,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 10,
  //   width: 50,
  //   marginRight: 5,
  //   marginTop: 5,
  // },
  icon: {
    width: 20,
    height: 20,
  },
  view: {
    backgroundColor: '#eee',
  },
  profile: {
    backgroundColor: '#1E90FF',
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
  horizontalLine: {
    width: Helper.getScreenWidth() * 0.9,
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
  methodStyle: {
    // fontSize: 16,
    fontSize: Helper.getScreenWidth() * 0.04,
    fontFamily: Fonts.regular,
    color: '#464646',
    marginTop: Helper.vertical(20),
  },
  paymentDetail: {
    // fontSize: 16,
    fontSize: Helper.getScreenWidth() * 0.04,
    fontFamily: Fonts.medium,
    color: '#464646',
    marginTop: Helper.vertical(20),
  },
  deliveryTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Helper.vertical(20),
  },
  time: {
    // fontSize: 16,
    fontSize: Helper.getScreenWidth() * 0.04,
    color: Colors.primary,
    fontFamily: Fonts.medium,
  },
  date: {
    // fontSize: 16,
    fontSize: Helper.getScreenWidth() * 0.04,
    color: Colors.black,
    fontFamily: Fonts.medium,
  },
});
