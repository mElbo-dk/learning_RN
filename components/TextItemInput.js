import React , { useState } from 'react'
import { View, TextInput, StyleSheet,Button,Modal } from 'react-native'

// creating a object function
const TextItemInput = props => {
  // setting the state 
  const [enteredTextValue, setEnteredText] = useState('')
  

  // text input handler for listening for keys 
  const textInputHandler = (enteredText) => {
    setEnteredText(enteredText)
  }

  const addTextHandeler = () =>{
    props.onAddText(enteredTextValue)
    setEnteredText('')
  }


  // render and send to the app.js
  // the .bind() is to send value together with the onPress props.
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder  = 'Input text' 
          style={styles.input}
          onChangeText={textInputHandler}
          value={enteredTextValue}/>
        <View style={styles.inLine}>
          <Button title='Cancel' color='orange' onPress={props.cancel}/>
          <Button title='Add' onPress={addTextHandeler}/>
        </View>
      </View>
    </Modal>
  )
}

// style sheet creation 
const styles = StyleSheet.create({
  inputContainer: { 
    flex: 1 ,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: { width: '80%' ,
    borderColor: 'blue' ,
    borderWidth: 1 ,
    padding: 10 ,
    marginBottom: 10
  },
  inLine: {
    flexDirection: 'row'
  }
})

export default TextItemInput