import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoryScreen from "./Screens/CategoryScreen";
import MealsOverViewScreen from "./Screens/MealsOverViewScreen.js";
import MealDetailScreen from "./Screens/MealDetailScreen";
import Favourites from './Screens/Favourites'
import FavouriteContextProvider from "./store/FavouriteContextProvider";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


const DrawerOption = () => {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#f58c62' },
    headerTintColor: 'white',
    sceneContainerStyle: { backgroundColor: '#f1faee' },
    drawerContentStyle: { backgroundColor: '#f1faee' },
    drawerInactiveTintColor: 'black',
    drawerActiveTintColor: '#351401',
    drawerActiveBackgroundColor: '#f58c62',
    headerTitleAlign: 'center',
    drawerLabelStyle: {
      marginTop: 5,
      marginLeft: 4
    }
  }}>
    <Drawer.Screen name="Categories" component={CategoryScreen}
      options={{
        title: 'All Categories',
      }} />
    <Drawer.Screen name='Favourites' component={Favourites}
      option={{
        title: 'Favourites',
      }} />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavouriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="All Categories"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#f58c62',
              },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#f1faee' },
              headerTitleAlign: 'center'
            }}>
            <Stack.Screen name='draweroptions' component={DrawerOption}
              options={{ headerShown: false }} />

            <Stack.Screen name="AllCategories" component={CategoryScreen}
              options={{
                title: "HOME",
              }} />
            <Stack.Screen name="MealsOverView" component={MealsOverViewScreen}
              options={{
                title: "MEALS RECIPE",

              }} />
            <Stack.Screen name="MealIemDetailed" component={MealDetailScreen}
              options={{
                title: " RECIPE"
              }} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouriteContextProvider>
    </>
  )
}


