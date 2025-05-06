import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const random = () => {
  return (
    <View style={styles.container}>
      <Text>random</Text>
      <Image
        source={require("../assets/images/kitchen.jpeg")}
        style={styles.image}
      />
    </View>
  )
}

export default random

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    alignSelf: "center",
  },
});
