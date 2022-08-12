// import Toast from 'react-native-simple-toast';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {Keys} from './Keys' 

// const storeData = async (key, value) => {
//     try {
//       await AsyncStorage.setItem(key, JSON.stringify(value));
//     } catch (e) {}
// };

// const getData = async key => {
//     try {
//       const jsonValue = await AsyncStorage.getItem(key);
//       return jsonValue != null ? JSON.parse(jsonValue) : null;
//     } catch (e) {}
// };
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class Helper{
    
    static getScreenWidth = () => {
        return windowWidth
    }
    static getScreenHeight = () => {
        return windowHeight
    }

    static vertical(value){
        return `${(value/windowHeight)*100}%`
    }
    static horizontal(value){
        return `${(value/windowWidth)*100}%`
    }

    static fontSize12 = Helper.getScreenWidth()*0.03
    static fontSize14 = Helper.getScreenWidth()*0.035
    static fontSize10 = Helper.getScreenWidth()*0.027
    static fontSize16 = Helper.getScreenWidth()*0.04
    static fontSize18 = Helper.getScreenWidth()*0.045
    static fontSize20 = Helper.getScreenWidth()*0.052
    static fontSize22 = Helper.getScreenWidth()*0.060
    static fontSize36 = Helper.getScreenWidth()*0.095

    // static HorizontalValue = 24
    static HorizontalValue = `${(24/windowWidth)*100}%`
    static HorizontalValueSmall = `${(16/windowWidth)*100}%`


    // static async showToast(msg) {
    //     Toast.show(msg);
    // }

    // static saveUser(user) {
    //     storeData(Keys.USER_DATA, user);
    // }
    // static async getUser() {
    //     let user = await getData(Keys.USER_DATA);
    //     return user;
    // }

    // static saveToken(token) {
    //     storeData(Keys.ACCESS_TOKEN, token);
    // }
    // static async getToken() {
    //     let token = await getData(Keys.ACCESS_TOKEN);
    //     return token;
    // }

    // static async isAuthenticated(){
    //     let token = await getData(Keys.ACCESS_TOKEN);
    //     if(token){
    //         return true
    //     }
    //     return false
    // }
    // static parseDateTime(date){
    //     var months = [
    //         "",
    //         "Jan",
    //         "Feb",
    //         "Mar",
    //         "Apr",
    //         "May",
    //         "Jun",
    //         "Jul",
    //         "Aug",
    //         "Sep",
    //         "Oct",
    //         "Nov",
    //         "Dec"
    //     ]
    //     return date.split('-')[2] + " " + months[parseInt(date.split('-')[1])] + ", " + date.split('-')[0]
    // }
    
}