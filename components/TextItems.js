import React from 'react'
import { Text , View, StyleSheet, TouchableOpacity } from 'react-native'

// use props to be send by bind is a easy way to do it( just remenber "this")
const TextItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.item}</Text>
        <Text>{props.id}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    margin: 5,
    padding: 10 ,
    borderWidth: 1 ,
    borderColor: 'blue' ,
    backgroundColor: '#0ff'
  }
})

export default TextItem