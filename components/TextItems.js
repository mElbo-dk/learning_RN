import React from 'react'
import { Text , View, StyleSheet } from 'react-native'

const TextItem = props => {
  return (<View style={styles.listItem}>
    <Text>{props.item}</Text>
  </View>)
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