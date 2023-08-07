import React from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View, Button, SafeAreaView} from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TableOne from './Tableone';


const Stack = createNativeStackNavigator();


const App = () => {
  
  return(
  <NavigationContainer> 
    <Stack.Navigator initialRouteName="Registerscreen">
        <Stack.Screen name="Home" component={Registerscreen} options={{title: 'User Register'}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
  </NavigationContainer>
  )}

const styles = StyleSheet.create({

  textInput: {
    
    textAlign: 'center',
 
height: 50,

 borderWidth: 1.2,
 
 backgroundColor : "black",

 borderRadius: 10 ,
 
 marginHorizontal: 20,
 marginVertical: 5,
 fontSize: 20,
 backgroundColor: '#DFDBE4',
 fontFamily: 'Aeonik'

  }, 
  field: {
    fontSize: 18, 
    fontFamily: 'Aeonik',
    textAlign: 'center',
    padding: 8,
    fontSize: 25,
    color: 'white'


  }, 
//   button : {
//     borderRadius: 10,
//     paddingVertical:2,
//     height: 60,
//     marginTop: 40,

//   },
}
)

function Registerscreen ({ navigation }) {
  const [textInputFirstName, setTextFirstInputName] = useState('');
  const [textInputLastName, setTextLastInputName] = useState('');
  const [textInputEmail, setTextInputEmail] = useState('');
  const [textInputPassword, setTextInputPassword] = useState('')
  const [TextInputConfirmPassword, setTextInputConfirmPassword] = useState('')
  const [PhoneInputValue, setPhoneInputValue] = useState('')
  const onRegister = () => {
    
    if (!textInputFirstName.trim()) {
      alert('Please Enter First Name');
      return;
    }
    if (!textInputLastName.trim()) {
      alert('Please Enter Last Name');
      return;
    }
  
    if (!textInputEmail.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!PhoneInputValue.trim()){
      alert('Please Enter Phone number');
      return
    } else if (PhoneInputValue.trim()){
      onlynumbers(PhoneInputValue)
      return
    }
    if (!textInputPassword.trim()) {
      alert('Please Enter Password');
      return
  
    }
    else if (textInputPassword !== TextInputConfirmPassword) {
      // console.warn('Passwords do not match');
      alert('Passwords do not match');
      return
  
    }
    else if (textInputPassword.trim()){
      validate(textInputPassword)
      return
    }
  };
  const validate = (password) => { 
    strength = 0
    tips = ''
    if (password.length < 6) {
       tips += 'Too short '
    }
  
    
    if (password.length > 7) {
    
    
       strength += 1
    }
    
    
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
       strength += 1
    } else {
       tips += "Try capital and small letters "
    }
    
    
    if (password.match(/\d/)) {
       strength += 1;
    } else {
       tips += "try letters "
    }
    if (password.match(/[^a-zA-Z\d]/)) {
       strength += 1;
    } else {
       tips += "try special characters "
    }
  
    if (strength < 2) {
       issue =  "Easy to guess. " + tips;
       alert(issue)
     } else if (strength == 2) {
       issue =  "Medium difficulty. " + tips;
       alert(issue)
     } else if (strength == 3) {
       issue =  "Difficult. " + tips;
       alert(issue)
     } else {
      navigation.navigate('Dashboard');
    }
    }
  return (

    <ImageBackground source={{uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'}} style = {{ borderRadius: 1, flex: 1}}>
    {/* <ImageBackground source={{uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'}} style = {{ height: 200, borderRadius: 1,}}> */}
    {/* <Text style = {{fontWeight: 800, justifyContent: 'center', 
    textAlign: 'center', flexDirection: 'column', paddingTop: 30, color: '#F2D0E4', fontSize: 30}}>
      Mindsprint Native 
  
    </Text> */}
    {/* </ImageBackground> */}
    <Text style = {{...styles.field, paddingTop: 30}}> First name</Text>
    <TextInput style = {styles.textInput} placeholder='Enter First Name here' onChangeText={
            (value) => setTextFirstInputName(value)}/>
    <Text style = {styles.field}> Last name</Text>
    <TextInput style = {styles.textInput} placeholder='Enter Last Name here' onChangeText={
            (value) => setTextLastInputName(value)}/>
    <Text style = {styles.field}> Email </Text>
    <TextInput style = {styles.textInput} placeholder='Enter Email here' keyboardType= 'email-address' onChangeText={
            (value) => setTextInputEmail(value)
          }
     />
     <Text style = {styles.field}> Phone Number </Text>
    <TextInput style = {styles.textInput} placeholder='Enter Phone number here' keyboardType='numeric'
    onChangeText={
      (value) => setPhoneInputValue(value)}  />
      
    <Text style = {styles.field}> Password  </Text>
    <TextInput style = {styles.textInput} placeholder='Enter Password here' 
    onChangeText={
      (value) => setTextInputPassword(value)} secureTextEntry = {true} />
    <Text style = {styles.field}> Confirm Password </Text>
    <TextInput style = {styles.textInput} placeholder='Confirm Password here' 
    onChangeText={
      (value) => setTextInputConfirmPassword(value)}   secureTextEntry = {true}/>
      
      
      <View style = {styles.button}>
          {/* <Button 
            title="Register"
            onPress={checkTextInput}
          /> */}
          <TouchableOpacity style = {{backgroundColor: "lightcoral", paddingBottom: 5, marginTop: 0, justifyContent: 'center',
           alignItems: 'center', width: 400, alignSelf: 'center', height: 80, marginTop: 20}} onPress={onRegister}>
            <Text style = {{fontSize: 25, fontWeight: 300}}> Register </Text>
            

          </TouchableOpacity>
          {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Dashboard')}
      /> */}
        </View>
  </ImageBackground>

  );
}

const onlynumbers = (input) => {
  for (i in input) { 
  if (!isNaN(i) || input.length > 10) {
      alert('Please check the number and enter valid values only')
      return
  } 
}
}

const checkemail = (input) => {
  if (!('@gmail.com' || '@hotmail.com' || '@yahoo.com' in input)) {
    alert('enter a valid email address')
  }
}



function Dashboard() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
      },
    })
  return (
    <SafeAreaView style={styles.container}>
      <TableOne />
    </SafeAreaView>
  );
}
  

export default App;

