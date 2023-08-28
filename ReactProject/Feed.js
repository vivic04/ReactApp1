import React from 'react'
import {View, Text, Button} from 'react-native'
import HomeScreen from './HomeScreen'

const Feed = ({navigation}) => {
    
    const navigateTodashboard = () => { 
        navigation.navigate('HomeScreen')
};
  return (
    <View>
        <Text> This is Feed Screen </Text>
        <Button  title = 'Button' onPress={navigateTodashboard}></Button>
    </View>

  )
}


export default Feed