import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Position from './Components/Position';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Current Weather</Text>
      <Position />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "auto",
    padding: 1,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 32,
    marginBottom: 20,
  },
});