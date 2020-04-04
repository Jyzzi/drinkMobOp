import React,{Component} from 'react'
import { StyleSheet, Text, View, FlatList, Button, SafeAreaView, ActivityIndicator, TouchableOpacity } from 'react-native'
import Categorie from '../components/Categorie'
import NewCategorie from '../components/NewCategorie'


  
class HomeScreen extends Component {
    


    constructor(props){
        super(props)
        
    this.state = {
        allCategorie : [],
        loading : true,
        numberColumns: 2
    }
    
    }
    // récuperer la liste de toutes les Categories
    getCategorie = () => {
      fetch('http://192.168.0.13/request_php/allCategorie.php')
        .then(res => res.json())
        .then(res => {
          this.setState({
            allCategorie : res,
            loading : false
          })
        })
        .catch(e => {
            console.error(e.message);
        })
      }
    
    // naviguer avec clic sur catégorie
    _listBottleWithCategorie = (id) => {
        this.props.navigation.navigate("List", {id:id})
    }
    
    // créer une nouvelle catégorie
    CreateNewCategorie = () => {
        navigation.navigate("CreateCategorieScreen")
    }

    // créer nouvelle bouteille
    CreateNewBottle =() => {
        this.props.navigation.navigate("CreateBottleScreen")
    }

    componentDidMount(){
        this.getCategorie()
    }
    
      
      
    render() {
        if (this.state.loading) {
            return (
            <View style={styles.loading_container}>
                <ActivityIndicator size ='large'/>
                <Text>Vérifier service Apache et nginx</Text>
            </View>
            )
        }
        else{

            return (
                <SafeAreaView style={styles.background}>
                    <View style={styles.content}>
                        <FlatList style={styles.list}
                            data={this.state.allCategorie}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item}) =>
                                <Categorie data={item} 
                                listBottleWithCategorie={this._listBottleWithCategorie} 
                                // onSwipeFromLeft={() => alert('swiped from left!')}
                                // onRightPress={() => alert('pressed right!')}
                                />}
                        />
                      <NewCategorie/>    
                    </View>
                </SafeAreaView>
            )
            }
        }
        
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
    }

    })

export default HomeScreen



