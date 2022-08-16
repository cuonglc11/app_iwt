import React from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, MapMarker, Polygon } from "react-native-maps";
import CustomTop from "../../../componet/CustomTop";
import { app_color } from "../../../contant/color";
const DetalInfoHome = ({ navigation }) => {
    const DATA = [
        { lat: 21.018175055284136, log: 105.81664787116411 },
        { lat: 21.018175055284136, log: 105.81755982221452 }

    ]
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text={"Chi tiết thông tin"} />
            <ScrollView>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{ height: 350, width: 400, alignSelf: 'center' }}
                    region={{
                        latitude: 21.022368959601263,
                        longitude: 105.81604557560343,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    <MapMarker
                        coordinate={{
                            latitude: 21.018175055284136,
                            longitude: 105.81664787116411
                        }}

                    >

                    </MapMarker>

                </MapView>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, margin: 10 }}>Thông tin</Text>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 18, flex: 1 }}>
                        Tuyến cáp : Sơn Trà 01
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.replace("routelist")
                        }}

                        style={{ flex: 1 }}>
                        <Text style={{ color: app_color, fontWeight: 'bold', fontSize: 18 }}>
                            Danh sách tuyến
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 18, flex: 1 }}>
                        Điểm Đầu : xxxxxx
                    </Text>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <Text style={{ fontSize: 18 }}>
                            Điểm Cuối : xxxxxx
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 18, flex: 1 }}>
                        Loại cáp: 96 F0
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 18, flex: 1 }}>
                        Kiểu Cáp: Cáp ngầm
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 18, flex: 1 }}>
                        Loại kết nối: AGG
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 18, flex: 1 }}>
                        Chiều dài tuyến: 450 m
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 18, flex: 1 }}>
                        Ngày Cấp Nhật: 14:30 - 29/12/2021
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 18, flex: 1 }}>
                        Lịch sử xử lý sự cố
                    </Text>
                    <TouchableOpacity
                     onPress={() => navigation.replace("troublehistory")}
                    style={{ flex: 1 }}>
                        <Text style={{ color: app_color, fontWeight: 'bold', fontSize: 18 }}>
                            Lịch sử xử lý sự cố

                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}
                
                >
                    <Text style={{ fontSize: 18, flex: 1 }}>
                        Lịch sử bảo trì
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.replace('maintenancehistory')}


                        style={{ flex: 1 }}>
                        <Text style={{ color: app_color, fontWeight: 'bold', fontSize: 18 }}>
                            Lịch sử bảo trì
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 20 }}>
                    <TouchableOpacity
                        onPress={() => navigation.replace('suceesshome')}
                        style={{ flex: 1, backgroundColor: "#fff", padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../../asset/img/writing.png')} style={{ tintColor: app_color, height: 20, width: 20 }} />
                        <Text style={{ color: app_color, fontSize: 12, fontWeight: 'bold', marginStart: 10 }}>Tiếp nhận</Text>
                    </TouchableOpacity>
                    <TouchableOpacity

                        onPress={() => {
                            navigation.replace("routelist")
                        }}
                        style={{ flex: 1, backgroundColor: "#fff", marginStart: 10, padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../../asset/img/writing.png')} style={{ tintColor: app_color, height: 20, width: 20 }} />
                        <Text style={{ color: app_color, fontSize: 12, fontWeight: 'bold', marginStart: 10 }}>Danh sách tuyến</Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default DetalInfoHome