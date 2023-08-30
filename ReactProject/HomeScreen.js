import React, {useState, useEffect } from 'react';
import {TouchableOpacity, View, Image, Text, FlatList} from 'react-native'
import Feed from './Feed';


export default function HomeScreen({navigation, route}) {

    const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [emailid, setemailid] = useState('')
  const [phonenumber, setphonenumber] = useState('')
  const [dataToShow, setDataToShow] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState([
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Vikram Barn ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Yash singh ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},
    { title: 'Ram Sharma ', task: 'work on something', userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8QZ72X2OjC-JXTaRtlom0O2lq60v729ZA&usqp=CAU', phone: '997123454', email: 'ram.sharma@gmail.com'},

  ]);

useEffect(() => {
//   const { first, last, email, phone } = route.params;
//   const fullname = first + ' ' + last;
//   const newObject = {
//     title: fullname,
//     email: email,
//     phone: phone,
//     userimage: 'https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg',
//   };

//   setData(prevData => [...prevData, newObject]);
}, []);

  const PAGE_SIZE = 13

  const startIndex = ((currentPage - 1) * PAGE_SIZE);

    const endIndex = startIndex + PAGE_SIZE;

    const newItems = data.slice(startIndex, endIndex);

const loadMoreData = () => {

    setDataToShow([...dataToShow, ...newItems]);
    setCurrentPage(currentPage + 1);

  };

  const renderItem = ({item}) => (
    
    <TouchableOpacity onPress={() => navigation.navigate('SettingScreen', { obj: item })}
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

  return (
    
    <>
    <FlatList

        data={data}

        keyExtractor={item => item.title}

        renderItem={renderItem}

        onEndReached={loadMoreData}

        onEndReachedThreshold={0.1} 
        
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
      </View>
  </>
      
  );
  
}
