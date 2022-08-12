import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Helper from '../../utils/Helper'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'
import { ImagePath } from '../../utils/ImagePath'

const BannerReward = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContanier}>
        <Image
          style={styles.rewardsIcon}
          source={ImagePath.rewardsIcon}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{'Vinnigcart Rewards'}</Text>
      </View>
      <View style={styles.earnPoints}>
        <Text style={styles.earning}>You will earn</Text>
        <Text style={[styles.earning,{fontFamily:Fonts.bold}]}>1779</Text>
        <Text style={styles.earning}>Points</Text>
      </View>
    </View>
  );
}

export default BannerReward

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: Helper.getScreenHeight() * 0.12,
    marginHorizontal: Helper.HorizontalValueSmall,
    marginTop: Helper.vertical(20),
    borderRadius: 5,
    backgroundColor: Colors.primary,
    paddingHorizontal: Helper.horizontal(10),
    alignItems: 'center',
  },
  earning: {
    textAlign: 'center',
    fontSize:Helper.getScreenWidth()*0.035,
    color:Colors.white,
    fontFamily:Fonts.regular,
    marginTop:Helper.vertical(10)
  },
  rewardsIcon: {
    width: 61,
    height: 61,
  },
  text:{
      fontSize:Helper.getScreenWidth()*0.035,
      color:Colors.white,
      fontFamily:Fonts.medium
  }
});