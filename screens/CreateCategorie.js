import React,{Component} from 'react'
import { StyleSheet, Text, View, FlatList, Button, ActivityIndicator, TextInput } from 'react-native'




class CreateCategorie extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle : "Home",
            headerStyle: {
                height:200,
                fontSize:200,
                color:"red"
            },
            headerRight :  <Button
                title="search"
                color="#0a0"
                onPress={() => alert('This is the search')}
            />,
            headerLeft : <Button
                title="Menu"
                onPress={() => navigation.toggleDrawer()}
            />
            
        }
    }


    constructor(props){
        super(props)
        
        this.state = {
            categorieName :""
        }
    }

    createCategorie = () =>{
        fetch('http://192.168.0.12/request_php/createCategorie.php',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({
                "name" : this.state.categorieName
            })
        }) 
    }

    redirect = () => {
        this.props.navigation.navigate("HomeScreen")   
    }
      
    render(){
        return(
            <View>
                <TextInput                 
                        onChangeText={(categorieName) => this.setState({categorieName})}
                        value={this.state.categorieName} 
                        />

                <Button
                title="Ajouter"
                onPress={() => {this.createCategorie(),console.log(this.state.categorieName) || this.redirect()} }
                
                />
            </View>
        )

    }
}
    

 const styles = StyleSheet.create({

    })

export default CreateCategorie
