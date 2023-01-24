import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native"
import styles from "./CategoryCardStyle"

function CategoryCard({ name, image, onSelect }) {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: image }}
                    resizeMode="contain"
                />
                <Text style={styles.text}>{name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoryCard      