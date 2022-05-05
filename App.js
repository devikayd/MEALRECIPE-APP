import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import CategoryScreen from "./Screens/CategoryScreen";
import MealsOverViewScreen from "./Screens/MealsOverViewScreen.js";
import MealDetailScreen from "./Screens/MealDetailScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="All Categories"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#593d3b'
            },
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#8a7968' }
          }}>
          <Stack.Screen name="AllCategories" component={CategoryScreen}
            options={{
              title: "HOME",
            }} />
          <Stack.Screen name="MealsOverView" component={MealsOverViewScreen}
            options={{
              title: "MEALS RECIPE",
            }} />
          <Stack.Screen name="MealIemDetailed" component={MealDetailScreen} options={{title:" RECIPE"}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}


