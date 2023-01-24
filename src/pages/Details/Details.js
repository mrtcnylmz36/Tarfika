import React from "react"
import {View, Text, FlatList, Linking, Alert} from "react-native"
import Config from "react-native-config"
import DetailCard from "../../components/DetailCard/DetailCard"
import useFetch from "../../hooks/useFetch"
import styles from "./DetailsStyle"
import Loading from "../../components/Loading"
import Error from "../../components/Error"


function Details({route}){
    const strMeal = route.params.strMeal;
    const {data, loading, error} = useFetch(Config.SEARCH_URL+"="+strMeal)
    
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    function onYoutube(url){
        try{
            Linking.openURL(url)
        }catch{
           Alert.alert("No Video")
        }
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={data.meals}
                renderItem={({item}) => <DetailCard strMealThumb={item.strMealThumb} strMeal={item.strMeal} strArea={item.strArea} strInstructions={item.strInstructions} onYoutube={() => onYoutube(item.strYoutube)}/> }
            />
        </View>
    )
}

export default Details