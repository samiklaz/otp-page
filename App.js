import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, StatusBar, Image, TouchableOpacity, SafeAreaView } from 'react-native'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      pin1: "",
      pin2: "", 
      pin3: "",
      pin4: ""
    }
  }

  componentDidMount = () => {
    this.refs.pin1ref.focus()
  }



  render() {
    const {pin1, pin2, pin3, pin4} = this.state
    return (
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight}}>
        <Text style={{textAlign: "center", fontSize: 20, marginTop: 10,}}>OTP Page</Text>
        <View style={styles.container}>
          <TextInput 
          maxLength={1}
          ref={"pin1ref"}
          value={this.state.pin1}
          keyboardType={'numeric'}
          onChangeText={(pin1) => {
            this.setState({ pin1: pin1})
            if(pin1 != "") {
              this.refs.pin2ref.focus()
            }
          }}
          style={styles.input}
          />

          <TextInput 
          maxLength={1}
          ref={"pin2ref"}
          value={this.state.pin2}
          keyboardType={'numeric'}
          onChangeText={(pin2) => {
            this.setState({ pin2: pin2})
            if(pin2 != "") {
              this.refs.pin3ref.focus()
            }
          }}
          style={styles.input}
          />

          <TextInput 
          maxLength={1}
          ref={"pin3ref"}
          keyboardType={'numeric'}
          value={this.state.pin3}
          onChangeText={(pin3) => {
            this.setState({ pin3: pin3})
            if(pin3 != "") {
              this.refs.pin4ref.focus()
            }
          }}
          style={styles.input}
          />

          <TextInput
          maxLength={1} 
          ref={"pin4ref"}
          keyboardType={'numeric'}
          value={this.state.pin4}
          onChangeText={(pin4) => {
            this.setState({ pin4: pin4})
            
            if(pin4 != "") {
              alert("You have been verified successfully")
              this.state.pin1 = ""
              this.state.pin2 = ""
              this.state.pin3 = ""
              
            }else{
              this.state.pin4 = ""
            }
            
          }}
          style={styles.input}
          />
        </View>
      </SafeAreaView>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 0.6, 
    justifyContent: "space-evenly", 
    flexDirection: "row",
  },

  input: {
    backgroundColor: "white", 
    fontWeight: "600", 
    alignSelf: "center", 
    padding: 10, 
    fontSize: 20, 
    height: 55, 
    width: "10%", 
    borderRadius: 10, 
    justifyContent: "center",
    textAlign: "center",
    alignItems: 'center',
    borderWidth: 0.5, 
    borderColor: "grey"
  }
})
