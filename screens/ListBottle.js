import React,{Component} from 'react'
import { StyleSheet, Text, View, FlatList, Button, ActivityIndicator} from 'react-native'
import BottleOnList from '../components/BottleOnList'


class ListBottle extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle:"Liste",
            headerStyle: {
                height:100,
                fontSize:200
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
        idCategorie : this.props.navigation.getParam("id"),
        listBottle : [],
        loading : true
    }
    }

    // récuperer la liste de totues les Bottles
    getListBottle = () => {
      fetch('http://192.168.0.12/request_php/listBottle.php',{
          method: 'POST',
          headers:{
              'Content-Type' : 'application/json',
          },
          body:JSON.stringify({
              'id' : this.state.idCategorie,
          })
      })
        .then(res => res.json())
        .then(res => {
          this.setState({
            listBottle : res,
            loading : false
          })
        })
      }



    _detailBottle = (id) => {
        this.props.navigation.navigate("DetailScreen", {id : id})
    }


    componentDidMount(){
        this.getListBottle()
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
                    <View>
                        <FlatList
                        data={this.state.listBottle}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <BottleOnList data={item} detailBottle={this._detailBottle} />}
                        />
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

export default ListBottle
