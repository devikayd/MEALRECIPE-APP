import { View, Text, FlatList } from 'react-native'
import React,{ useLayoutEffect } from 'react';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList'


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

  
return <MealList items={displayMeal} />
  
}

export default MealsOverViewScreen