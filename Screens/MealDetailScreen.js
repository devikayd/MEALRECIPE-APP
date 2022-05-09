import { View, Image, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useContext } from 'react'

import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails';
import { ScrollView } from 'react-native';
import IconButton from '../components/IconButton';
import { FavouriteContext } from '../store/FavouriteContextProvider';
import { borderTopColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const MealDetailScreen = ({ route, navigation }) => {

  const favouriteMealContext = useContext(FavouriteContext);

  const mealId = route.params.mealId;
  const selectedMealItem = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavourite = favouriteMealContext.ids.includes(mealId)

  function favouriteHandler() {

    if (mealIsFavourite) {

      favouriteMealContext.removeFavourite(mealId);
    }
    else {
      favouriteMealContext.addFavourite(mealId);
    }

  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? 'star' : 'star-outline'}
            color="white"
            onPress={favouriteHandler}
          />
        );
      },
    });
  }, [navigation, favouriteHandler]);

  return (
    <ScrollView>
      <View style={styles.component}>
        <View >
          <Image source={{ uri: selectedMealItem.imageUrl }} style={styles.image} />
        </View>
        <Text style={styles.itemTitle}>{selectedMealItem.title.toUpperCase()}</Text>
        <MealDetails duration={selectedMealItem.duration} affordability={selectedMealItem.affordability}
          complexity={selectedMealItem.complexity} />
        <View style={styles.subtitleContainer}>
          <View style={styles.hline} />
          <Text style={styles.subtitle}> Ingredients </Text>
          <View style={styles.hline} />
          {selectedMealItem.ingredients.map((ingredient) => (
            <Text key={ingredient} style={styles.listing}> {ingredient}</Text>
          ))}
          <View style={styles.hline} />
          <Text style={styles.subtitle}>Steps</Text>
          <View style={styles.hline} />
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
    marginBottom: 32
  },
  itemTitle: {
    paddingTop: 9,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1d3557'
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 15,
  },
  subtitleContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  subtitle: {
    margin: 10,
    padding:14,
    borderRadius: 4,
    fontSize: 18,
    justifyContent: 'center',
    textAlign: 'center',
    height: 59,
    backgroundColor: '#457b9d',
    color: 'white',

  },
  listing: {
    paddingTop: 20,
    textAlign: 'center',
    borderRadius: 4,
    margin: 10,
    height: 68,
    backgroundColor: '#a8dadc',
    fontSize: 14

  },
  listing2: {
    alignContent: 'space-between',
    paddingTop: 10,
    textAlign: 'center',
    borderRadius: 4,
    margin: 10,
    minHeight: 70,
    maxHeight: 100,
    backgroundColor: '#a8dadc',
    fontSize: 14
  },
  hline: {
    borderBottomColor: '#e76f51',
    borderBottomWidth: 4,
    borderRadius: 4,
    margin: 10,
    marginTop: 10,
    marginBottom: 10
  }
})

export default MealDetailScreen