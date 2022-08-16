import React from "react";
// import  {Sa} from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeAccount from "./home";
import EditAccout from "./edit";
import ApplicationScreen from "./application";
const Accout = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{

            headerShown: false
        }}>
            <Stack.Screen name="acount_home" component={HomeAccount} />
            <Stack.Screen name="editaccout" component={EditAccout} />
            <Stack.Screen name="application" component={ApplicationScreen} />
        </Stack.Navigator>
    )
}
export default Accout