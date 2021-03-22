import React,{useState, useEffect} from 'react'
import { View, FlatList,ActivityIndicator,StyleSheet, Button } from 'react-native'
import Bottlefiche from '../components/BottleFiche'

const DetailBottleScreen = ({route, navigation}) => {

    const idBottle = route.params.id
    const [dataBottle,setDataBottle] = useState()
  
    // récupère les informations de la bouteille
    getDetailBottle = () =>{
        fetch('http://localhost/requestPHP/bottleWithId.php',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({
                "id" : idBottle,
            })
        })  
        .then(res => res.json())
        .then(res => setDataBottle(res))
    }
  
    useEffect(() => {
        getDetailBottle()
    },[])

    return (
        <View>
            <View>
                <Bottlefiche data={item}/>
            </View>
            <View style={styles.footer}>
                <View style={styles.button}>
                    <Button
                    style = {styles.button}
                    onPress={() => navigate("EditScreen", {id :this.state.idBottle})}
                    title ="Modifier"
                    />
                </View>
                <View style={styles.button}>
                    <Button
                    style = {styles.button}
                    onPress={ () => navigate("DeleteScreen", {data : this.state.dataBottle})}
                    title ="Supprimer"
                    />
                </View>
            </View>
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


export default DetailBottleScreen