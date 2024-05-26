import React from "react";
import {View, Text, StyleSheet, Pressable,} from "react-native";


const Products = ( {name , deleteProduct , idString} ) => {

    return(
      <Pressable
        onPress={() => deleteProduct(idString)}
      >
        <View style={styles.items}>
            <Text style={styles.element}>{name}</Text>
        </View>
        </Pressable>
    )

}





const styles = StyleSheet.create({
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

export default Products