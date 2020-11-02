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
        <BasicButton 
        text="Dog Owner"  
        backgroundColor= "#53B7BE" 
        width={242}
        height={55}
        size={18}
        />
        </View>
        <View style={styles.contButton2}>
        <BasicButton 
        text="Dog Walker"  
        backgroundColor= "#53B7BE" 
        width={242}
        height={55}
        size={18}
        />
        </View>
      </View>
  );
};

export default Button02;