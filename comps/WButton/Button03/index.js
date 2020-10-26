import React from "react";
import { View, Text, StyleSheet, 
    // TouchableOpacity 
} from "react-native";
import Button from "../BasicButton"


const Button03 = () => {
  return (
    <View>
        <Button 
        text="Continue"  
        backgroundColor= "#53B7BE" 
        height={45}
        />
        </View>
  );
};

export default Button03;