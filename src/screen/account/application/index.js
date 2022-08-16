import React from "react";
import { SafeAreaView, Text } from 'react-native'
import CustomTop from "../../../componet/CustomTop";
const ApplicationScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text={"Cài đặt ứng dụng"}
                onclick={() => {
                    navigation.replace('acount_home')
                }}
            />
        </SafeAreaView>
    )
}
export default ApplicationScreen