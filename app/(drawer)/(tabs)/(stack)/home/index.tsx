import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, router, useNavigation } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();

    const onToggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer)
    }

    return (
        <SafeAreaView>
            <View className='px-10 mt-5'>

                <CustomButton
                    className="mb-2 active:opacity-90"
                    color='primary'
                    onPress={() => router.push('/products')}
                >
                    Productos
                </CustomButton >
                <CustomButton
                    className="mb-2 active:opacity-90"
                    color='secondary'
                    onPress={() => router.push('/profile')}
                >
                    Perfil
                </CustomButton >
                <CustomButton
                    className="mb-2 active:opacity-90"
                    color='tertiary'
                    onPress={() => router.push('/settings')}
                >
                    Ajustes
                </CustomButton >
                <Link href='/products' asChild>
                    <CustomButton
                        className="mb-10 active:opacity-90"
                        color='primary'
                        variant='text-only'
                    >
                        Productos
                    </CustomButton >
                </Link>
                <CustomButton
                    onPress={onToggleDrawer}
                >
                    Abrir Menú
                </CustomButton >
                {/*    
                <Link className='px-10' href="/products">
                    Productos{' '}
                </Link>
                <Link className='px-10' href="/profile">
                    Perfil{' '}
                </Link>
                <Link className='px-10' href="/settings">
                    Ajustes{' '}
                </Link>
                */}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen