import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    TextInput,
    Switch,
    Modal
  } from 'react-native';
  import React, {useState} from 'react';
  import {commonStyles} from '../../utils/commonStyles';
  import StatusBar from '../../components/StatusBar';
  import {Colors} from '../../utils/Colors';
  import TopBarBack from '../../components/TopBar/TopBarBack';
  import TitleButton from '../../components/Title/TitleButton';
  import Helper from '../../utils/Helper';
  import {Fonts} from '../../utils/Fonts';
  import VectorIcon from '../../components/Icon/VectorIcon';
  import Input from '../../components/Input';
  import { ImagePath } from '../../utils/ImagePath';
  import BannerReward from '../../components/Banner/BannerReward';
  import Button from '../../components/Button';
import OrderModal from '../../components/Modal/OrderModal';
  
  const CheckoutDetails2 = () => {
    const [confirmModal, setConfirmModal] = useState(false)
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)
    return (
      <View style={[commonStyles.container]}>
        <StatusBar
          backgroundColor={Colors.statusBarBackgroundColor}
          barStyle={commonStyles.statusBarStyleDark}
        />
        <TopBarBack
          onBackPress={() => {
            console.log('clicked');
          }}
          title={'Checkout Details'}
        />
        <ScrollView>
        <Modal
            visible={confirmModal}
            transparent={true}
            animationType="fade"
            onRequestClose={() => { setConfirmModal(false); }}>
            <OrderModal
              modalVisible={() => setConfirmModal(false)}
             
            />
          </Modal>
          <TitleButton
            title={'Delivery Schedule'}
            style={{marginTop: Helper.vertical(32)}}
            noButton
          />
          <View style={styles.categoriesContainer}>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={[styles.categoryName]}>{`Express Delivery`}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={[styles.categoryName]}>{`Schedule Delivery`}</Text>
            </TouchableOpacity>
          </View>
          <TitleButton
            title={'Bill Summary'}
            style={{marginTop: Helper.vertical(32)}}
            noButton
          />
          <View style={styles.bill_summary}>
            <Text style={styles.product}>Product Total (Inc. of Taxes)</Text>
            <Text style={styles.product_price}>Rs 593</Text>
          </View>
          <View style={styles.bill_summary}>
            <Text style={styles.product}>Product Total (Inc. of Taxes)</Text>
            <Text style={styles.product_price}>Rs 593</Text>
          </View>
          <View style={styles.bill_summary}>
            <Text style={styles.product}>Product Total (Inc. of Taxes)</Text>
            <Text style={styles.product_price}>Rs 593</Text>
          </View>
          <View style={styles.total_bill}>
            <Text style={styles.bill_txt}>Total Bill</Text>
            <Text style={styles.bill_rs}>Rs 543</Text>
          </View>
          <BannerReward />

          <TitleButton
            title={'Promo Code'}
            style={{marginTop: Helper.vertical(32)}}
            noButton
          />
          <Input
            placeholder="Enter Code"
            style={styles.input}
            rightComponent={<Text style={styles.apply}>APPLY</Text>}
          />
          <TitleButton
            title={'Payment Information'}
            style={{marginTop: Helper.vertical(32)}}
            noButton
          />
          <View style={styles.checkBox_container}>
            <TouchableOpacity>
              <Text style={styles.checkBox} />
            </TouchableOpacity>
            <Text style={styles.paymentMethod}>Cash on Delivery</Text>
          </View>
          <View style={styles.checkBox_container}>
            <TouchableOpacity>
              <Text style={styles.checkBox} />
            </TouchableOpacity>
            <Text style={styles.paymentMethod}>Credit / Debit Card</Text>
          </View>
          <View style={{marginTop: Helper.getScreenHeight() * 0.05}}>
            <Input
              placeholder="Name"
              style={styles.delivery_instruction_input}
            />
            <Input
              placeholder="Card Number"
              style={styles.delivery_instruction_input}
            />
            <View style={{flexDirection: 'row'}}>
              <Input
                placeholder="MM/YY"
                style={[
                  styles.delivery_instruction_input,
                  {width: Helper.getScreenWidth() * 0.6},
                ]}
              />
              <Text
                style={{
                  fontFamily: Fonts.regular,
                  fontSize: Helper.getScreenWidth() * 0.035,
                  textAlign: 'center',
                  marginTop:Helper.vertical(20)
                }}>
                Cvv
              </Text>
            </View>
           
          </View>
          <Text style={styles.expiry}>Enter Expiry Date</Text>
            <View style={styles.checkBox_container}>
            <TouchableOpacity>
              <Text style={styles.checkBox} />
            </TouchableOpacity>
            <Text style={styles.wallet}>Save this card in my wallet</Text>
          </View>
          <Button onPress={()=>setConfirmModal(true)} title="Confirm Order" style={styles.button} />

        </ScrollView>
      </View>
    );
  };
  
  export default CheckoutDetails2;
  
  const styles = StyleSheet.create({
    categoryButton: {
      width: Helper.getScreenWidth() * 0.35,
      height: Helper.getScreenWidth() * 0.08,
      backgroundColor: Colors.white,
      marginLeft: Helper.getScreenWidth() * 0.05,
      marginTop: Helper.getScreenWidth() * 0.05,
      marginBottom: Helper.getScreenWidth() * 0.05,
      borderRadius: 12,
      borderBottomLeftRadius: 0,
      justifyContent: 'center',
      alignItems: 'center',
      ...commonStyles.shadow,
    },
    categoryName: {
      // fontSize:12,
      fontSize: Helper.getScreenWidth() * 0.03,
      fontFamily: Fonts.regular,
    },
    categoriesContainer: {
      flexDirection: 'row',
    },
    showDate: {
      flexDirection: 'row',
      marginLeft: Helper.getScreenWidth() * 0.05,
      width: Helper.getScreenWidth() * 0.5,
      height: Helper.getScreenWidth() * 0.11,
      marginTop: Helper.getScreenHeight() * 0.01,
      ...commonStyles.shadow,
      alignItems: 'center',
      padding: 9,
      backgroundColor: Colors.white,
      borderRadius: 5,
    },
    datetxt: {
      fontSize: Helper.getScreenWidth() * 0.035,
      fontFamily: Fonts.regular,
    },
    input: {
      ...commonStyles.shadow,
      backgroundColor: Colors.white,
      marginTop: Helper.getScreenHeight() * 0.02,
      alignItems: 'center',
      paddingLeft: Helper.getScreenWidth() * 0.03,
      marginBottom: Helper.getScreenWidth() * 0.05,
      marginLeft: Helper.getScreenWidth() * 0.05,
    },
    apply: {
      paddingRight: Helper.getScreenWidth() * 0.08,
      fontSize: Helper.getScreenWidth() * 0.04,
      fontFamily: Fonts.medium,
      color: Colors.primary,
    },
    PointContainer: {
      flexDirection: 'row',
    },
    pointsIcon: {
      width: 14,
      height: 14,
    },
    pointTxt: {
      fontFamily: Fonts.regular,
      fontSize: Helper.getScreenWidth() * 0.035,
      marginLeft: Helper.horizontal(5.5),
      color: '#464646',
    },
    exchangeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: Helper.getScreenWidth() * 0.03,
      marginHorizontal: Helper.HorizontalValue,
    },
    rs: {
      fontSize: Helper.getScreenWidth() * 0.03,
      color: Colors.primary,
    },
    bill_summary: {
      flexDirection: 'row',
      marginHorizontal: Helper.HorizontalValue,
      justifyContent: 'space-between',
      marginTop: Helper.vertical(20),
    },
    product: {
      fontSize: 14,
      fontFamily: Fonts.regular,
    },
    product_price: {
      fontSize: 14,
      fontFamily: Fonts.regular,
    },
    total_bill: {
      flexDirection: 'row',
      marginHorizontal: Helper.HorizontalValueSmall,
      justifyContent: 'space-between',
      marginTop: Helper.vertical(20),
    },
    bill_txt: {
      fontFamily: Fonts.medium,
      color: Colors.black,
      // fontSize:18
      fontSize: Helper.getScreenWidth() * 0.045,
    },
    bill_rs: {
      fontSize: Helper.getScreenWidth() * 0.045,
      fontFamily: Fonts.medium,
      color: Colors.primary,
    },
    checkBox_container: {
      flexDirection: 'row',
      marginHorizontal: Helper.HorizontalValueSmall,
      marginTop: Helper.vertical(20),
    },
    checkBox: {
      width: 18,
      height: 18,
      borderWidth: 1,
      borderRadius: 2,
      borderColor: Colors.primary,
    },
    paymentMethod: {
      fontSize: Helper.getScreenWidth() * 0.035,
      fontFamily: Fonts.regular,
      color: '#464646',
      paddingLeft:Helper.horizontal(10)
    },
    delivery_instruction_input:{
      ...commonStyles.shadow,
      backgroundColor: Colors.white,
    //   marginTop: Helper.getScreenHeight() * 0.05,
      alignItems: 'center',
      paddingLeft: Helper.getScreenWidth() * 0.03,
      marginBottom: Helper.getScreenWidth() * 0.05,
      marginLeft: Helper.getScreenWidth() * 0.05,
      borderRadius:5
    },
    button:{
      borderRadius:5,
      marginVertical:Helper.vertical(20)
    },
    expiry:{
        fontSize: Helper.getScreenWidth()*0.03,
        fontFamily:Fonts.light,
        marginLeft: Helper.getScreenWidth() * 0.05,
    },
    wallet:{
        fontSize: Helper.getScreenWidth()*0.03,
        fontFamily: Fonts.regular,
      color: '#464646',
      paddingLeft:Helper.horizontal(10)
    }
  });
  