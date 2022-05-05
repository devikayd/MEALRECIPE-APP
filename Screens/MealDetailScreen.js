import { View, Image, Text, StyleSheet } from 'react-native'
import React, {useLayoutEffect} from 'react'

import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails';
import { ScrollView } from 'react-native';
import Favourites from '../components/Favourites';
import IconButton from '../components/IconButton';

const MealDetailScreen = ({ route , navigation}) => {

  const mealId = route.params.mealId;

  const selectedMealItem = MEALS.find((meal) => meal.id === mealId);

  function onPressIconHandler(){
    console.log('pressed' )
    
  }
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="white"
            onPress={onPressIconHandler}
          />
        );
      },
    });
  }, [navigation, onPressIconHandler]);

  return (
    <ScrollView>
      <View  style={styles.component}>
        <View >
        <Image source={{ uri: selectedMealItem.imageUrl }} style={styles.image} />
        </View>
        <Text style={styles.itemTitle}>{selectedMealItem.title.toUpperCase()}</Text>
        <MealDetails duration={selectedMealItem.duration} affordability={selectedMealItem.affordability}
          complexity={selectedMealItem.complexity} />
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}> Ingredients </Text>
          {selectedMealItem.ingredients.map((ingredient) => (
            <Text key={ingredient} style={styles.listing}> {ingredient}</Text>
          ))}
          <Text style={styles.subtitle}>Steps</Text>
          {selectedMealItem.steps.map((step) => (
            <Text key={step} style={styles.listing2} > {step} </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  component: {
    margin: 5,
    marginBottom: 32
    },
  itemTitle: {
    paddingTop: 9,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000'
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 15,
    borderRadius: 7,
  },
  subtitleContainer: {
    justifyContent:'center',
    alignContent:'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  subtitle: {
    paddingTop:8,
    margin:10,
    borderRadius:8,
    fontSize: 18,
    justifyContent: 'center',
    textAlign: 'center',
    height:45,
    backgroundColor:'#5a189a',
    color:'white'

  },
  listing: {
    paddingTop:20,
    textAlign:'center',
    borderRadius:8,
    margin: 10,
    height:68,
    backgroundColor:'#e0aaff',
    fontSize:14

  },
  listing2:{
    alignContent:'space-between',
    paddingTop:10,
    textAlign:'center',
    borderRadius:8,
    margin: 10,
    minHeight:70,
    maxHeight:100,
    backgroundColor:'#e0aaff',
    fontSize:14
  }
})

export default MealDetailScreen