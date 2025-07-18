import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.helloText}>Hello World</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  helloText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})