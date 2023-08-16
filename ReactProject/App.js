/* eslint-disable react-native/no-inline-styles */
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
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registerscreen">
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
  const newElement =  {title: textInputFirstName + textInputLastName , phone: PhoneInputValue, email: textInputEmail}

//   function on() {
//   // TableOne.setdata(oldArray => [...oldArray, newElement])
//   navigation.navigate('Dashboard')
// }
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
        navigation.navigate('Dashboard', {first: textInputFirstName, last:textInputLastName , email: textInputEmail, phone: PhoneInputValue});
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

function Dashboard({navigation, route}) {

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: 'white',
  //   },
  // });
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <TableOne />
  //   </SafeAreaView>
  // );
  const [currentPage, setCurrentPage] = useState(0);
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')

  const [data, setData] = useState([
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},

    { title: 'Aditya Chauhan', task: ' do some work', userimage: 'https://www.spongebobshop.com/cdn/shop/products/SB-Standees-Spong-3_800x.jpg?v=1603744568',  phone: '7756804', email: 'aditya.chauchan@gmail.com'},

    { title: 'John bosh', task: 'work on helloword', userimage: 'https://miro.medium.com/v2/resize:fit:1024/0*YjYX05Vdd6K8UOY8.png',  phone: '546809586', email: 'john.bosh@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},

    { title: 'Aditya Chauhan', task: ' do some work', userimage: 'https://www.spongebobshop.com/cdn/shop/products/SB-Standees-Spong-3_800x.jpg?v=1603744568',  phone: '7756804', email: 'aditya.chauchan@gmail.com'},

    { title: 'John bosh', task: 'work on helloword', userimage: 'https://miro.medium.com/v2/resize:fit:1024/0*YjYX05Vdd6K8UOY8.png',  phone: '546809586', email: 'john.bosh@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},

    { title: 'Aditya Chauhan', task: ' do some work', userimage: 'https://www.spongebobshop.com/cdn/shop/products/SB-Standees-Spong-3_800x.jpg?v=1603744568',  phone: '7756804', email: 'aditya.chauchan@gmail.com'},

    { title: 'John bosh', task: 'work on helloword', userimage: 'https://miro.medium.com/v2/resize:fit:1024/0*YjYX05Vdd6K8UOY8.png',  phone: '546809586', email: 'john.bosh@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},

    { title: 'Aditya Chauhan', task: ' do some work', userimage: 'https://www.spongebobshop.com/cdn/shop/products/SB-Standees-Spong-3_800x.jpg?v=1603744568',  phone: '7756804', email: 'aditya.chauchan@gmail.com'},

    { title: 'John bosh', task: 'work on helloword', userimage: 'https://miro.medium.com/v2/resize:fit:1024/0*YjYX05Vdd6K8UOY8.png',  phone: '546809586', email: 'john.bosh@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},

    { title: 'Aditya Chauhan', task: ' do some work', userimage: 'https://www.spongebobshop.com/cdn/shop/products/SB-Standees-Spong-3_800x.jpg?v=1603744568',  phone: '7756804', email: 'aditya.chauchan@gmail.com'},

    { title: 'John bosh', task: 'work on helloword', userimage: 'https://miro.medium.com/v2/resize:fit:1024/0*YjYX05Vdd6K8UOY8.png',  phone: '546809586', email: 'john.bosh@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},

    { title: 'Aditya Chauhan', task: ' do some work', userimage: 'https://www.spongebobshop.com/cdn/shop/products/SB-Standees-Spong-3_800x.jpg?v=1603744568',  phone: '7756804', email: 'aditya.chauchan@gmail.com'},

    { title: 'John bosh', task: 'work on helloword', userimage: 'https://miro.medium.com/v2/resize:fit:1024/0*YjYX05Vdd6K8UOY8.png',  phone: '546809586', email: 'john.bosh@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},

    { title: 'Aditya Chauhan', task: ' do some work', userimage: 'https://www.spongebobshop.com/cdn/shop/products/SB-Standees-Spong-3_800x.jpg?v=1603744568',  phone: '7756804', email: 'aditya.chauchan@gmail.com'},

    { title: 'John bosh', task: 'work on helloword', userimage: 'https://miro.medium.com/v2/resize:fit:1024/0*YjYX05Vdd6K8UOY8.png',  phone: '546809586', email: 'john.bosh@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},

    { title: 'Aditya Chauhan', task: ' do some work', userimage: 'https://www.spongebobshop.com/cdn/shop/products/SB-Standees-Spong-3_800x.jpg?v=1603744568',  phone: '7756804', email: 'aditya.chauchan@gmail.com'},

    { title: 'John bosh', task: 'work on helloword', userimage: 'https://miro.medium.com/v2/resize:fit:1024/0*YjYX05Vdd6K8UOY8.png',  phone: '546809586', email: 'john.bosh@gmail.com'},
    
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},

    { title: 'Aditya Chauhan', task: ' do some work', userimage: 'https://www.spongebobshop.com/cdn/shop/products/SB-Standees-Spong-3_800x.jpg?v=1603744568',  phone: '7756804', email: 'aditya.chauchan@gmail.com'},

    { title: 'John bosh', task: 'work on helloword', userimage: 'https://miro.medium.com/v2/resize:fit:1024/0*YjYX05Vdd6K8UOY8.png',  phone: '546809586', email: 'john.bosh@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},

    { title: 'Aditya Chauhan', task: ' do some work', userimage: 'https://www.spongebobshop.com/cdn/shop/products/SB-Standees-Spong-3_800x.jpg?v=1603744568',  phone: '7756804', email: 'aditya.chauchan@gmail.com'},

    { title: 'John bosh', task: 'work on helloword', userimage: 'https://miro.medium.com/v2/resize:fit:1024/0*YjYX05Vdd6K8UOY8.png',  phone: '546809586', email: 'john.bosh@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},

    { title: 'Aditya Chauhan', task: ' do some work', userimage: 'https://www.spongebobshop.com/cdn/shop/products/SB-Standees-Spong-3_800x.jpg?v=1603744568',  phone: '7756804', email: 'aditya.chauchan@gmail.com'},

    { title: 'John bosh', task: 'work on helloword', userimage: 'https://miro.medium.com/v2/resize:fit:1024/0*YjYX05Vdd6K8UOY8.png',  phone: '546809586', email: 'john.bosh@gmail.com'},
    
  ]);

  // const getval = () => {
  //   setData = (olddata => [...olddata, [first + last, email, phone]])
  //   const {first, last, email, phone} = route.params;
  
  // }

  useEffect(() => {
    const {first, last, email, phone} = route.params;
    object = {title: firstname+ ''+lastname , email: email, phone:phone};
    setfirstname(first);
    setlastname(last);
    setemail(email);
    setphone(phone);

  });

  useEffect(() => {
    
    const {first, last, email, phone} = route.params;
    title1 = firstname + '' + lastname
    object = {title: title1 , email: email, phone:phone};
    setfirstname(first);
    setlastname(last);
    setemail(email);
    setphone(phone);
    newdata = data.push(object)
    setData(newdata)
  })

  const PAGE_SIZE = 13

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate('Userinfo', { item })}
      style={{
        alignSelf: 'center',
        width: '100%',
        borderBottomWidth: 1.0,
        borderColor: 'lightgrey',
        paddingVertical: 8,
        flexDirection: 'row'
      }}>
      <View style = {{justifyContent: 'center', alignItems: 'center', padding: 5}}>
      <Image style={{height: 30, width: 32, borderRadius: 100,
      }} source={{uri: item.userimage}}/>
      </View>
      <View style = {{}}> 
      <Text style={{paddingBottom: 2}}>
        {' '}
        {item.title}{' '}
      </Text>
      <Text style = {{}}> 
        {`Task: ${item.task}`} </Text>
      </View>
    </TouchableOpacity>
    
  );


  const startIndex = currentPage * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const pageData = data.slice(startIndex, endIndex);


  return (
    <>
      <FlatList
        data={pageData}
        // keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() => setCurrentPage(Math.max(currentPage - 1, 0))}
          style={{ marginHorizontal: 10, padding: 5 }}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentPage(currentPage + 1)}
          style={{ marginHorizontal: 10, padding: 5 }}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </>
      
  );
  
}

function Userinfo({route}) {
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
        <TouchableOpacity style={{ paddingTop: 10}}>
          <Image style={{ height: 130, width: 130, borderRadius: 100, }} source={{ uri: route.params.item.userimage }} />
        </TouchableOpacity>
      </View>
      </View>
      <Text style={{...styles.field, paddingTop: 30, textAlign: 'left', color: 'black',  fontSize: 18, paddingLeft: 20}}> Username </Text>
      <TextInput
        style={styles.textInput}
        placeholder={route.params.item.title}
        TextColor={'black'}
      />
      <Text style={{...styles.field, paddingTop: 5, textAlign: 'left', color: 'black', fontSize: 18, paddingLeft: 20}}> Phone number </Text>
      <TextInput
        style={styles.textInput}
        placeholder={route.params.item.phone}
        TextColor={'black'}
      />
      <Text style={{...styles.field, paddingTop: 5, textAlign: 'left', color: 'black', fontSize: 18, paddingLeft: 20}}> Email </Text>
      <TextInput
        style={styles.textInput}
        placeholder={route.params.item.email}
        TextColor={'black'}
        keyboardType="email-address"
      />
      <Text style={{...styles.field, paddingTop: 5, textAlign: 'left', color: 'black', fontSize: 18, paddingLeft: 20}}> Task </Text>
      <TextInput
        style={styles.textInput}
        placeholder={route.params.item.task}
        TextColor={'black'}
      />
    </View> 

  )

}


export default App;
