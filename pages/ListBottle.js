import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, Button} from 'react-native'
import BottleInList from '../components/BottleInList'


const ListBottleScreen = ({route, navigation}) => {
  
    const idCategorie = route.params.id
    const [listBottle, setListBottle] = useState()

    // récuperer la liste de toutes les bouteilles
    const getListBottle = () => {
        fetch('http://localhost/requestPHP/listBottle.php',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
             body:JSON.stringify({
                'id' : idCategorie,
             })
        })
        .then(res => res.json())
        .then(res => setListBottle(res))
        .catch(e => console.error(e.message))
    }

    // redirige vers le detail de la bouteille
    const detailBottle = () => {
        navigation.navigate("DetailBottle", {id : idCategorie})
    }

    useEffect(() => {
        getListBottle()
    }, [])
    

    return (
        <View>
            <FlatList
            data={listBottle}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => 
                <BottleInList data={item} 
                detailBottle={detailBottle} 
                />
            }
            />
        </View>
    )
}
        
        
 const styles = StyleSheet.create({
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ListBottleScreen
