import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/commonStyles'
import StatusBar from '../../components/StatusBar';
import TopBarBack from '../../components/TopBar/TopBarBack';
import Helper from '../../utils/Helper';
import { Colors } from '../../utils/Colors';
import TitleButton from '../../components/Title/TitleButton';
import MyText from '../../components/Text/MyText';
import { Fonts } from '../../utils/Fonts';
const RefferalProgramDetails = () => {
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
        title={' '}
      />
      <ScrollView>
        <View style={styles.parent}>
          <TitleButton
            title="How VinnigCart Refferal Program Works"
            noButton
            style={{marginHorizontal: null}}
            textStyle={{
              // fontSize:20
              fontSize: Helper.getScreenWidth() * 0.052,
              color:Colors.primary
            }}
          />
          <MyText style={styles.heading} text="Placing an orde" />

          <MyText
            style={styles.question}
            text={'Q.How do I place an order on the Airlift Express website?'}
          />
          <MyText
            style={styles.Answer}
            text={'A. Follow five simple steps to place your order:'}
          />
          <View style={{flexDirection: 'row', marginTop: Helper.vertical(20)}}>
            <Text style={{fontSize: 20}}>{'\u2022'}</Text>
            <MyText
              style={styles.bullet_txt}
              text={
                'Browse through the categories of items on the app / website or use the Search bar at the top of the page to search for specific items. Add your desired items to the cart by'
              }
            />
          </View>
          <View style={{flexDirection: 'row', marginTop: Helper.vertical(20)}}>
            <Text style={{fontSize: 20}}>{'\u2022'}</Text>
            <MyText
              style={styles.bullet_txt}
              text={` Click on your cart to review it and proceed to checkout.`}
            />
          </View>
          <View style={{flexDirection: 'row', marginTop: Helper.vertical(20)}}>
            <Text style={{fontSize: 20}}>{'\u2022'}</Text>
            <MyText
              style={styles.bullet_txt}
              text={`Confirm your location and select your preferred payment / delivery methods `}
            />
          </View>
          <MyText
            style={[{marginTop: Helper.vertical(20), marginHorizontal: null}]}
            text={`Confirm your location and select your preferred payment / delivery methods `}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default RefferalProgramDetails

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: Helper.HorizontalValue,
    marginVertical: Helper.vertical(32),
  },
  heading: {
    marginTop: Helper.vertical(10),
    textAlign: 'center',
    fontFamily: Fonts.medium,
    marginHorizontal: null,
    fontSize: Helper.fontSize16,
  },
  question: {
    marginHorizontal: null,
    fontSize: Helper.fontSize16,
    fontFamily: Fonts.medium,
    marginTop: Helper.vertical(20),
  },
  Answer: {
    marginHorizontal: null,
    fontSize: Helper.fontSize16,
    fontFamily: Fonts.regular,
    marginTop: Helper.vertical(20),
  },
  bullet_txt: {
    flex: 1,
    paddingLeft: 5,
    marginHorizontal:null
  },
});