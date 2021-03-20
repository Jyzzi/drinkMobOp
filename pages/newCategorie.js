import React,{useState} from 'react'
import { StyleSheet, Text, View, FlatList, Button, ActivityIndicator, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';



var NewCategorieScreen = () => {

    var [categorieName, setCategorieName] = useState('')

    
    return(
        <View>
            <TextInput
            onChangeText={(categorieName) => setCategorieName({categorieName})}
            />
            <Button
            title="créer cette catégorie"
            onPress={() => {this.createCategorie(),console.log(categorieName) || this.redirect()} }
            />
        </View>
    )
}
  
 const styles = StyleSheet.create({

    })

export default NewCategorieScreen
