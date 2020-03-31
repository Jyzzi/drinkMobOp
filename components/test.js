import React,{Component} from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


class test1 extends Component {
    render() {
        const {test1 } = this.props
        return (

            <TouchableOpacity style={styles.container}
            onPress={() => Navigation.Navigate("List", { itemId: 86})}>
                <View style={styles.categorie}>
                    <Text style={styles.categorie_text}>New</Text>  
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        margin: 15,
        padding: 10,
        backgroundColor:'#FFFDDC'   
    },
    categorie_text : {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
    }
})

export default test1
