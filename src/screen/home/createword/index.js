import React, { useState } from "react";
import { Text, SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native';
import CustomTextInput from "../../../componet/CustomInput";
import CustomTop from "../../../componet/CustomTop";
import { app_color } from "../../../contant/color";
import SelectList from 'react-native-dropdown-select-list'

const CreateWordScreen = ({ navigation }) => {
    const [selected, setSelected] = useState("")
    const datas = [
        { key: 1, value: 'manh cuong' },
        { key: 2, value: 'Hoàng' },
        { key: 3, value: 'Thắng' }


    ]

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text="Tạo công việc" onclick={() => {
                navigation.replace('trouble')
            }} />
            <ScrollView>
                <View style={{
                    margin: 20,
                    alignSelf: 'center',
                    backgroundColor: '#D3D3D3',
                    width: '94%',
                    height: 50,
                    borderColor: 'rgba(0, 0, 0, 0.13)',
                    flexDirection: 'row',
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 10,
                }}>
                    <Text style={{ color: 'black', fontSize: 18, marginStart: 18, fontWeight: 'bold' }}> Mã CV :  01345673255</Text>
                </View>
                <Text style={{ color: 'black', fontSize: 18, margin: 10, fontWeight: 'bold' }}>
                    Tuyến Cáp
                </Text>
                <View style={{ marginStart: 5, marginEnd: 5 }}>
                    <CustomTextInput placeholder={"Chọn tuyến"} />
                </View>
                <Text style={{ color: 'black', fontSize: 18, margin: 10, fontWeight: 'bold' }}>
                    Nhân viên kỹ thuật
                </Text>
                <View style={{ marginStart: 5, marginEnd: 5 }}>
                <SelectList data={datas} setSelected={setSelected}
                    boxStyles={{
                        backgroundColor : 'white',
                        width : '100%' ,
                        marginTop : 10,
                        borderColor : 'rgba(0, 0, 0, 0.13)',
                        flexDirection :'row',
                        borderWidth : 1  ,
                        borderRadius : 20,
                    }}
                    placeholder="Nhân viên kỹ thuật"

                />


                </View>
                <Text style={{ color: 'black', fontSize: 18, margin: 10, fontWeight: 'bold' }}>
                    Thời gian yêu cầu
                </Text>
                <View style={{ marginStart: 5, marginEnd: 5 }}>

                    <CustomTextInput placeholder={"Chọn thời gian"} />
                </View>

                <Text style={{ color: 'black', fontSize: 18, margin: 10, fontWeight: 'bold' }}>
                    Nội dung
                </Text>
                <View style={{ marginStart: 5, marginEnd: 5 }}>

                    <CustomTextInput placeholder={"Nhập nôi dung(0/50)"} line={10} />
                </View>
                <Text style={{ color: 'black', fontSize: 18, margin: 10, fontWeight: 'bold' }}>
                    File đính kèm
                </Text>
                <View style={{
                    backgroundColor: '#fff',
                    width: '98%',
                    height: 50,
                    marginTop: 10,
                    borderColor: '#fff',
                    flexDirection: 'row',
                    borderWidth: 1,
                    padding: 10,
                    marginBottom: 10,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ color: app_color, fontSize: 18, fontWeight: 'bold' }}> Chọn ảnh</Text>
                </View>
                <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <TouchableOpacity
                        onPress={() => navigation.replace('request')}
                        style={{ marginStart: 5, marginVertical: 10, backgroundColor: app_color, width: 200, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }} > Xác nhận </Text>
                    </TouchableOpacity>

                </View>
                <View style={{ marginTop: 10, marginBottom: 10, padding: 10 }}>
                    <Text>(Lưu ý : Thời gian bắt đầu sự cố  : xxxxxxx)</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default CreateWordScreen