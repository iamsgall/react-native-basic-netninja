import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('')

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='new todo...'
        onChangeText={val => setText(val)}
      />
      <Button
        onPress={() => {
          submitHandler(text)
        }}
        title='Add Todo'
        color='coral'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
})
