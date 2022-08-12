import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { commonStyles } from '../../utils/commonStyles'
import StatusBar from '../../components/StatusBar'
import TopBarBack from '../../components/TopBar/TopBarBack'
import TitleButton from '../../components/Title/TitleButton'
import Helper from '../../utils/Helper'
import BannerImage from '../../components/Banner/BannerImage'
import ListItemCategory from '../../components/ListItem/ListItemCategory'
import categories from '../../data/categories.json'

export default function Categories({}){
    return <View style={commonStyles.container}>
        <StatusBar 
            backgroundColor={Colors.statusBarBackgroundColor}
            barStyle={commonStyles.statusBarStyleDark}
        />
        <TopBarBack 
            noShadow
            onBackPress={() => {
                console.log('clicked')
            }}
            title={'Categories'}
        />
        <TitleButton 
            title={'Promotions'}
            style={{marginTop:Helper.vertical(32)}}
            noButton
        />
        <BannerImage 
            image={"banner"}
        />
        <TitleButton 
            title={'Coooking Essentials'}
            style={{marginTop:Helper.vertical(32)}}
            noButton
        />
        <View style={styles.categoryContainer}>
            {
                categories.slice(0,4).map(item => <ListItemCategory 
                    item={item}
                />)
            }
        </View>
        <TitleButton 
            title={'Cosmetics'}
            style={{marginTop:Helper.vertical(32)}}
            noButton
        />
        <View style={styles.categoryContainer}>
            {
                categories.slice(0,4).map(item => <ListItemCategory 
                    item={item}
                />)
            }
        </View>

    </View>
}

const styles = StyleSheet.create({
    categoryContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:Helper.vertical(20),
    },
})