import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import HomeScreen from '../screens/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import VectorIcon from '../utils/VectorIcon'
import ProfileScreen from '../screens/ProfileScreen'
import CartScreen from '../screens/CartScreen'
import ProductInfoAcreen from '../screens/ProductInfoAcreen'

const StackNavigator = () => {
    const  Stack = createNativeStackNavigator()
    const Tab = createBottomTabNavigator()
    const BottomTabs = () => {
        return(
            <Tab.Navigator>
                <Tab.Screen 
                    name='Home'
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarLabelStyle: {color: "#008E97"},
                        headerShown: false,
                        tabBarIcon:({focused}) => 
                        focused  ? (
                            <VectorIcon type='Entypo' name="home" size={24} color="#008E97" />
                        ) : (
                            <VectorIcon type='AntDesign' name="home" size={24} color="black" />
                        )
                    }}
                />

                 <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: "Profile",
                        tabBarLabelStyle: { color: "#008E97" },
                        tabBarIcon: ({ focused }) =>
                        focused ? (
                            <VectorIcon type='Ionicons' name="ios-person" size={24} color="#008E97" />
                        ) : (
                            <VectorIcon type='Ionicons' name="person-outline" size={24} color="black" />
                        ),
                    }}
                    />

                    <Tab.Screen
                    name="Cart"
                    component={CartScreen}
                    options={{
                        tabBarLabel: "Cart",
                        tabBarLabelStyle: { color: "#008E97" },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                        focused ? (
                            <VectorIcon type='AntDesign' name="shoppingcart" size={24} color="#008E97" />
                        ) : (
                            <VectorIcon type='AntDesign' name="shoppingcart" size={24} color="black" />
                        ),
                    }}
                    />
            </Tab.Navigator>
        )
    }
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Main' component={BottomTabs} options={{headerShown: false}}/>
      <Stack.Screen name='Info' component={ProductInfoAcreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default StackNavigator