import React, {Component} from 'react';
import { View, TextInput, StyleSheet, Picker, Image, Button } from 'react-native';
   

class AddBottle extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
        headerTitle : "Ajout",
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
            onPress={() => navigation("HomeScreen")}
        />
        
    }
}

    constructor(props){
        super(props)
    
        this.state = {
            listCategorie : [],
            categorie : "",
            categorieID : 1,
            name : "nom",
            amount : 0,
            score : 0,
            description : "description"            
        }
    }

    getCategorie = () => {
      fetch('http://192.168.0.12/request_php/allCategorie.php')
        .then(res => res.json())
        .then(res => {
          this.setState({
            listCategorie : res,
            loading : false
          })
        })
      }
    
    
    addBottle = () => {  
        fetch('http://192.168.0.12/request_php/addBottle.php',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({
                "name" : this.state.name,
                "amount" : this.state.amount,
                "score" : this.state.score,
                "description" : this.state.description,
                "categorie" : this.state.categorieID
            })
        })
    }

    redirect = () => {
        this.props.navigation.navigate("ListScreen", 
        {id : this.state.categorieID}
        )
    }
    
    componentDidMount(){
      this.getCategorie()
    }

    render() {

      let tabCategorie = []

      this.state.listCategorie.forEach(categorie => {
        tabCategorie.push(
          <Picker.Item label={categorie.categorie} value={categorie.id} />
        )
      })



        return (
          <View>

            <View>
              <Picker
                selectedValue={this.state.categorie}
                style={{height: 50, width: 200}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({categorie: itemValue,
                                categorieID: itemIndex})
                }>
                <Picker.Item label="sélectionné une catégorie" value="" />
                {tabCategorie}
             </Picker>
            </View>

            <View style={styles.main_container}>
                <Image
                    style={styles.picture}
                    // source={{uri: "image"}}
                />
                  
              <View style={styles.content_container}>
      
                <View style={styles.header_container}>
                    <TextInput 
                        style={styles.name_text}
                        onChangeText={(name) => this.setState({name})}
                        value={this.state.name} 
                        required patern=""   
                    />

                    <TextInput 
                        style={styles.amount_text}
                        onChangeText={(amount) => this.setState({amount})}
                        value={this.state.amount}
                    />

                    <Picker
                        selectedValue={this.state.score}
                        style={{height: 50, width: 100}}
                        onValueChange={(itemValue) =>
                          this.setState({score : itemValue})
                        }>
                        <Picker.Item label="0" value="0" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="8" value="8" />
                        <Picker.Item label="9" value="9" />
                        <Picker.Item label="10" value="10" />
                    </Picker>                  
                </View>
                
                <View style={styles.description_container}>
                    <TextInput 
                      style={styles.description_text} 
                      onChangeText={(description) => this.setState({description})}
                      value={this.state.description}
                    />
                </View>
              </View>
            </View>
            <Button
              title="Ajouter"
              onPress={() => {this.addBottle() || this.redirect(this.state.categorieID)} }
            />
          </View>
          )
    }
}

const styles = StyleSheet.create({
    main_container: {
      marginTop: 180,
      margin :50,
      height: 190,
      flexDirection: 'row',
      backgroundColor: '#33D5FF',
    },
    picture: {
      width: 120,
      height: 180,
      margin: 5,
    },
    content_container: {
      flex: 1,
      margin: 5
    },
    header_container: {
      flex: 3,
      flexDirection: 'row'
    },
    name_text: {
      fontWeight: 'bold',
      fontSize: 25,
      flex: 1,
      flexWrap: 'wrap',
      paddingRight: 5
    },
    amount_text: {
      fontWeight: 'bold',
      fontSize: 23,
      flexWrap: 'wrap',
      color: '#882233',
      paddingRight: 130
    },
    score_text: {
      fontWeight: 'bold',
      fontSize: 26,
      color: '#666666'
    },
    description_container: {
      flex: 7
    },
    description_text: {
      fontStyle: 'italic',
      color: '#666666'
    }
   
   })

export default AddBottle
