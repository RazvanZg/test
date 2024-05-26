import React, {useState} from "react";
import {View, StyleSheet,TextInput ,Button} from "react-native";

const AddProducts = ( { submitHandler } ) => {

  const [product, setProduct ] = useState('');
  const inputHandler = (val) => {
    setProduct(val)
  }

  const handleClick = () => {
    submitHandler(product);
    setProduct('');

  }


    return (
    <View style={styles.inputContainer}>
       <TextInput
          style={styles.textInput}
          placeholder="Nouveau Produit"
          onChangeText={ inputHandler }
          value={ product }
      />
      <Button
          title="Valider"
          onPress= { handleClick }
      />
 </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: "row",
        marginBottom: 15,
      },
      textInput:{
        borderColor: "grey",
        borderWidth: 1,
        padding: 5,
        paddingLeft: 9,
        fontSize: 18,
        flexGrow: 1,
      },
})

export default AddProducts