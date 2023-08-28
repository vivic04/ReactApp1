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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker'; 


export default function SettingsScreen({route}) {

        const { obj } = route.params
        const [selectedImage, setSelectedImage] = useState(obj.userimage)
        const launchimage1 = () => {
            const options = {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 2000,
              maxWidth: 2000,
            };
            launchImageLibrary(options, (response) => {
              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('Image picker error: ', response.error);
              } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
              }
            });
        
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
            <TouchableOpacity style={{ paddingTop: 10}} onPress={launchimage1}>
              <Image style={{ height: 130, width: 130, borderRadius: 100, }} source={{ uri: selectedImage }} />
            </TouchableOpacity>
          </View>
          </View>
          <Text style={{...styles.field, paddingTop: 30, textAlign: 'left', color: 'black',  fontSize: 18, paddingLeft: 20}}> Username </Text>
          <TextInput
            style={styles.textInput}
            placeholder={obj.title}
            TextColor={'black'}
          />
          <Text style={{...styles.field, paddingTop: 5, textAlign: 'left', color: 'black', fontSize: 18, paddingLeft: 20}}> Phone number </Text>
          <TextInput
            style={styles.textInput}
            placeholder={obj.phone}
            TextColor={'black'}
          />
          <Text style={{...styles.field, paddingTop: 5, textAlign: 'left', color: 'black', fontSize: 18, paddingLeft: 20}}> Email </Text>
          <TextInput
            style={styles.textInput}
            placeholder={obj.email}
            TextColor={'black'}
            keyboardType="email-address"
          />
          <Text style={{...styles.field, paddingTop: 5, textAlign: 'left', color: 'black', fontSize: 18, paddingLeft: 20}}> Task </Text>
          <TextInput
            style={styles.textInput}
            placeholder={obj.task}
            TextColor={'black'}
          />
        </View> 
    
      )
    
    }
    
   