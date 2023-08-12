/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from 'react-native';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TableOne from './Tableone';
import { Image } from 'react-native';
import { pushitem } from './Tableone';


const Stack = createNativeStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Home"
          component={Registerscreen}
          options={{title: 'User Register'}}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name= "Userinfo" component = {Userinfo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

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


function Registerscreen({navigation}) {
  const obj = {
    title: textInputFirstName + textInputLastName,
    email: textInputEmail,
    phone: PhoneInputValue
  }
  const [textInputFirstName, setTextFirstInputName] = useState('');
  const [textInputLastName, setTextLastInputName] = useState('');
  const [textInputEmail, setTextInputEmail] = useState('');
  const [textInputPassword, setTextInputPassword] = useState('');
  const [TextInputConfirmPassword, setTextInputConfirmPassword] = useState('');
  const [PhoneInputValue, setPhoneInputValue] = useState('');
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
      navigation.navigate('Dashboard', {obj});
    }
    
  };
  return (
    <ImageBackground
      source={{
        uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      }}
      style={{borderRadius: 1, flex: 1}}>
      {/* <ImageBackground source={{uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'}} style = {{ height: 200, borderRadius: 1,}}> */}
      {/* <Text style = {{fontWeight: 800, justifyContent: 'center', 
    textAlign: 'center', flexDirection: 'column', paddingTop: 30, color: '#F2D0E4', fontSize: 30}}>
      Mindsprint Native 
  
    </Text> */}
      {/* </ImageBackground> */}
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
        {/* <Button 
            title="Register"
            onPress={checkTextInput}
          /> */}
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

function Dashboard() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <TableOne />
    </SafeAreaView>
  );
}

function Userinfo({route}) {
  const changeimage = () => { 
    route.params.item.userimage = 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Sheldon-J-Plankton.SpongeBob-SquarePants.webp'
  }
  return (
  <View>
    <View backgroundColor='navy'>
    <TouchableOpacity style = {{
        backgroundColor: 'navy',
        justifyContent: 'flex-end',
        paddingRight: 10,
        alignItems: 'flex-end',
        width: 100,
        alignSelf: 'flex-end',
        height: 40,
        marginTop: 5,
    }} >

      <Text style = {{fontSize: 15, color: 'white',}}> SAVE </Text>
    </TouchableOpacity>
      <View style={{ backgroundColor: 'navy', height: 200, alignItems: 'center' }}>
        <Text style={{ fontSize: 25, color: 'white' }}>
          Edit Profile

        </Text>
        <TouchableOpacity style={{ paddingTop: 10}} onPress={changeimage}>
          <Image style={{ height: 130, width: 130, borderRadius: 100, }} source={{ uri: route.params.item.userimage }} />
        </TouchableOpacity>
      </View>
      </View>
      <Text style={{...styles.field, paddingTop: 30, textAlign: 'left', color: 'black',  fontSize: 18, paddingLeft: 20}}> Username </Text>
      <TextInput
        style={styles.textInput}
        placeholder={route.params.item.title}
        placeholderTextColor={'black'}
      />
      <Text style={{...styles.field, paddingTop: 5, textAlign: 'left', color: 'black', fontSize: 18, paddingLeft: 20}}> Phone number </Text>
      <TextInput
        style={styles.textInput}
        placeholder={route.params.item.phone}
        placeholderTextColor={'black'}
      />
      <Text style={{...styles.field, paddingTop: 5, textAlign: 'left', color: 'black', fontSize: 18, paddingLeft: 20}}> Email </Text>
      <TextInput
        style={styles.textInput}
        placeholder={route.params.item.email}
        placeholderTextColor={'black'}
        keyboardType="email-address"
      />
      <Text style={{...styles.field, paddingTop: 5, textAlign: 'left', color: 'black', fontSize: 18, paddingLeft: 20}}> Task </Text>
      <TextInput
        style={styles.textInput}
        placeholder={route.params.item.task}
        placeholderTextColor={'black'}
      />
    </View> 

  )

}



export default App;
