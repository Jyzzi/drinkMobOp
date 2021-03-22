import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


const BottleOnList = (props) => {
    return (
        <TouchableOpacity 
        style={styles.main_container}
        onPress={() => props.detailBottle(props.data.id)}>
        	<View style={styles.content_container}>
          		<View style={styles.header_container}>
            		<Text style={styles.name_text}>{props.data.name}</Text>
            		<Text style={styles.amount_text}>qt : {props.data.amount}</Text>
            		<Text style={styles.score_text}>{props.data.score} / 10</Text>
          		</View>
				<View style={styles.description_container}>
					<Text style={styles.description_text} numberOfLines={6}>{props.data.description}</Text>
				</View>
       		</View>
      	</TouchableOpacity>
    )
}


const styles = StyleSheet.create({
  	main_container: {
		width: 600,
		height: 130,
		marginBottom:5,
		borderBottomWidth:1,
		borderColor:'#888888',
		flexDirection: 'row',
		backgroundColor: '#33D5FF',
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

export default BottleOnList
