import React, {useState} from "react";
import {View, Text, StyleSheet, FlatList, Alert, TextInput, Button, ScrollView } from "react-native";
import Products from './components/Products.jsx';
import AddProducts from './components/AddProduct.jsx';

export default function App() {
  
  
  const [myProducts, setMyProducts ] = useState([]);

  
  
  const submitHandler = (product,) => {
    if (product.length > 1) {
      const idString = Date.now().toString();
      setMyProducts ( currentMyProducts => [{ key: idString, name: product }, ... currentMyProducts]);
    } else {
      Alert.alert('Désoler', 'Nombre de caractères insuffisant', [
        {
          text: 'Ok',
          onPress: () => console.warn('Refusé')
        },
        {
          text: `d'accord`,
          onPress: () => console.warn('Refusé')
        },
        {
          text:`Yes`,
          onPress: () => console.warn('Refusé')
        }
      ],
      {
        cancelable: true,
        onDismiss: () => console.warn('Dismissed')
      }
    )
    }
    
  }

const deleteProduct = (key) => {
    setMyProducts( currentMyProducts => {
      return currentMyProducts.filter( product => product.key != key )
    } )
}



  return(
    <View style={styles.container}>
      <AddProducts submitHandler={submitHandler} />


  <FlatList
    data={ myProducts }
    renderItem={( { item } ) => (
    <Products 
    name={item.name}
    idString={item.key}
    deleteProduct={deleteProduct}
    />
  )}
 />

    </View>
  );
 }

  const styles = StyleSheet.create({
  container:{
    padding: 40,
    paddingTop:60,
  },

  items:{
    marginTop: 10,
  },
  element:{
    backgroundColor:"#ffb6c1",
    padding: 20,
    fontSize: 17,
    marginVertical: 6,
  },
  

  }); 
