import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import TextItem from './components/TextItems'
import TextItemInput from './components/TextItemInput'

export default function App() {
  // state is in hooks set to array
  const [enteredList, setEnteredList] = useState([])
  const [isAddMode, setIsAddMode] = useState('')

  // the ramdom is to make uniqe numbers for the key to FlatList
  const addTextHandeler = ItemText => {
    setEnteredList(enteredList => [...enteredList, 
      { id: Math.random().toString(), value: ItemText }])
    setIsAddMode(false)
  }

  const cancelAddTextHandeler = () => {
    setIsAddMode(false)
  }


  const deleteTextHandeler = idTextFilter => {
    setEnteredList(enteredList => { 
      return enteredList.filter((filterItem) => filterItem.id !== idTextFilter)
    })
    
  }
  // render the screen 
  return (
    <View style={styles.screen}>
      <Button  title='Add new text' onPress={ () => setIsAddMode(true)}/>
      <TextItemInput visible={isAddMode} onAddText={addTextHandeler} cancel={cancelAddTextHandeler}/>
      <FlatList 
        data={enteredList}
        renderItem={itemData => 
          <TextItem 
            id={itemData.item.id}
            onDelete={deleteTextHandeler} 
            item={itemData.item.value}/>}
      />
    </View>
  )
}

// adding style for the screen objects
const styles = StyleSheet.create({
  screen: { 
    marginTop: 20,
    padding: 30 
  }
})
