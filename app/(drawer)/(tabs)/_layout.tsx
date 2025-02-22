import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'indigo',
                tabBarStyle: {
                    backgroundColor: 'black'
                },
                tabBarActiveBackgroundColor: 'red',
                headerShadowVisible: false,
                sceneStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Tabs.Screen
                name="(stack)"
                options={{
                    title: 'Stack',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="person-add-outline" color={color} />,
                }}
            />
            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
                }}
            />
            <Tabs.Screen
                name="favorites/index"
                options={{
                    title: 'Favoritos',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
                }}
            />
        </Tabs>
    )
}

export default TabsLayout