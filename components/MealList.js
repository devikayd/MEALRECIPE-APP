import { View, FlatList } from 'react-native'
import React from 'react'
import MealItems from './MealItems';

const MealList = ({items}) => {
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
            data={items}
            renderItem={renderselectedCategMeals}
            keyExtractor={(item) => item.id} 
           />
        </View>
      )

}

export default MealList