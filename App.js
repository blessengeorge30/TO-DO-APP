import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalhandler() {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals,
      {text: enteredGoalText, key: Math.random().toString()},
    ]);
  };


  return (
    <View style={styles.appContainer} >

      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
          placeholder='Your course goal! '
          onChangeText={goalInputHandler} />
        <Button title="Add Goal" onPress={addGoalhandler} />
      </View>

      <View style={styles.goalsContainers}>
        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            

          return (
          <View  style={styles.goalItem} >
            <Text style={styles.goalText}>{itemData.item.text}</Text>
          </View>
          );
        }} 
        keyExtractor={(item, index) =>{
          return item.id;
        }}
        alwaysBounceVertical={false} />



      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 80,
    paddingHorizontal: 30,
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'

  },

  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '75%',
    marginRight: 8,
    padding: 8,
    borderRadius: 5
  },

  goalsContainers: {
    marginTop: 22
  },
  goalItem: {
    margin: 8,
    padding: 15,
    borderRadius: 4,
    backgroundColor: '#5e0acc',

  },
  goalText: {
    color: 'white',
  }
});
