import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, Button, SafeAreaView,TouchableOpacity } from 'react-native'
import CategorieInList from '../components/CategorieInList'


    
  
const HomeScreen = ({ navigation}) => {
    

    const [categorieList, setCategorieList] = useState()

    // récuperer la liste de toutes les Categories
    const getCategorieList = () => {
        fetch('http://localhost/requestPHP/listCategorie.php')
        .then(res => res.json())
        .then(res => setCategorieList(res))
        .catch(e => console.error(e.message))
    }
    
    // naviguer avec clic sur catégorie
    const listBottleWithCategorie = (id) => {
        navigation.navigate("ListBottle", {id:id})
    }

    // récupère la liste des catégories au 1er chargement de la page
    useEffect(() => {
        getCategorieList()
    }, [])
    
      
    return(
        <SafeAreaView style={styles.background}>
            <View style={styles.content}>
                <FlatList style={styles.list}
                    data={categorieList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) =>
                        <CategorieInList data={item} 
                        listBottleWithCategorie={listBottleWithCategorie}     
                        />}
                />
                <TouchableOpacity style={styles.container}
                    onPress={() => navigation.navigate('NewCategorie')}>
                    <View style={styles.categorie}>
                        <Text style={styles.categorie_text}>nouvelle catégorie</Text>  
                    </View>
                </TouchableOpacity>    
            </View>
        </SafeAreaView>      
    )
}      


 const styles = StyleSheet.create({
    content:{
        alignContent:'center',
        flex: 1,
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        backgroundColor: '#EFDAB1',
        flex: 1,
        flexDirection: 'row',
    },
    container:{
        margin: 15,
        padding: 10,
        backgroundColor:'#FFFDDC'   
    },
    categorie_text : {
        textAlign: 'center',
        fontSize: 30,
    }
})

export default HomeScreen



