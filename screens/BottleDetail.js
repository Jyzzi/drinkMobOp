import React,{Component} from 'react'
import { View, FlatList,ActivityIndicator,StyleSheet, Button } from 'react-native'
import DetailBottle from '../components/BottleDetailComp'

class Detail extends Component {

    
    constructor(props){
        super(props)

    
    this.state = {
        idBottle : this.props.route.params.id,
        dataBottle : [],
        loading : true
    }
    
    }
    
  
    getDetailBottle = () =>{
        fetch('http://192.168.0.13/request_php/bottleWithId.php',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body:JSON.stringify({
            "id" : this.state.idBottle,
        })
    })  
        .then(res => res.json())
        .then(res => { 
            this.setState({
                dataBottle : res,
                loading :false
            })  
        })
    }
  
    componentDidMount(){
        this.getDetailBottle()
    }

    render(){
        const {navigate} = this.props.navigation;
        // Si loading est Vrai, on affiche un chargement
        if (this.state.loading) {
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size ='large'/>
            </View>
          )
        }
        // Sinon on affiche les listes
        else {
            return (
                <View>
                    <View>
                    <FlatList
                        data={this.state.dataBottle}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <DetailBottle data={item} detailBottle ={this._detailBottle} />}
                    />
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


export default Detail