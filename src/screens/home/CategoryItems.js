import React,{useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { commonStyles } from '../../utils/commonStyles'
import StatusBar from '../../components/StatusBar'
import TopBarBack from '../../components/TopBar/TopBarBack'
import TitleButton from '../../components/Title/TitleButton'
import Helper from '../../utils/Helper'
import BannerImage from '../../components/Banner/BannerImage'
import ListItemCategory from '../../components/ListItem/ListItemCategory'
import { Fonts } from '../../utils/Fonts'
import products from '../../data/products.json'
import ListItemProduct from '../../components/ListItem/ListItemProduct'

export default function CategoryItems({
    navigation,
    route
}){
    const [categories, setCategory] = useState([
        { id: '1', name:"Cooking Oil", },
        { id: '2', name:"Rice & pulses", },
        { id: '3', name:"Spices", },
        { id: '4', name:"Spices", },
    ])
    const [subCategories, setSubCategory] = useState([
        { id: '1', name:"National", },
        { id: '2', name:"Unilever", },
        { id: '3', name:"Pepsi", },
    ])
    const [selectedCategory, setSelectedCategory] = useState('1')
    return <View style={commonStyles.container}>
        <StatusBar 
            backgroundColor={Colors.statusBarBackgroundColor}
            barStyle={commonStyles.statusBarStyleDark}
        />
        <TopBarBack 
            onBackPress={() => {
                console.log('clicked')
            }}
            title={route.params.title}
        />
        <ScrollView>
            <View style={styles.categoriesContainer}>
                <FlatList 
                    horizontal
                    data={categories}
                    renderItem={({item }) => {
                        return <TouchableOpacity
                        onPress={() => {
                            setSelectedCategory(item.id)
                        }}
                            style={[styles.categoryButton,{
                                backgroundColor: selectedCategory === item.id ? Colors.lightYellow : '#EEEEEE',
                            }]}
                        >
                            <Text style={[styles.categoryName,{
                                color: selectedCategory === item.id ? Colors.primary : Colors.black,
                            }]}>{item.name}</Text>
                        </TouchableOpacity>
                    }}
                />
            </View>
            <View style={styles.categoriesContainer}>
                <FlatList 
                    horizontal
                    data={categories}
                    renderItem={({item }) => {
                        return <TouchableOpacity
                        onPress={() => {
                            setSelectedCategory(item.id)
                        }}
                            style={styles.subcategoryButton}
                        >
                            <Text style={[styles.categoryName,{
                                color: selectedCategory === item.id ? Colors.primary : '#8C8C8C',
                                fontFamily:Fonts.medium
                            }]}>{item.name}</Text>
                        </TouchableOpacity>
                    }}
                />
            </View>
            <View style={styles.listContianer}>
                {
                    products.map((item,index) => <ListItemProduct 
                        item={item}
                        index={index}
                    />)
                }
            </View>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    categoriesContainer:{
        flexDirection:'row',
    },
    categoryButton:{
        width:Helper.getScreenWidth()*0.26,
        height:Helper.getScreenWidth()*0.08,
        backgroundColor:Colors.white,
        marginLeft:Helper.getScreenWidth()*0.05,
        marginTop:Helper.getScreenWidth()*0.05,
        marginBottom:Helper.getScreenWidth()*0.05,
        borderRadius:12,
        borderBottomLeftRadius:0,
        justifyContent:'center',    
        alignItems:'center',
        ...commonStyles.shadow,
    },
    subcategoryButton:{
        width:Helper.getScreenWidth()*0.26,
        height:Helper.getScreenWidth()*0.08,
        backgroundColor:Colors.white,
        marginLeft:Helper.getScreenWidth()*0.05,
        marginBottom:Helper.getScreenWidth()*0.05,
        justifyContent:'center',    
        alignItems:'center',

    },
    categoryName:{
        // fontSize:12,
        fontSize: Helper.getScreenWidth()*0.03,
        fontFamily:Fonts.regular,  
    },
    listContianer:{
        marginTop:Helper.vertical(32),
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'center'
    },
})