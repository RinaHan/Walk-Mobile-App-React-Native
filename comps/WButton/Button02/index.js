import React from "react";
import { View, Text, StyleSheet, 
    // TouchableOpacity 
} from "react-native";
import Button from "../BasicButton"

const styles = StyleSheet.create({
    cont: {
      flexDirection: "column",
    },
    contButton1: {
      marginBottom: 45,
    },
  });

const Button02 = () => {
  return (
    <View style={styles.cont}>
        <View style={styles.contButton1}>
        <Button 
        text="Dog Owner"  
        backgroundColor= "#53B7BE" 
        height={55}
        />
        </View>
        <View style={styles.contButton2}>
        <Button 
        text="Dog Walker"  
        backgroundColor= "#53B7BE" 
        height={55}
        />
        </View>
      </View>
  );
};

export default Button02;