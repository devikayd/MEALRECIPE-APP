import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Platform } from 'react-native';

const CategoryGrid = ({ title, color, onPress }) => {

    return (
        <View style={styles.gridContainer}>
            <Pressable android_ripple={{ color: '#ccc' }} onPress={onPress}
                style={({ pressed }) => 
                [styles.presButton, pressed ? styles.presButtonPressed : null]}>
                <View style={[styles.insideContainer,{ backgroundColor:color}]}>
                    <Text style={styles.title}> {title} </Text>
                </View>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    gridContainer: {
        flex: 1,
        margin: 15,
        height: 180,
        borderRadius: 10,
        elevation: 4,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        },
    presButton: {
        flex: 1
    },
    presButtonPressed:{
        opacity: 0.5,
    },
    insideContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default CategoryGrid