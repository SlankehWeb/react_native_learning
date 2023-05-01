import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, } from 'react-native';

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
        <Button
        title="+"
        onPress={() => Alert.alert('Button pressed')}
      />
      </View>
      <View style={styles.optionscontainer}>
      <View style={styles.options}>
      <Text style={styles.optionstext}>Learn React</Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100vw',
    
  },
  header: {
    alignItems: 'center',
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
  optionscontainer: {
    alignItems: 'center',

  },
  options: {
    justifyContent: 'center',
    width:'95vw',
    height:'5vh',
    borderWidth: 1,
    borderRadius:3,
  },
  optionstext: {
    paddingLeft: '2vw',
  },
});
