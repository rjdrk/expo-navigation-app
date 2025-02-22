import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { products } from '@/store/products.store'
import { Link } from 'expo-router'

const ProductsScreen = () => {
    return (
        <View className='flex flex-1 px-4'>
            <FlatList
                keyExtractor={(item) => item.id}
                data={products}
                renderItem={({ item }) => (
                    <View className='mt-10'>
                        <Text className='text-2xl font-work-black'>{item.title}</Text>
                        <Text>{item.description}</Text>
                        <View className='flex flex-row justify-between mt-2'>
                            <Text className='font-work-black'>{item.price}</Text>
                            <Link className='font-work-black' href={`/products/${item.id}`}>
                                Ver Detalles
                            </Link>
                        </View>
                    </View>
                )
                }
            />
        </View >
    )
}

export default ProductsScreen