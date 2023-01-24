import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        
    },
    strMealThumb:{
        width:"100%",
        height:Dimensions.get("window").height / 3
    },
    strMeal:{
        color:"#870000",
        fontWeight:"bold",
        fontSize:36,
        textAlign:"center"
        
    },
    strArea:{
        color:"#870000",
        textAlign:"center",
        fontWeight:"bold"
    },
    line:{
        width:"100%",
        height:1,
        backgroundColor:"grey"
    },
    strInstructions:{
        color:"black",
        padding:5
    },
    button:{
        backgroundColor:"red",
        padding:10,
        margin:10,
        alignItems:"center",
        borderRadius:5
    },
    linkText:{
        color:"white",
        fontWeight:"bold"
    }

})

