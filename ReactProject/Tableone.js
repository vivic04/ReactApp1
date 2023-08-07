// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
// } from 'react-native';


// const DATA = [
// 	{
// 	id: 1,
// 	  title: 'Rickey needs to ',
// 	  task: 'work on java app'
// 	},
// 	{
// 		id: 2,
// 	  title: 'Mickey needs to ',
// 	  task : 'finish working on client website'
// 	},
// 	{
// 		id: 3,
// 	  title: 'Shilpa needs to ',
// 	  task: 'work on building user tables'
// 	},
// 	{
// 		id: 4,
// 	  title: 'John needs to ',
// 	  task: 'work on building user register page'
// 	},
// 	{
// 		id: 5,
// 	  title: 'Justin needs to ',
// 	  task: 'work on optimization'
// 	},
// 	{
// 		id: 6,
// 	  title: 'Jake needs to ',
// 	  task: 'work on login page'
// 	},
	
// ];
  

// const TableOne = () => {
//     return (
//      <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
// 		keyExtractor={item => item.id}
//         renderItem={({item, task}) => <Item title={[item.title, item.task]}/>}
		
		
		
//       />
	  
//     </SafeAreaView>
//     )
// }
// const renderscreen = ({title, task}) => (
// 	<View style = {{padding: 15,  backgroundColor: 'blue', justifyContent: 'center'}}>
// 	<Text style={styles.title}>{title} </Text> 
// 	</View>
//   );

// const Item = ({title, task}) => (
//   <View style = {styles.item}>
// 	<View>
//     <Text style={styles.title}>{title} </Text> 
// 	<Text>{task}</Text>
// 	</View>
//   </View>
// );

const styles = StyleSheet.create({
  container: {
	borderRadius: 20
  },
  item: {
    padding: 30,
	height: 130,
    marginVertical: 8,
    marginHorizontal: 16,
	borderWidth: 1.0,
	borderRadius: 20,
	fontSize: 15
  },
  title: {
    fontSize: 20,
	color: "black",
	fontWeight: 300,
	textAlign: 'center',
	
  },
});

// export default TableOne;

import React, { useState } from 'react';

import { View, Text, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';

 

const TableOne = () => {

  const [data, setData] = useState([

    { id: 1, title: 'Ram', task: 'work' },

    { id: 2, title: 'Ram', task: 'work' },

    { id: 3, title: 'Ram', task: 'work' },

    { id: 4, title: 'Ram', task: 'work' },

  ]);

 
  const renderItem = ({ item }) => (

    <View style = {{ backgroundColor: '#dae7e4'}}>

      <Text style = {styles.title}>{item.title}</Text>

      <Text style = {styles.item}>{`Task: ${item.task}`}</Text>

    </View>

  );

 

  return (

    <View>

      <FlatList

        data={data}

        keyExtractor={(item) => item.id.toString()}

        renderItem={renderItem}

      />

    </View>

  );

};

 

export default TableOne;