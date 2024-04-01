import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <Login/>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor:'#F4A460',
    borderRadius:26,
    height: 200,
    width: 300
  }
});
