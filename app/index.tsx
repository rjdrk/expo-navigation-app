import { Link, Redirect } from 'expo-router'
import { View, Text, Appearance, SafeAreaView } from 'react-native'
const App = () => {
    Appearance.setColorScheme('light')

    //return <Redirect href="/home" />
    //return <Redirect href="/tabs" />
    return <Redirect href="/home" />

    /*    
    return (
        <SafeAreaView>
            <View className='mt-6 mx-2.5'>
                <Text className='text-5xl ' style={{ fontFamily: 'WorkSans-Black' }}>Hola Mundo</Text>
                <Text className='text-4xl font-work-black text-primary'>Hola Mundo</Text>
                <Text className='text-3xl font-work-medium text-secondary'>Hola Mundo</Text>
                <Text className='text-2xl font-work-medium text-secondary-100'>Hola Mundo</Text>
                <Text className='text-1xl text-tectiary'>Hola Mundo</Text>
                <Link href={'/products'}>Productos</Link>
            </View>
        </SafeAreaView>
    )
    */
}

export default App