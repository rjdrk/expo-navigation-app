import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { Stack, useNavigation, useRouter } from 'expo-router'

const StackLayout = () => {

    const navigation = useNavigation();
    const router = useRouter()

    const onHeaderLeftTap = (canGoback: boolean) => {
        if (canGoback) {
            router.back();
            return;
        }
        navigation.dispatch(DrawerActions.toggleDrawer)
    }

    return (
        <Stack
            screenOptions={{
                //headerShown: false,
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white'
                },
                headerLeft: ({ tintColor, canGoBack }) => (
                    <Ionicons
                        name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
                        size={20}
                        className='mr-5'
                        onPress={() => onHeaderLeftTap(canGoBack as boolean)}
                    />
                ),
            }}
        >
            <Stack.Screen
                name='home/index'
                options={{
                    title: 'Inicio'
                }}
            />
            <Stack.Screen
                name='products/index'
                options={{
                    title: 'Productos'
                }}
            />
            <Stack.Screen
                name='profile/index'
                options={{
                    title: 'Perfil'
                }}
            />
            <Stack.Screen
                name='settings/index'
                options={{
                    title: 'Ajustes'
                }}
            />
        </Stack>
    )
}

export default StackLayout