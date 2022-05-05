import { FlatList, StyleSheet } from 'react-native';

import CategoryGrid from '../components/CategoryGrid';
import { CATEGORIES } from '../data/dummy-data';

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function navOnPressHandler() {
      return (
        navigation.navigate('MealsOverView', {categoryIds : itemData.item.id})
      )
    }

    return (
      <CategoryGrid title={itemData.item.title} color={itemData.item.color} onPress={navOnPressHandler} />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;