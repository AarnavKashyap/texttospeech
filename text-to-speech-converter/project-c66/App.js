import * as React from 'react';
import { Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,Alert} from 'react-native';
import * as Speech from 'expo-speech';
import {Header} from 'react-native-elements';


export default class App extends React.Component {
  voice=()=>{
    var thingToSay = this.state.text;
    Speech.speak(thingToSay);
  }
  constructor(){
    super();
    this.state={
      text: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <Header
          backgroundColor={'#1261a0'}
          centerComponent={{
            text: 'Text To Speech Converter',
            style: { color: '#000', fontSize: 16 },
          }}
        />
      <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://th.bing.com/th/id/OIP.T_XEQOCQ8ZPi3hhxQL67MwHaHa?pid=Api&rs=1',
          }}
        />
        <Text style={styles.textStyles}>Enter a Word</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
             this.state.text?(this.voice()):Alert.alert("Please Enter A Word");
          }}>
          <Text style={styles.buttonText}>Press To Hear Speech</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
  },
   imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
  textStyles:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,

  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
