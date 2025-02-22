import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomeDrawer = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView
            {...props}
            scrollEnabled={false}
        >
            <View style={styles.screen}>
                <View style={styles.container}>
                    <View style={styles.avatar}>
                        <Text style={styles.text}>RJ</Text>
                    </View>
                </View>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export default CustomeDrawer

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    container: {
        width: 300,
        height: 150,
        backgroundColor: '#49129C',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

    },
    avatar: {
        width: 96,
        height: 96,
        backgroundColor: 'white',
        borderRadius: 46,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#4B0082',
        fontSize: 30,
        fontFamily: 'WorkSans-Black',
        fontWeight: 'bold',
    },
})