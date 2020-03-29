import React,{Component} from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { GestureHandler } from 'expo';
import Swipeable from 'react-native-gesture-handler/Swipeable';


class Categorie extends Component {
    render() {
        const { data, listBottleWithCategorie } = this.props

        const { LeftActions } = () => {
            return (
                <View>
                    <Text>Test</Text>
                </View>
            )
        };

        const { RightActions } = () => {
            return (
                <View>
                    <Text>Test droite</Text>
                </View>
            )
        };


        return (

            // <swipeable
            // renderLeftActions={LeftActions}

            // renderRightActions={RightActions}
            // >
                <TouchableOpacity style={styles.container}
                onPress={() => listBottleWithCategorie(data.id)}>
                    <View style={styles.categorie}>
                        <Text style={styles.categorie_text}>{data.categorie}</Text>     
                    </View>
                </TouchableOpacity>
            // </swipeable>
        )
    }
}

const styles = StyleSheet.create({
    categorie_text : {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color:'#9E4646',
    },
    container:{
        margin: 15,
        padding: 10,
        backgroundColor:'#FFECCA'
    }
})

export default Categorie
