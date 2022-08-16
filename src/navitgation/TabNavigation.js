import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Accout, ConversationScreen, HomeScreen } from "../screen";
import {Text , View , Image} from 'react-native'
import { app_color } from "../contant/color";
import Nontification from "../screen/notification";
const TabNavigation = () => {
    const Tabs = createBottomTabNavigator()
    return (
        <Tabs.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: app_color,
                    height: 70
                },
                headerTitleStyle: {
                    color: '#fff',
                    fontSize: 24,
                    fontWeight: 'bold'

                },
                headerShown : false,
                headerTitleAlign: 'center',
                tabBarStyle: { backgroundColor: "#fff", height: 70, padding: 10, paddingVertical: 10  },

            }}
            tabBarOptions={{
              showLabel  : false,
          
            }}

        >
            <Tabs.Screen component={HomeScreen}
             options={{
                tabBarIcon : ({focused})  => (
                    <View style={{
                        alignItems :'center' ,
                        justifyContent :'center'
                    }}>

                        <Image
                          source={require('..//asset/img/icon_home.png')}
                          resizeMode="contain"
                          style={{
                            width : 25  ,
                            height :  25  ,
                            tintColor : focused ? app_color : 'black'
                          }}
                        />

                    <Text style={{color : focused ? app_color :'black' , fontSize : 12}}>Trang Chủ </Text>

                    </View>

                )
             }}
            
            name="HomeTab" />
              <Tabs.Screen component={ConversationScreen}
             options={{
                tabBarIcon : ({focused})  => (
                    <View style={{
                        alignItems :'center' ,
                        justifyContent :'center',
                    }}>

                        <Image
                          source={require('..//asset/img/open.png')}
                          resizeMode="contain"
                          style={{
                            width : 25  ,
                            height :  25  ,
                            tintColor : focused ? app_color : 'black'
                          }}
                        />
                    <Text style={{color : focused ? app_color :'black', fontSize : 12}}>Trò chuyện </Text>
                    </View>

                )
             }}
            name="Trò Chuyện" />
                 <Tabs.Screen component={HomeScreen}
             options={{
                tabBarIcon : ({focused})  => (
                    <View style={{
                        alignItems :'center' ,
                        justifyContent :'center' ,
                        backgroundColor : app_color ,
                        height : 50 ,
                        width : 50 ,
                        marginBottom : 10,
                        borderRadius : 30
                    }}>

                        {/* <Image
                          source={require('..//asset/img/qr.png')}
                          resizeMode="contain"
                          style={{
                            width : 30  ,
                            height :  30  ,
                            tintColor : focused ? app_color : '#fff'
                          }}
                        /> */}
                    </View>

                )
             }}
            name="qr" />
    <Tabs.Screen component={Nontification}
             options={{
                tabBarIcon : ({focused})  => (
                    <View style={{
                        alignItems :'center' ,
                        justifyContent :'center'
                    }}>

                        <Image
                          source={require('..//asset/img/ic_bell.png')}
                          resizeMode="contain"
                          style={{
                            width : 25  ,
                            height :  25  ,
                            tintColor : focused ? app_color : 'black'
                          }}
                        />
                    <Text style={{color : focused ? app_color :'black', fontSize : 12}}>Thông báo </Text>
                    </View>

                )
             }}
            name="Thông Báo" />
                <Tabs.Screen component={Accout}
             options={{
                tabBarIcon : ({focused})  => (
                    <View style={{
                        alignItems :'center' ,
                        justifyContent :'center'
                    }}>

                        <Image
                          source={require('..//asset/img/user.png')}
                          resizeMode="contain"
                          style={{
                            width : 25  ,
                            height :  25  ,
                            tintColor : focused ? app_color : 'black'
                          }}
                        />
                    <Text style={{color : focused ? app_color :'black', fontSize : 12}}> Tài khoản </Text>
                    </View>

                )
             }}
            name="Tài Khoản" />
        </Tabs.Navigator>
    )
}
export default TabNavigation