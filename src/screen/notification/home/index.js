import React from "react";
import {SafeAreaView , Text , FlatList, TouchableOpacity} from 'react-native'
import CustomTop from "../../../componet/CustomTop";
const HomeNotify = ({navigation}) => {
    const DATA =  [
        {
            name : "Tất cả"
        },
        {
            name : "Thông báo"
        },
        {
            name : "Chưa đọc"
        },
        {
            name : "Hệ thống"
        },
        {
            name : "bảo trì"
        }
    ]
    const rentenItem  = ({item , focused}) =>(
        <TouchableOpacity style={{margin : 10 , height : 50 , width : 100 , backgroundColor :"#D3D3D3", justifyContent :'center' , alignItems :'center' , borderRadius : 20}}>
                <Text style={{fontWeight :'bold' , fontSize :16 , color :'#8C8D8E'}}>{item.name}</Text>
        </TouchableOpacity>
    )
    return (
        <SafeAreaView style={{flex : 1}}>
                 <CustomTop text={"Thông báo"} setting={() => {
                    navigation.replace('setting')
                 }}/>
                 <SafeAreaView>
                        <FlatList
                          data={DATA}
                          horizontal
                          renderItem={rentenItem}
                        />
                 </SafeAreaView>
        </SafeAreaView>
    )
}
export default HomeNotify