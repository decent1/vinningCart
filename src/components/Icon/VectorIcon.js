import React from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Zocial from 'react-native-vector-icons/Zocial'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { commonStyles } from '../../utils/commonStyles'

export default function VectorIcon({
    family = 'FontAwesome',
    name = 'phone',
    size = 18,
    color = '#000',
    style = {},
    onPress = null,
}) {
    const getComponent = (family,name,size,color,onPress) => {
        switch(family){
          case 'AntDesign' :
            return <AntDesign 
                name={name}
                size={size}
                color={color}
                onPress={onPress}
              />  
          case 'Entypo' :
            return <Entypo 
                name={name}
                size={size}
                color={color}
                onPress={onPress}
              />  
          case 'EvilIcons' :
            return <EvilIcons 
                name={name}
                size={size}
                color={color}
                onPress={onPress}
              />  
          case 'Feather' :
            return <Feather 
                name={name}
                size={size}
                color={color}
                onPress={onPress}
              />  
          case 'FontAwesome' :
            return <FontAwesome 
                name={name}
                size={size}
                color={color}
                onPress={onPress}
              />  
          case 'Foundation' :
            return <Foundation 
                name={name}
                size={size}
                color={color}
                onPress={onPress}
              />  
          case 'Ionicons' :
            return <Ionicons 
                name={name}
                size={size}
                color={color}
                onPress={onPress}
              />  
          case 'MaterialIcons' :
            return <MaterialIcons 
                name={name}
                size={size}
                color={color}
                onPress={onPress}
              />  
          case 'MaterialCommunityIcons' :
            return <MaterialCommunityIcons 
                name={name}
                size={size}
                color={color}
                onPress={onPress}
              />  
          case 'SimpleLineIcons' :
            return <SimpleLineIcons 
                name={name}
                size={size}
                color={color}
                onPress={onPress}
              />  
          case 'Octicons' :
            return <Octicons 
                name={name}
                size={size}
                color={color}
                onPress={onPress}
              />  
          case 'Zocial' :
            return <Zocial 
                name={name}
                size={size}
                color={color}
                onPress={onPress}
              />  
          case 'Fontisto' :
            return <Fontisto 
                name={name}
                size={size}
                color={color}
                onPress={onPress}
              />    
          case 'FontAwesome5' :
            return <FontAwesome5 
                name={name}
                size={size}
                color={color}
                onPress={onPress}
              />        
          default:
            return <Entypo 
                name={name}
                size={size}
                color={color}
                onPress={onPress}
              />
        } 
      }
    return (
        <View style={[styles.container,style]}>
            {getComponent(
                family,
                name,
                size,
                color,
                onPress
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:44,
        width: 52,
        ...commonStyles.center
    }
})