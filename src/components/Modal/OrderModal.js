import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/commonStyles'
import { Colors } from '../../utils/Colors'
import Helper from '../../utils/Helper'
import { ImagePath } from '../../utils/ImagePath'
import { Fonts } from '../../utils/Fonts'
import VectorIcon from '../Icon/VectorIcon'

const OrderModal = ({
  modalVisible=()=>{}
}) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.modalView}>
        <View style={styles.header}>
          <VectorIcon
            family="EvilIcons"
            name="close"
            size={20}
            color={Colors.gray}
            onPress={() => modalVisible()}
          />
        </View>
        <Image source={ImagePath.confirmOrder} style={styles.image} />
        <Text style={styles.txt}>Your Order is confirmed</Text>
      </View>
    </View>
  );
}

export default OrderModal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  header: {
    flexDirection:'row',
    justifyContent:'flex-end',
  },
  modalView: {
    width: Helper.getScreenWidth() * 0.8,
    borderRadius: 6,
    paddingVertical: Helper.vertical(16),
    backgroundColor: Colors.white,
    ...commonStyles.shadow,
  },
  txt: {
    // fontSize:18
    fontSize: Helper.getScreenWidth() * 0.045,
    fontFamily: Fonts.regular,
    color: Colors.gray,
    alignSelf:'center'
  },
  image:{
    alignSelf:'center',
    width:100,
    height:80,
  }
});