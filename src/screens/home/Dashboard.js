import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    Modal
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { commonStyles } from '../../utils/commonStyles'
import { Fonts } from '../../utils/Fonts'
import StatusBar from '../../components/StatusBar'
import TopBarAddress from '../../components/TopBar/TopBarAddress'
import Input from '../../components/Input'
import Helper from '../../utils/Helper'
import VectorIcon from '../../components/Icon/VectorIcon'
import { ImagePath } from '../../utils/ImagePath'
import BannerSimple from '../../components/Banner/BannerSimple'
import TitleButton from '../../components/Title/TitleButton'

import categories from '../../data/categories.json'
import products from '../../data/products.json'
import rewards from '../../data/rewards.json'

import ListItemCategory from '../../components/ListItem/ListItemCategory'
import ListItemProduct from '../../components/ListItem/ListItemProduct'
import ListItemRewards from '../../components/ListItem/ListItemRewards'

import ButtonSmall from '../../components/ButtonSmall'
import AddressModal from '../../components/Modal/AddressModal'

export default function Dashboard({
    navigation
}){
    const [searchTerm, setSearchTerm] = useState('')
    const [modalVisible_Address, setModalVisible_Address] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState('1')
    return <View style={commonStyles.container}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible_Address}
            onRequestClose={() => {
                setModalVisible_Address(false)
            }}
        >
            <AddressModal
                modalVisible={setModalVisible_Address}
                selectedAddress={selectedAddress}
                setSelectedAddress={setSelectedAddress}
            />
        </Modal>
        <StatusBar 
            backgroundColor={Colors.statusBarBackgroundColor}
            barStyle={commonStyles.statusBarStyleDark}
        />
        <TopBarAddress 
            onPress={() => {
                setModalVisible_Address(true)
            }}
            selectedAddress={selectedAddress}
        />
        <ScrollView>
            <View style={styles.searchParentContainer}>
                <View style={styles.searchContainer}>
                    <Input 
                        value={searchTerm}
                        onChangeText={(text)=>setSearchTerm(text)}
                        leftComponent={
                            <VectorIcon
                                size={Helper.getScreenWidth()*0.04}
                                family={'AntDesign'}
                                name={'search1'}
                                color={'rgba(70, 70, 70, 0.7)'}
                            />
                        }
                        placeholder='Search'
                        style={[
                            commonStyles.buttonRound,
                            commonStyles.shadow,
                            styles.input
                        ]}
                    />
                    <TouchableOpacity style={styles.searchIconContainer}>
                        <View style={styles.round}>
                            <VectorIcon 
                                family='AntDesign'
                                name={'gift'}
                                color={Colors.white}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.searchIconContainer}>
                        <Image 
                            style={styles.scaneIcon}
                            source={ImagePath.scaneIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <BannerSimple />
            <TitleButton 
                
                title='Categories'
                onPress={()=>{navigation.navigate('Categories')}}
                style={{marginTop:Helper.vertical(32)}}
                buttonTitle={'View All'}
            />
            <View style={styles.categoryContainer}>
                {
                    categories.map(item => <ListItemCategory 
                        navigation={navigation}
                        item={item}
                    />)
                }
            </View>
            <TitleButton 
                title='Weekly Trending'
                onPress={()=>{}}
                style={{marginTop:Helper.vertical(32)}}
                buttonTitle={'View All'}
            />
            <View style={styles.listContianer}>
                <ScrollView horizontal>
                {
                    products.map((item,index) => <ListItemProduct 
                        item={item}
                        index={index}
                    />)
                }
                </ScrollView>
            </View>
            <TitleButton 
                title='Rewards'
                onPress={()=>{navigation.navigate('Rewards')}}
                style={{marginTop:Helper.vertical(32)}}
                buttonTitle={'View All'}
            />
            <View style={styles.listContianer}>
                <ScrollView horizontal>
                {
                    rewards.map((item,index) => <ListItemRewards 
                        item={item}
                        index={index}
                    />)
                }
                </ScrollView>
            </View>

            <View style={styles.bottomCard}>
                <Text style={styles.cardTitle}>{'Are you low on cash?'}</Text>
                <Text style={styles.cardDes}>{'Use vinnigcart wallet to top up'}</Text>
                <View style={styles.buttonContainer}>
                    <ButtonSmall 
                        onPress={() => { navigation.navigate('SendCredit')}}
                        buttonTitle={'Send Credit'}
                        buttonTextStyle={{}}
                        buttonStyle={{
                            width:Helper.getScreenWidth()*0.30,
                            marginRight:16
                        }}
                    />
                    <ButtonSmall 
                        onPress={() => { navigation.navigate('RequestCredit') }}
                        buttonTitle={'Request Credit'}
                        buttonTextStyle={{
                            color:'#F4900C'
                        }}
                        buttonStyle={{
                            backgroundColor:Colors.lightYellow,
                            width:Helper.getScreenWidth()*0.32,
                        }}
                    />
                </View>
            </View>        
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    searchParentContainer:{
        marginHorizontal:Helper.HorizontalValueSmall,
        marginTop:Helper.vertical(24),
    },
    searchContainer:{
        width:'100%',
        flexDirection:'row',
        alignItems: 'center',
    },
    searchIconContainer:{
        height:52,
        width: 52,
        ...commonStyles.center,
        // borderWidth:1,
    },
    round:{
        height:36,
        width: 36,
        backgroundColor:Colors.primary,
        borderRadius:30,
        ...commonStyles.center,
        alignSelf:'flex-end',
        marginRight:2
    },
    scaneIcon:{
        height:30,
        width: 30,
    },
    categoryContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:Helper.vertical(20),
    },
    input:{
        flex:1,
        marginHorizontal:0,
        alignItems:'center',
        height:Helper.getScreenWidth()*0.1
        // height:40
    },
    listContianer:{
        marginTop:Helper.vertical(32),
    },
    bottomCard:{
        marginHorizontal:Helper.HorizontalValueSmall,
        backgroundColor:Colors.white,
        ...commonStyles.shadow,
        marginTop:Helper.vertical(48),
        borderRadius:4,
        padding:12,
        marginBottom:Helper.vertical(72),
    },
    cardTitle:{
        fontFamily:Fonts.medium,
        alignSelf:'center',
        // fontSize:20
        fontSize:Helper.getScreenWidth()*0.052,
        color:Colors.black,
    },
    cardDes:{
        fontFamily:Fonts.regular,
        color:'#464646',
        // fontSize:12,
        fontSize: Helper.getScreenWidth()*0.03,
        alignSelf:'center',
        marginTop:4,
    },
    buttonContainer:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop:12,
    }
})