import { View, Text, FlatList } from 'react-native'
import React,{ useLayoutEffect } from 'react';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItems from '../components/MealItems';



const MealsOverViewScreen = ({ route, navigation }) => {

  const categIds = route.params.categoryIds;

  const displayMeal = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categIds) >= 0;
  })

  useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categIds).title;

      navigation.setOptions({
        title: categoryTitle
      })

  },[navigation, categIds])

  function renderselectedCategMeals(itemData) {
    
    const item = itemData.item;
    const MealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration
    }
    
    return <MealItems {...MealItemProps} />
  }

  return (
    <View>
      <FlatList
        data={displayMeal}
        renderItem={renderselectedCategMeals}
        keyExtractor={(item) => item.id} 
       />
    </View>
  )
}

export default MealsOverViewScreen