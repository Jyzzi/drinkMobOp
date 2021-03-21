import React,{Component} from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { GestureHandler } from 'expo';
import Swipeable from 'react-native-gesture-handler/Swipeable';


const CategorieInList = (props) => {
    
    return (
        <TouchableOpacity style={styles.container}
        onPress={() => props.listBottleWithCategorie(props.data.id)}>
            <View style={styles.categorie}>
                <Text style={styles.categorie_text}>{props.data.name}</Text>   
            </View>
        </TouchableOpacity>    
    )
}

const styles = StyleSheet.create({
    categorie_text : {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color:'#9E4646',
    },
    container:{
        margin: 15,
        padding: 10,
        backgroundColor:'#FFECCA'
    }
})

export default CategorieInList
