import React,{Component} from 'react'
import { StyleSheet, Text, View, FlatList, Button, ActivityIndicator} from 'react-native'
import BottleOnList from '../components/BottleOnList'


class ListBottleScreen extends Component {


  
//     console.log(this.props.route.params.id)
//     this.state = {
//         idCategorie : this.props.route.params.id,
//         listBottle : [],
//         loading : true
//     }
//     }

//     // récuperer la liste de toutes les bouteilles
//     getListBottle = () => {
//       fetch('http://localhost/request_php/listBottle.php',{
//           method: 'POST',
//           headers:{
//               'Content-Type' : 'application/json',
//           },
//           body:JSON.stringify({
//               'id' : this.state.idCategorie,
//           })
//       })
//         .then(res => res.json())
//         .then(res => {
//           this.setState({
//             listBottle : res,
//             loading : false
//           })
//         })
//       }



//     _detailBottle = (id) => {
//         this.props.navigation.navigate("Detail", {id : id})
//     }


//     componentDidMount(){
//         this.getListBottle()
//       }
    
      
        
//     render() {
//         // if (this.state.loading) {
//         //     return (
//         //     <View style={styles.loading_container}>
//         //         <ActivityIndicator size ='large'/>
//         //         <Text>Vérifier service Apache et nginx</Text>
//         //     </View>
//         //     )
//         // }
//         // else{
//             return (
               
//                     <View>
//                         <FlatList
//                         data={this.state.listBottle}
//                         keyExtractor={(item) => item.id.toString()}
//                         renderItem={({item}) => <BottleOnList data={item} detailBottle={this._detailBottle} />}
//                         />
//                     </View>
                
//             )
//             }
//         }
        
//     //}
    

//  const styles = StyleSheet.create({
//     loading_container: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 100,
//         bottom: 0,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
//     })
}
export default ListBottleScreen
