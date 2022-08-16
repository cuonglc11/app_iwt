import React, { useState } from "react";
import {SafeAreaView , Text, View , FlatList} from 'react-native'
import CustomTop from "../../../componet/CustomTop";
const ConverAccout  =  ({navigation , route}) => {
    const {goBack} = navigation;
    console.log(goBack  , 'goBack' );
    const [chatHistory ,  setChatHistory] = useState([
        {
            url  : require('../../../asset/img/user_cn.png'),
            isSender  : true,
            timestamp  :1641654238000 ,
            messenger  : "Hello"

        },
        {
            url  : require('../../../asset/img/user_cn.png'),
            isSender  : true,
            messenger  : "How are you",
            timestamp  :1641654238000,


        }
    ])
    const rendenItem = ({item}) => {
        return (
            <View>
               <Text>Cuopnb</Text>
            </View>
        )
    }
    // console.log();
    return (
        <SafeAreaView style={{flex : 1}}>
            <CustomTop text={route.params.id} onclick={() => {
                navigation.replace('Home')
                // goBack()
            }}/>
            <FlatList
            data={chatHistory}
            renderItem={rendenItem}
/>

        </SafeAreaView>
    )
}
export default ConverAccout