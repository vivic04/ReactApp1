/* eslint-disable react-native/no-inline-styles */
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
    borderRadius: 20,
  },
  item: {
    padding: 30,

    marginHorizontal: 16,
    borderWidth: 1.0,
    borderRadius: 20,
    fontSize: 15,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 300,
    textAlign: 'center',
  },
});

// export default TableOne;

import React, {useState} from 'react';

import {View, Text, FlatList, ScrollView} from 'react-native';
import {StyleSheet} from 'react-native'
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

// export function pushitem({route}) {
//   let newitem = route.params.obj
//   return (setData = {...data, newitem})
  
// }
const TableOne = ({navigation, route}) => {

  const [currentPage, setCurrentPage] = useState(0);
  const [firstname, setfirstname] = useState('')

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
    setfirstname(first);
  });


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
      <Text> {firstname}</Text>
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
};

export default TableOne;
