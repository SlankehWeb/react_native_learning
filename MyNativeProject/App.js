import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headertext}>TODOLIST        <Image 
                  style={{
                    resizeMode: 'contain',
                    top: 10,
                    height: 50,
                    width: 100,
                    alignSelf: 'center',
                  }}
        source={require('./assets/favicon.png')}
        /></Text>
      </View>
      <View>
        <Text>indtast opgave</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#008080',
  },
  headertext: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: { 
    borderWidth: 1,
    borderColor: '#777',
  },
});
