import React,{useContext} from 'react'
import { FavouriteContext } from '../store/FavouriteContextProvider'
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const Favourites = () => {

  const favouriteMeals = useContext(FavouriteContext);

  const favouriteItems = MEALS.filter((meal) => favouriteMeals.ids.includes(meal.id))

  return (
   <MealList items={favouriteItems} />
  )
}

export default Favourites 