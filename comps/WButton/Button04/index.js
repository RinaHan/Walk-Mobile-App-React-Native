import React from "react";
import { View, StyleSheet} 
from "react-native";
import Button from "../Button"

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    alignContent:"center",
    justifyContent:"center",
  },
  contButton1: {
    marginRight:20
  },
});

const Button04 = () => {
  return (
      <View style={styles.cont}>
        <View style={styles.contButton1}>
      <Button
        text="Cancel"  
        backgroundColor= "#999" 
        height={45}
        width={140}
        />
        </View>
        <View style={styles.contButton2}>
        <Button
        text="Write a Review"  
        backgroundColor= "#565555" 
        height={45}
        width={140}
        />
        </View>
      </View>
  );
};

export default Button04;