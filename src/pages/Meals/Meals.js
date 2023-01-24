import axios from "axios"
import React, { useEffect, useState } from "react"
import { View, Text, FlatList } from "react-native"
import Config from "react-native-config"
import MealsCard from "../../components/MealsCard"

import useFetch from "../../hooks/useFetch"
import styles from "./MealsStyle"
import Loading from "../../components/Loading"
import Error from "../../components/Error"
function Meals({ navigation, route }) {
    const strCategory = route.params.strCategory

    const { data, error, loading } = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }


    function onSelect(strMeal) {
        navigation.navigate("DetailsPage",  {strMeal})
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data.meals}
                renderItem={({ item }) => <MealsCard strMeal={item.strMeal} strMealThumb={item.strMealThumb} onSelect={() => onSelect(item.strMeal)} />}
                keyExtractor={item => item.idMeal}
            />
        </View>
    )
}

export default Meals