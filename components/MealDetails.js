import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MealDetails = ({affordability, complexity, duration }) => {
    return (

        <View style={styles.details}>
            <Text style={styles.detailedItem}>{duration}</Text>
            <Text style={styles.detailedItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailedItem}>{affordability.toUpperCase()}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    details:{
        flexDirection:'row',
        padding:7,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:5
    },
    detailedItem:{
        fontSize:15,
        paddingHorizontal:4,
        color:'#1d3557'
    },
    pressedButton:{
        opacity: 0.5
    }
})

export default MealDetails