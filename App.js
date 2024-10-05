import {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name:'koko', id:'1'},
    {name:'kyomah', id:'2'},
    {name:'muganyizi', id:'3'},
    {name:'ayonah', id:'4'},
    {name:'ayonah', id:'5'},
    {name:'ayonah', id:'6'},
    {name:'ayonah', id:'7'}
  ])

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
        return prevPeople.filter(person => person.id != id);
    } );

  }
 
  return (
    <View style={styles.container} >
         {/* <ScrollView >
          {people.map((item)=> {
            return(
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            )
          })}
            
         </ScrollView> */}
    { /*
      FlatList is the best way to render component no need to pass key
    */ }

      <FlatList
      numColumns={2}
      keyExtrector={(item) => item.id}
       data={people}
       renderItem={({item}) => (
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
           <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
       )}
      />
         
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    marginTop:20
  },
 item:{
  marginTop:24,
  padding:30,
  backgroundColor:'pink',
  fontSize:24,
  marginHorizontal:10,
  marginTop:24


 }

});
