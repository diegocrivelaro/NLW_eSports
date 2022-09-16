import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mobile</Text>
      <StatusBar style="auto" backgroundColor="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c6c6c6",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 40,
  },
});
