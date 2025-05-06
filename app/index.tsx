import { Text, View, StyleSheet, StatusBar } from "react-native";
import TaskInput from '../components/TaskInput';

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
     <TaskInput />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
