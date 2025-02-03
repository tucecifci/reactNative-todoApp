import {
    StyleSheet,
    TextInput,
    View,
    Text,
    Pressable,
    ScrollView,
  } from "react-native";
  import React, { useState } from "react";
  import { MaterialIcons } from "@expo/vector-icons";
  
  const TaskInput = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [showInput, setShowInput] = useState(false);
  
    const handleAddTask = () => {
      if (task.trim()) {
        setTaskList([...taskList, task]);
        setTask("");
        setShowInput(false);
      }
    };
  
    const handleDelete = (index) => {
      const updatedTasks = taskList.filter((_, i) => i !== index);
      setTaskList(updatedTasks);
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.newTaskContainer}>
          <Text style={styles.title}>Today's Task</Text>
          <Pressable
            style={styles.newTaskBtn}
            onPress={() => setShowInput(!showInput)}
          >
            <Text style={styles.btnText}>+ New Task</Text>
          </Pressable>
        </View>
  
        {showInput && (
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Add New Task"
              value={task}
              onChangeText={setTask}
              style={styles.addTaskInput}
            />
            <MaterialIcons
              name="add"
              size={24}
              color="white"
              onPress={handleAddTask}
              style={styles.addIcon}
            />
          </View>
        )}
  
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          {taskList.map((item, index) => (
            <View style={styles.taskListContainer} key={index}>
              <Text style={styles.item}>{item}</Text>
              <MaterialIcons
                name="delete"
                size={24}
                color="black"
                onPress={() => handleDelete(index)}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };
  
  export default TaskInput;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      padding: 20,
      marginTop: 20,
    },
    newTaskContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: 30,
      fontWeight: "600",
    },
    newTaskBtn: {
      backgroundColor: "#E2EBFA",
      padding: 15,
      width: 150,
      borderRadius: 15,
    },
    btnText: {
      textAlign: "center",
      color: "#125DEC",
      fontSize: 18,
      fontWeight: "400",
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20,
      marginTop: 30
    },
    addIcon: {
      marginLeft: 10,
      backgroundColor: "green",
      borderRadius: 50,
      padding: 4,
    },
    addTaskInput: {
      borderBottomWidth: 0.5,
      width: "80%",
      padding: 10,
      fontSize: 16,
    },
    scrollView: {
      flex: 1,
    },
    scrollContent: {
      paddingBottom: 20,
    },
    taskListContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 15,
      borderRadius: 10,
      marginVertical: 20,
      backgroundColor: "#E2EBFA",
    },
    item: {
      fontSize: 18,
      fontWeight: "400",
    },
  });
  