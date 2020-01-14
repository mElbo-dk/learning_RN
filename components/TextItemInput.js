import React , { useState } from 'react'
import { View, TextInput, StyleSheet,Button } from 'react-native'

// creating a object function
const TextItemInput = props => {
  // setting the state 
  const [enteredTextValue, setEnteredText] = useState('')
  // text input handler for listening for keys 
  const textInputHandler = (enteredText) => {
    setEnteredText(enteredText)
  }
  // render and send to the app.js
  // the .bind() is to send value together with the onPress props.
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        placeholder  = 'Input text' 
        style={styles.input}
        onChangeText={textInputHandler}
        value={enteredTextValue}/>
      <Button title='Add' onPress={props.onAddText.bind(this, enteredTextValue)}/>
    </View>
  )
}

// style sheet creation 
const styles = StyleSheet.create({
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

export default TextItemInput