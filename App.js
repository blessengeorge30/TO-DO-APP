import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

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
          placeholder='Your course goalllllllllllllll! '
          value={enteredGoalText}
          onChangeText={goalInputHandler} />
        <Button title="Add Goal" onPress={addGoalhandler}/>
      </View>

      <View style={styles.goalsContainers}>
        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => {
            

          return <GoalItem text={itemData.item.text}/>;
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

});
