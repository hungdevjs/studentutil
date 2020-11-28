import React from "react"
import { Provider } from "react-redux"
import { Text, View, Platform, StatusBar } from "react-native"

const paddingTop = Platform.OS === "android" ? StatusBar.currentHeight : 0

const App = () => <View style={{ flex: 1, paddingTop }}>
  <Text>App</Text>
  <StatusBar backgroundColor="tomato" />
</View>

export default App