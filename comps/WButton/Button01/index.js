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
    marginBottom:15
  }
});

const Button01 = () => {
  return (
      <View style={styles.cont} >
        <View style={styles.contButton1}>
        <BasicButton 
        text="Activate Walk"  
        backgroundColor= "#38BC64" 
        height={26}
        width={91}
        size={14}
        />
        </View>
        <BasicButton 
        text="Decline"  
        backgroundColor= "#C74C33" 
        height={26}
        width={91}
        size={14}
        />
      </View>
    
  );
};

export default Button01;