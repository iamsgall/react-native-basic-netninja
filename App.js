import { useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import AddTodo from './components/AddTodo'
import Header from './components/Header'
import TodoItem from './components/TodoItem'

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'text1', key: 1 },
    { text: 'text2', key: 2 },
    { text: 'text3', key: 3 },
  ])

  const pressHandler = key => {
    setTodos(() => {
      return todos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(() => {
        return [{ text, key: Math.random() }, ...todos]
      })
    } else {
      Alert.alert('Oops!', 'Todos must be 4 chars long', [
        { text: 'Understood', onPress: () => console.log('alert closed') },
      ])
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem
                  item={item}
                  pressHandler={() => pressHandler(item.key)}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
})
