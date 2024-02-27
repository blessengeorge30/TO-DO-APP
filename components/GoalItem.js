import React from 'react';
import { StyleSheet,View, Text } from 'react-native';


function GoalItem(props) {
    return(
        <View  style={styles.goalItem} >
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    );
};

export default GoalItem;

const styles =StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 15,
        borderRadius: 4,
        backgroundColor: '#5e0acc',
    
      },
      goalText: {
        color: 'white',
      },

});