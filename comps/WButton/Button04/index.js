import React from "react";
import { View, StyleSheet} 
from "react-native";
import Button from "../BasicButton"

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
      <BasicButton
        text="Cancel"  
        backgroundColor= "#999" 
        height={45}
        width={137}
        />
        </View>
        <View style={styles.contButton2}>
        <BasicButton
        text="Write a Review"  
        backgroundColor= "#565555" 
        height={45}
        width={137}
        />
        </View>
      </View>
  );
};

export default Button04;