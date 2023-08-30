import React, {useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList
} from 'react-native';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { openImagePicker } from './image'
import { launchImageLibrary } from 'react-native-image-picker'; 
import BottomTab from './BottomTab';
import { Home } from './App';

const styles = StyleSheet.create({
    textInput: {
      textAlign: 'center',
  
      height: 50,
  
      borderWidth: 1.2,
  
      borderRadius: 10,
  
      marginHorizontal: 20,
      marginVertical: 5,
      fontSize: 20,
      backgroundColor: '#DFDBE4',
      fontFamily: 'Aeonik',
    },
    field: {
      fontFamily: 'Aeonik',
      textAlign: 'center',
      padding: 8,
      fontSize: 25,
      color: 'white',
    },
    //   button : {
    //     borderRadius: 10,
    //     paddingVertical:2,
    //     height: 60,
    //     marginTop: 40,
  
    //   },
  });
  
export default function RegisterScreen({navigation}) {
    const newElement =  {title: textInputFirstName + textInputLastName , phone: PhoneInputValue, email: textInputEmail}
  
    const [textInputFirstName, setTextFirstInputName] = useState('');
    const [textInputLastName, setTextLastInputName] = useState('');
    const [textInputEmail, setTextInputEmail] = useState('');
    const [textInputPassword, setTextInputPassword] = useState('');
    const [TextInputConfirmPassword, setTextInputConfirmPassword] = useState('');
    const [PhoneInputValue, setPhoneInputValue] = useState('');
    const [reguse, setreguse] = useState([]);
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
      // else if (textInputEmail.trim()) {
      //   checkemail(textInputEmail);
      //   return;
      // }
      if (
        !textInputEmail.includes('@gmail.com' || '@hotmail.com' || '@yahoo.com')
      ) {
        alert('Please enter a valid email address');
        return;
      }
      if (!PhoneInputValue.trim()) {
        alert('Please Enter Phone number');
        return;
      } else if (PhoneInputValue.trim()) {
        const pattern = new RegExp(/\d/);
        for (let i = 0; i < PhoneInputValue.length; i++) {
          if (
            !pattern.test(PhoneInputValue[i]) ||
            PhoneInputValue.length > 10 ||
            PhoneInputValue.length < 8
          ) {
            alert('Please Enter a valid number');
            return;
          }
        }
      }
      if (!textInputPassword.trim()) {
        alert('Please Enter Password');
        return;
      } else if (textInputPassword !== TextInputConfirmPassword) {
        // console.warn('Passwords do not match');
        alert('Passwords do not match');
        return;
      } else if (textInputPassword.trim()) {
        validate(textInputPassword);
        return;
      }
    };
  
  
    const navigateTodashboard = () => { 
  
          navigation.navigate('Home', {first: textInputFirstName, last:textInputLastName , email: textInputEmail, phone: PhoneInputValue});
           };
  
    const validate = password => {
      var strength = 0;
      var tips = '';
      if (password.length < 6) {
        tips += 'Too short ';
      }
  
      if (password.length > 7) {
        strength += 1;
      }
  
      if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
        strength += 1;
      } else {
        tips += 'Try capital and small letters ';
      }
  
      if (password.match(/\d/)) {
        strength += 1;
      } else {
        tips += 'try letters ';
      }
      if (password.match(/[^a-zA-Z\d]/)) {
        strength += 1;
      } else {
        tips += 'try special characters ';
      }
  
      if (strength < 2) {
        var issue = 'Easy to guess. ' + tips;
        alert(issue);
      } else if (strength == 2) {
        issue = 'Medium difficulty. ' + tips;
        alert(issue);
      } else if (strength == 3) {
        issue = 'Difficult. ' + tips;
        alert(issue);
      } else {
        navigateTodashboard();
        ;
  
      }
  
    };
    return (
      <ImageBackground
        source={{
          uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        }}
        style={{borderRadius: 1, flex: 1}}>
        <Text style={{...styles.field, paddingTop: 30}}> First name</Text>
        <TextInput
          ref= {(el) => { this.firstname = el; }}
          style={styles.textInput}
          placeholder="Enter First Name here"
          onChangeText={value => setTextFirstInputName(value)}
          value4= {textInputFirstName}
        />
        <Text style={styles.field}> Last name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Last Name here"
          onChangeText={value => setTextLastInputName(value)}
          value3 = {textInputLastName}
        />
        <Text style={styles.field}> Email </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Email here"
          keyboardType="email-address"
          onChangeText={value => setTextInputEmail(value)}
          value2 = {textInputEmail}
        />
        <Text style={styles.field}> Phone Number </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Phone number here"
          keyboardType="numeric"
          onChangeText={value => setPhoneInputValue(value)}
          value1 = {PhoneInputValue}
        />
  
        <Text style={styles.field}> Password </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Password here"
          onChangeText={value => setTextInputPassword(value)}
          secureTextEntry={true}
        />
        <Text style={styles.field}> Confirm Password </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password here"
          onChangeText={value => setTextInputConfirmPassword(value)}
          secureTextEntry={true}
        />
  
        <View style={styles.button}>
  
          <TouchableOpacity
            style={{
              backgroundColor: 'lightcoral',
              paddingBottom: 5,
              justifyContent: 'center',
              alignItems: 'center',
              width: 400,
              alignSelf: 'center',
              height: 80,
              marginTop: 20,
            }}
            onPress={onRegister}>
            <Text style={{fontSize: 25, fontWeight: 300}}> Register </Text>
          </TouchableOpacity>
          {/* <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Dashboard')}
        /> */}
        </View>
      </ImageBackground>
    );
  }

  