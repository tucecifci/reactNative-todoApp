import { StyleSheet, TextInput, View, Text } from "react-native";
import React, { useState } from "react";

const TaskInput = () => {
  const [task, setTask] = useState("");
  // const [taskList, setTaskList] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <TextInput
        placeholder="Add New Task"
        value={task}
        onChangeText={setTask}
        style={styles.addTaskInput}
      />
      <Text>{task}</Text>
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    backgroundColor: "pink",
    width: "100%",
    
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginTop: 40
  },
  addTaskInput: {
    borderBottomWidth: 1,
    marginTop: 50,
    width:"80%"
  },
});
