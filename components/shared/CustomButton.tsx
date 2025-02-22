import { Text, Pressable, PressableProps, StyleSheet, Button } from 'react-native'
import React from 'react'

interface Props extends PressableProps {
    children: string;
    color?: 'primary' | 'secondary' | 'tertiary'
    variant?: 'contained' | 'text-only',
    className?: string
}

const CustomButton = React.forwardRef(({
    children,
    color = 'primary',
    variant = 'contained',
    className,
    onPress,
    onLongPress
}: Props,
    ref: React.Ref<View>) => {

    const btnColor = {
        primary: '#49129C',
        secondary: '#B40086',
        tertiary: '#EF2967',
    }[color];

    if (variant === 'text-only') {
        return (
            <Pressable
                className={`${className}`}
                style={styles.buttonTextOnly}
                onPress={onPress}
                onLongPress={onLongPress}
                ref={ref}
            >
                <Text style={{ color: btnColor }}>{children}</Text>
            </Pressable>
        )
    }
    return (
        <Pressable
            className={`${className}`}
            style={[styles.buttonContained, { backgroundColor: btnColor, }]}
            onPress={onPress}
            onLongPress={onLongPress}
            ref={ref}
        >
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    )
}
);

export default CustomButton

const styles = StyleSheet.create({
    buttonContained: {
        padding: 5,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonTextOnly: {
        padding: 5,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: '#FFFFFF'
    }
})