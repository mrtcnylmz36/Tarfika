import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native"
import styles from "./MealsCardStyle"

function MealsCard({ strMeal, strMealThumb, onSelect }) {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: strMealThumb }} />
                <Text style={styles.text}>{strMeal}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}


export default MealsCard