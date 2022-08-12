import React,{useState,useCallback} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
  
} from 'react-native'
import {commonStyles } from '../../utils/commonStyles'
import StatusBar from '../../components/StatusBar'
import { Colors } from '../../utils/Colors'
import TopBarShare from '../../components/TopBar/TopBarShare'
import products from '../../data/products.json'
import Helper from '../../utils/Helper'
import { ImagePath } from '../../utils/ImagePath'
import { Fonts } from '../../utils/Fonts'
import TitleButton from '../../components/Title/TitleButton'
import Button from '../../components/Button'
import CartModal from '../../components/Modal/CartModal'


export default function ItemDetails({}){
    const [cartModal, setCartModal] = useState(false)
    const [item, setItem] = useState(products.find(item => item.id === '5'))
    const [qty, setQty] = useState(1)
    const [textShown, setTextShown] = useState(false); //To show ur remaining Text
    const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
    const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
};
const onTextLayout = useCallback(e =>{
    setLengthMore(e.nativeEvent.lines.length > 4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
},[]);
console.log('length',lengthMore)
    return (
      <View style={commonStyles.container}>
        <StatusBar
          backgroundColor={Colors.statusBarBackgroundColor}
          barStyle={commonStyles.statusBarStyleDark}
        />
        <TopBarShare
          onBackPress={() => {
            console.log('back');
          }}
          onSharePress={() => {
            console.log('share');
          }}
          onHeartPress={() => {
            console.log('heart');
          }}
        />

        <Modal
          visible={cartModal}
          transparent={true}
          animationType="fade"
          onRequestClose={() => {
            setCartModal(false);
          }}>
          <CartModal modalVisible={() => setCartModal(false)} />
        </Modal>

        <View style={styles.itemImageContianer}>
          <Image style={styles.image} source={ImagePath[item.image]} />
        </View>
        <View style={styles.price_container}>
          <Text style={styles.price}>Rs 550</Text>
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
              style={[styles.plusMinusContainer]}>
              <Text style={[styles.plusMinusText, {color: Colors.primary}]}>
                -
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
        </View>
        <Text style={styles.titleButton}>Sunridge Chakki Atta </Text>
        <View style={styles.product_description}>
          <Text
            style={styles.description}
            onTextLayout={onTextLayout}
            numberOfLines={textShown ? undefined : 4}>
            Sunridge chakki atta is produced on Pakistan's first and only PESA
            mill Sunridge chakki aata is whole wheat aata with all its natural
            fibre, vitamins and minerals. It meets all the requirements of
            natural,Explanation: It can be seen from the output that the items
            are fetched only once when the app is rendered but not when we
            change the theme by pressing the button. It does not matter how many
            times we flip the theme, useEffect will not call the setItems until
            the input field has a new number.
          </Text>
          {lengthMore ? (
            <Text style={styles.viewMore} onPress={toggleNumberOfLines}>
              {textShown ? 'View less...' : 'View more...'}
            </Text>
          ) : null}
        </View>

        <Button
          onPress={() => setCartModal(true)}
          title="Add to cart"
          style={styles.button}
        />
     
      </View>
    );
}

const styles = StyleSheet.create({
  itemImageContianer: {
    width: '80%',
    height: '30%',
    backgroundColor: Colors.primary,
    alignSelf: 'center',
    borderRadius: 30,
    borderTopRightRadius: 0,
    marginTop: Helper.vertical(40),
    ...commonStyles.center,
  },
  image: {
    width: '70%',
    height: '70%',
    resizeMode:'contain'
  },
  price_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Helper.HorizontalValue,
    marginTop: Helper.vertical(40),
  },
  counterContainer: {
    flexDirection: 'row',
  },
  plusMinusContainer: {
    height: 30,
    width: 24,
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusMinusText: {
    fontFamily: Fonts.bold,
    color: Colors.primary,
  },
  price: {
    fontFamily: Fonts.medium,
    // fontSize:18
    fontSize: Helper.getScreenWidth() * 0.045,
    color: '#2D2C2C',
  },
  titleButton: {
    fontFamily: Fonts.regular,
    // fontSize:20
    fontSize: Helper.getScreenWidth() * 0.052,
    color: '#2D2C2C',
    marginHorizontal: Helper.HorizontalValue,
  },
  product_description: {
    marginHorizontal: Helper.HorizontalValue,
    marginTop: Helper.vertical(7),
  },
  description: {
    textAlign: 'justify',
    fontFamily: Fonts.regular,
    // fontSize:12,
    fontSize: Helper.getScreenWidth() * 0.03,
    color: Colors.gray,
  },
  viewMore: {
    // fontSize:14,
    fontSize: Helper.getScreenWidth() * 0.035,
    color: Colors.primary,
    fontFamily: Fonts.medium,
  },
  button: {
    borderRadius: 5,  
    width:Helper.getScreenWidth()*0.7,
    alignSelf:'center',
    marginTop:Helper.vertical(49)
  },
});