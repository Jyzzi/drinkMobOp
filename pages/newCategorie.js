import React,{useEffect, useState} from 'react'
import { StyleSheet, View, FlatList, Button, ActivityIndicator, TextInput } from 'react-native'





export default function NewCategorieScreen(){

    const [categorieName, setCategorieName] = useState('rentrer le nom de votre nouvelle catégorie')
    const [categorieList, setCategorieList] = useState()
    const [blockButton, setBlockButton] = useState(false)
    const [availableState, setavailableState] = useState('')
    
    const handleCategorieNameChange = (e) => {
        let value = e.target.value
        setCategorieName(value)
        verifCategorieExistance(value)
    }

    const handleFocus = (event) => event.target.select();

    const getCategorieList = () => {
        fetch('http://localhost/requestPHP/listCategorie.php')
        .then(res => res.json())
        .then(res => {
            setCategorieList(res)
        })
        .catch(e => {
            console.error(e.message);
        })
    }

    const sendNewCategorie = () => {
        fetch('http://localhost/requestPHP/newCategorie.php',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({
                "name":categorieName,
            })
        })  
    }
    
    const verifCategorieExistance = (e) => {
        if (categorieList.find(categorie => categorie.name === e) || e === ''){
            setBlockButton(true)
            setavailableState('ce nom n\'est pas disponible')
        }
        else{
            setBlockButton(false)
            setavailableState('ce nom est disponible')
        }  
    }
        
    useEffect(() => {
        getCategorieList()
    }, [])
        
    return(
        <View>
            <TextInput
            value = {categorieName}
            onChange = {handleCategorieNameChange}
            onFocus={handleFocus}
            />
            <Button
            disabled = {blockButton}
            title="créer cette catégorie"
            onPress={sendNewCategorie}
            />
            <p>{availableState}</p>
        </View>
    )
}
  
 const styles = StyleSheet.create({

    })

