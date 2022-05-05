import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MealDetails from './MealDetails';

const MealItems = ({ id, title, imageUrl, affordability, complexity, duration }) => {
  
    const navigation = useNavigation();

    function mealItemDetailHandler(){
        navigation.navigate('MealIemDetailed', { mealId: id })
    }

    return (
        <View style={styles.container}>
            <Pressable android_ripple={{color:'#ccc'}} 
                style={({pressed}) => { pressed ? styles.pressedButton : null}}
                 onPress={mealItemDetailHandler} >
               <View  style={styles.insideContainer}>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.itemTitle}>{title.toUpperCase()}</Text> 
                </View>
                <MealDetails affordability={affordability} complexity={complexity} duration={duration} />
                </View>

            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        margin: 16,
        backgroundColor: 'white',
        elevation: 4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    insideContainer: {
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 379,
        height: 250,
    },
    itemTitle:{
        paddingTop:9,
        textAlign:'center',
        fontSize:15,
        fontWeight:'bold',
        color:'#6f5e53'
    },
    
})

export default MealItems