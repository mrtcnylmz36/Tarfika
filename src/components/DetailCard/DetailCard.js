import React from "react";
import { View, Text, Image, TouchableOpacity, onYoutube } from "react-native";
import styles from "./DetailCardStyle"

function DetailCard({strMealThumb, strMeal, strArea, strInstructions, onYoutube}){
    return(
        <View style={styles.container}>
            <Image style={styles.strMealThumb} source={{uri:strMealThumb}}/>
            <Text style={styles.strMeal}>{strMeal}</Text>
            <Text style={styles.strArea}>{strArea}</Text>
            <View style={styles.line}></View>
            <Text style={styles.strInstructions}>{strInstructions}</Text>
            <TouchableOpacity style={styles.button} onPress={onYoutube}>
                <Text style={styles.linkText}>Watch on Youtube</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DetailCard