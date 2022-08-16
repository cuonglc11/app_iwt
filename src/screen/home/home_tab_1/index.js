import React from "react";
import { Text, SafeAreaView, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import CustomTextInput from "../../../componet/CustomInput";
import { app_color } from "../../../contant/color";
const HomeTab1 = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ backgroundColor: app_color }}>
                <View style={{ flexDirection: 'row', flex: 2, margin: 20 }}>
                    <Image source={require('../../../asset/img/user_cn.png')} style={{ height: 90, width: 90 }} />
                    <View style={{ flexDirection: 'column', marginTop: 10, marginStart: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Lù Mạnh Cường</Text>
                            <Image source={require('../../../asset/img/medal.png')} style={{ height: 30, width: 30, marginStart: 10 }} />
                        </View>
                        <Text style={{ color: '#fff', fontSize: 18, marginTop: 6 }}>MSNV: 123321</Text>
                    </View>
                </View>
                <Text style={{ flex: 3, color: '#fff', fontWeight: 'bold', fontSize: 30, marginTop: 10, marginStart: 20, marginBottom: 50 }}>QLKV: P Thọ Quang</Text>
                <View style={{ width: '100%', height: 350, backgroundColor: "#fff", borderTopLeftRadius: 20 , borderTopEndRadius : 20 }}>
                    <View style={{flexDirection:'row' , marginTop : 120}}>
                    <TouchableOpacity
                                onPress={() => navigation.replace('trouble')}
                                style={{ marginStart: 20, justifyContent: 'center', alignItems: 'center' , flex : 1}}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', borderColor: "#D3D3D3", borderWidth: 2, borderRadius: 10 }} >
                                    <Image source={require('../../../asset/img/scan.png')} style={{ height: 30, width: 30 }} />
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Xử lý sự cố</Text>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }} >cáp quang</Text>

                                </View>

                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.replace('maintenance')}
                                style={{flex : 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', borderColor: "#D3D3D3", borderWidth: 2, borderRadius: 10 }} >
                                    <Image source={require('../../../asset/img/right-arrow.png')} style={{ height: 30, width: 30 }} />
                                </View>
                                <View style={{ flexDirection: 'column' , justifyContent :'center' , alignItems :'center' }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Bảo trì</Text>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }} >bảo dưỡng</Text>

                                </View>

                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.replace('suppliesindex')}
                                style={{ flex : 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', borderColor: "#D3D3D3", borderWidth: 2, borderRadius: 10 }} >
                                    <Image source={require('../../../asset/img/warehouse.png')} style={{ height: 30, width: 30 }} />
                                </View>
                                <View style={{ flexDirection: 'column' , justifyContent :'center' , alignItems :'center' }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Quản lý kho</Text>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }} ></Text>

                                </View>

                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.replace('trouble')}
                                style={{flex : 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', borderColor: "#D3D3D3", borderWidth: 2, borderRadius: 10 }} >
                                    <Image source={require('../../../asset/img/warehouse.png')} style={{ height: 30, width: 30 }} />
                                </View>
                                <View style={{ flexDirection: 'column' , justifyContent :'center' , alignItems :'center' }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Quản lý</Text>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }} >Văn Bản</Text>

                                </View>

                            </TouchableOpacity>
                    </View>
                    <View style={{padding : 10 , marginTop : 20}}>
                    <CustomTextInput placeholder={"Tìm kiếm thông tin"}/>
                      
                    </View>
                </View>
                <View style={{width :'100%' , height :123 , backgroundColor :"#E2E2E2" }}>
                    <View style={{backgroundColor :"#fff" ,  marginTop : 10 , padding : 10}}>
                        <Text style={{color :'black' , fontWeight :'bold' , fontSize : 20}}>Thông tin - tin tức</Text>

                    </View>
                </View>
                <View style={{ height: 100, width: 350, backgroundColor: "#fff" , borderRadius : 20 , flexDirection :'row' , alignSelf: 'center', top: 195 , position: "absolute", borderColor: "rgba(0, 0, 0, 0.1)", borderWidth: 3 }}>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', flex : 1}}>
                        <Image source={require('../../../asset/img/writing.png')} style={{ height: 30, width: 30, marginTop: 12, marginStart: 5, tintColor: app_color }} />

                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}>
                            <Text style={{ color: app_color, fontSize: 10 }}>Tạo mới </Text>
                            <Text style={{ color: app_color, fontSize: 10 }}>yêu cầu</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' , flex : 1 }}>
                        <Image source={require('../../../asset/img/exchange.png')} style={{ height: 30, width: 30, marginTop: 12, marginStart: 5, tintColor: app_color }} />

                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: app_color, fontSize: 10 }}>Quản lý  </Text>
                            <Text style={{ color: app_color, fontSize: 10 }}>thông tin tuyến</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' , flex : 1 }}>
                        <Image source={require('../../../asset/img/clipboard.png')} style={{ height: 30, width: 30, marginTop: 12, marginStart: 5, tintColor: app_color }} />

                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: app_color, fontSize: 10 }}>Báo Cáo</Text>
                            <Text style={{ color: app_color, fontSize: 10 }}></Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' , flex : 1 }}>
                        <Image source={require('../../../asset/img/settings.png')} style={{ height: 30, width: 30, marginTop: 12, marginStart: 5, tintColor: app_color }} />

                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: app_color, fontSize: 10 }}>Quản trị</Text>
                            <Text style={{ color: app_color, fontSize: 10 }}></Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>

    )
}
export default HomeTab1