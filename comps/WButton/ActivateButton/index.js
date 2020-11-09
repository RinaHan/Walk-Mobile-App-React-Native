import React from "react";
import { View, Text, StyleSheet, 
    // TouchableOpacity 
} from "react-native";
import BasicButton from "../BasicButton"

const styles = StyleSheet.create({
  cont: {
    flexDirection: "column",
  },
  contButton1: {
    marginBottom:10
  }
});

const ActivateButton = () => {
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
      </View>
    
  );
};

export default ActivateButton;