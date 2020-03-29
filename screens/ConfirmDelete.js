import React,{Component} from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

class ConfirmDelete extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle :"Supprimer",
            headerStyle: {
                height:100,
                fontSize :200
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
        data : this.props.navigation.getParam("data"),
        loading : true
    }
    
    }
    
    deleteBootle = (idBottle) =>{
        fetch('http://192.168.0.12/request_php/deleteBottle.php',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({
                "id" : idBottle,
            })
        })
    }

    render(){
        const idBottle = this.state.data[0]["id"]
        const {navigate} = this.props.navigation;
            return (
                <View>
                    <View>  
                        <Text>Êtes-vous sur de vouloir supprimer : {this.state.data[0]["name"]} ? </Text>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.button}>
                            <Button
                            style = {styles.button}
                            onPress={() => navigate("DetailScreen", {id : idBottle})}
                            title ="Non"
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                            style = {styles.button}
                            onPress={ () => { this.deleteBootle(idBottle) || navigate("HomeScreen")}}
                            title ="Oui"
                            />
                        </View>
                    </View>
                </View>

            )
    }
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


export default ConfirmDelete