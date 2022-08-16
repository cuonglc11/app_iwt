import React from "react";
import { SafeAreaView, Text, View , FlatList , TouchableOpacity } from 'react-native'
import CustomTextInput from "../../../componet/CustomInput";
import CustomTop from "../../../componet/CustomTop";
const ListWordScreen = ({ navigation }) => {
    const DATA = [
        {
            xl : "Xử lý 03",
            kv : "Hà Nội",
            tt : "Chưa tiếp nhận",
            color : "#6C2B5E"
        },
        {
            xl : "Xử lý 03",
            kv : "Hà Nội",
            tt : "Đang thực hiện",
            color :"#112C8B"
        },
        {
            xl : "Xử lý 03",
            kv : "Hà Nội",
            tt : "Quá Hạn",
            color : "#940B2C"
        },
        {
            xl : "Xử lý 03",
            kv : "Hà Nội",
            tt : "Đã Hoàn thành",
            color : "#D3D3D3"
        },
        {
            xl : "Xử lý 03",
            kv : "Hà Nội",
            tt : "Chưa tiếp nhận"
        },
        {
            xl : "Xử lý 03",
            kv : "Hà Nội",
            tt : "Chưa tiếp nhận"
        },
        {
            xl : "Xử lý 03",
            kv : "Hà Nội",
            tt : "Chưa tiếp nhận"
        }
    ]
    const renderItem = ({item}) => (
        <TouchableOpacity
        onPress={() => navigation.replace("detalword")}
        style={{ flexDirection: 'row' , padding : 10, marginTop: 20 , borderBottomColor : "rgba(0, 0, 0, 0.13)" , borderBottomWidth : 1 , backgroundColor :"#fff"  }}
    >
        <Text style={{ flex : 1 , fontSize : 14  , fontWeight :'bold' , color :'black'}}>
            {item.xl}
        </Text>
        <Text style={{flex : 1,marginStart : 10 , alignSelf :'center' , fontSize : 14  , fontWeight :'bold' , color :'#8C8D8E'}}>
           {item.kv}
        </Text>
        <Text style={{flex : 1 , marginStart : 10, fontSize : 14  , fontWeight :'bold' , color :item.color , alignSelf :'center'}}>
            {item.tt}
        </Text>
    </TouchableOpacity>
    )
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text="Danh sách công việc" onclick={() => {
                navigation.replace('trouble')
            }} />
            <SafeAreaView style={{ flex: 1, padding: 5 }}>
                <CustomTextInput placeholder={"Tìm kiếm công viêc"} img={require('../../../asset/img/seach.png')} />
                <View
                    style={{ flexDirection: 'row', marginTop: 10 }}
                >
                    <Text style={{marginStart : 10  , flex : 1 , fontSize : 14  , fontWeight :'bold' , color :'#8C8D8E'}}>
                        Mã số 
                    </Text>
                    <Text style={{flex : 1 , fontSize : 14  , fontWeight :'bold' , color :'#8C8D8E'}}>
                        Khu vực
                    </Text>
                    <Text style={{flex : 1 , fontSize : 14  , fontWeight :'bold' , color :'#8C8D8E' , alignSelf :'center'}}>
                        Trang thái
                    </Text>
                </View>
                <FlatList
                data={DATA} renderItem={renderItem}
                />
                

            </SafeAreaView>
        </SafeAreaView>
    )
}
export default ListWordScreen