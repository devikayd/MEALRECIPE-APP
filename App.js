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
    headerStyle: { backgroundColor: '#351401' },
    headerTintColor: 'white',
    sceneContainerStyle: { backgroundColor: '#3f2f25' },
    drawerContentStyle: { backgroundColor: '#351401' },
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#351401',
    drawerActiveBackgroundColor: '#e4baa1',
  }}>
    <Drawer.Screen name="Categories" component={CategoryScreen}
      options={{
        title: 'All Categories',
        drawerIcon: ({color, size}) => (
          <Ionicons name="list" color={color} size={size} />
        ),
      }} />
    <Drawer.Screen name='Favourites' component={Favourites} 
    option={{
      title: 'Favourites',
      drawerIcon: (color, size) => (
        <Ionicons name="star" color={color} size={size} />
      ),
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
              backgroundColor: '#593d3b',
            },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#8a7968' }
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


