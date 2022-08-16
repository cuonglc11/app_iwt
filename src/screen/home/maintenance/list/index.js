import React from "react";
import { SafeAreaView, Text, View , FlatList , TouchableOpacity  ,Image} from 'react-native'
import CustomTop from "../../../../componet/CustomTop";
import CustomTextInput from "../../../../componet/CustomInput";
const ListMaintenanceScreen   = ({navigation}) => {
    const DATA = [
        {
            xl : "Bảo trì 03",
            kv : "Hà Nội",
            tt : "Chưa tiếp nhận",
            color : "#6C2B5E"
        },
        {
            xl : "Bảo trì 03",
            kv : "Hà Nội",
            tt : "Đang thực hiện",
            color :"#112C8B"
        },
        {
            xl : "Bảo trì 03",
            kv : "Hà Nội",
            tt : "Quá Hạn",
            color : "#940B2C"
        },
        {
            xl : "Bảo trì 03",
            kv : "Hà Nội",
            tt : "Đã Hoàn thành",
            color : "#D3D3D3"
        },
        {
            xl : "Bảo trì 03",
            kv : "Hà Nội",
            tt : "Chưa tiếp nhận"
        },
        {
            xl : "Bảo trì 03",
            kv : "Hà Nội",
            tt : "Chưa tiếp nhận"
        },
        {
            xl : "Bảo trì 03",
            kv : "Hà Nội",
            tt : "Chưa tiếp nhận"
        }
    ]
    const fooderView = () => {
        return (
            <View style={{flexDirection :'row' , padding : 10}}>
                <Text style={{fontSize : 16 , color:"black" , fontWeight :'bold'}}>Tổng  : 1000000000000</Text>
                <TouchableOpacity
                 onPress={()=> {
                    navigation.replace("routelist")
                 }}
                style={{ flex: 1, marginStart: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../../../asset/img/writing.png')} style={{ tintColor: app_color, height: 20, width: 20 }} />
                    <Text style={{ color: app_color, fontSize: 12, fontWeight: 'bold', marginStart: 10 }}>Kết xuất báo cáo</Text>

                </TouchableOpacity>
            </View>
        )
    }
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
        <SafeAreaView style={{flex : 1}}>
            <CustomTop text={"Danh sách bảo trì"} onclick={() => {
                navigation.replace('maintenance')
            }}/>
            <SafeAreaView style={{ flex: 1, padding: 5 }}>
                <CustomTextInput placeholder={"Tìm kiếm công viêc"} img={require('../../../../asset/img/seach.png')} />
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
                data={DATA} renderItem={renderItem} ListFooterComponent={fooderView}
                />
                

            </SafeAreaView>
        </SafeAreaView>
    )
}
export default ListMaintenanceScreen