import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from "./pages/Categories";
import Meals from "./pages/Meals";
import Details from "./pages/Details";



const Stack = createNativeStackNavigator()

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleStyle: {
                        color: "orange"
                    },
                    headerTitleAlign: "center",
                    statusBarColor: "white",
                    headerTintColor: "orange"
                }}
            >
                <Stack.Screen name="CategoriesPage" component={Categories} options={{ headerTitle: "Categories" }} />
                <Stack.Screen name="MealsPage" component={Meals} options={{ headerTitle: "Meals" }} />
                <Stack.Screen name="DetailsPage" component={Details} options={{ headerTitle: "Details" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router