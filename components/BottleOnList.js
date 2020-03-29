import React,{Component} from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'


class BottleOnList extends Component {
  render() {
    const { data, detailBottle } = this.props
    return (
      <TouchableOpacity 
        style={styles.main_container}
        onPress={() => detailBottle(data.id)}>

        <Image
          style={styles.picture}
          source={{uri: "picture"}}
        />

        <View style={styles.content_container}>

          <View style={styles.header_container}>
            <Text style={styles.name_text}>{data.name}</Text>
            <Text style={styles.amount_text}>qt : {data.amount}</Text>
            <Text style={styles.score_text}>{data.score} / 10</Text>
          </View>
          
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{data.description}</Text>
          </View>

        </View>

      </TouchableOpacity>
    )
}
}

const styles = StyleSheet.create({
  main_container: {
    width: 600,
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

export default BottleOnList
