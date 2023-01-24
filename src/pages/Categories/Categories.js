import React from "react";
import { View, FlatList, } from "react-native"
import styles from "./CategoriesStyle"
import CategoryCard from "../../components/CategoryCard";
import Config from "react-native-config";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch";

function Categories({navigation}) {

    const { data, error, loading } = useFetch(Config.API_URL)
    

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    function renderItem({ item }) {
        return <CategoryCard name={item.strCategory} image={item.strCategoryThumb} onSelect={() => onSelect(item.strCategory)} /> 
        
    }

    function onSelect(strCategory){
        navigation.navigate("MealsPage", {strCategory})
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data.categories}
                renderItem={renderItem}
                keyExtractor={item => item.idCategory}
            />
        </View>
    )
}

export default Categories