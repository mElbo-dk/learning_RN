import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native'
import TextItem from './components/TextItems'
// import TextInput from './components/TextInput'

export default function App() {
  const [enteredTextValue, setEnteredText] = useState('')
  const [enteredList, setEnteredList] = useState([])

  const textInputHandler = (enteredText) => {
    setEnteredText(enteredText)
  }

  const addTextHandeler = () => {
    setEnteredList(enteredList => [...enteredList, 
      { key: Math.random().toString(), value: enteredTextValue }])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder  = 'Input text' 
          style={styles.input}
          onChangeText={textInputHandler}
          value={enteredTextValue}/>
        <Button title='Add' onPress={addTextHandeler}/>
      </View>
      <FlatList 
        data={enteredList}
        renderItem={itemData => <TextItem item={itemData.item.value}/>}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  screen: { 
    marginTop: 20,
    padding: 30 
  },
  inputContainer: { 
    flexDirection: 'row' ,
    justifyContent: 'space-evenly',
    alignItems: 'baseline'
  },
  input: { width: '80%' ,
    borderColor: 'blue' ,
    borderWidth: 1 ,
    padding: 10 
  }
  
})
