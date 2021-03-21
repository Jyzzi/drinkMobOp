import React,{Component} from 'react'
import { StyleSheet, Text, View, FlatList, Button, SafeAreaView, ActivityIndicator, TouchableOpacity } from 'react-native'




  
const HomeScreen = ({ navigation}) => {
    // constructor(props){
    //     super(props)
        
    // this.state = {
    //     allCategorie : [],
    //     loading : true,
    //     numberColumns: 2
    // }
    
    // }
    // // récuperer la liste de toutes les Categories
    // getCategorie = () => {
    //   fetch('http://localhost/request_php/allCategorie.php')
    //     .then(res => res.json())
    //     .then(res => {
    //       this.setState({
    //         allCategorie : res,
    //         loading : false
    //       })
    //     })
    //     .catch(e => {
    //         console.error(e.message);
    //     })
    //   }
    
    // // naviguer avec clic sur catégorie
    // _listBottleWithCategorie = (id) => {
    //     this.props.navigation.navigate("List", {id:id})
    // }
    
    // // créer une nouvelle catégorie
    // CreateNewCategorie = () => {
    //     navigation.navigate("CreateCategorieScreen")
    // }


    // componentDidMount(){
    //     this.getCategorie()
    // }
    
      
    return(
        <SafeAreaView style={styles.background}>
            <View style={styles.content}>
                {/* <FlatList style={styles.list}
                    data={this.state.allCategorie}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) =>
                        <Categorie data={item} 
                        listBottleWithCategorie={this._listBottleWithCategorie}     
                        />}
                /> */}
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



