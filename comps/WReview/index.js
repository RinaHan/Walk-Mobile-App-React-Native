import React from "react";
import { View, Text, StyleSheet, 
    // TouchableOpacity 
} from "react-native";

const styles = StyleSheet.create({
  cont: {
    flexDirection: "column",
  },
  contButton1: {
    marginBottom:15
  }
});

const Review = () => {
  return (
      <View style={styles.cont} >
        <View style={styles.contButton1}>
        <Button 
        text="Activate Walk"  
        backgroundColor= "#38BC64" 
        height={26}
        // width={150}
        />
        </View>
        <Button 
        text="Decline"  
        backgroundColor= "#C74C33" 
        height={26}
        // width={150}
        />
      </View>
    
  );
};

export default Review;