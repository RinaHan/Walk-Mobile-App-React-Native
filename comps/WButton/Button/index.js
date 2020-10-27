import React from "react";
import { View, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
  },
  text: {
    color: "#FFF",
    fontSize:16
  },
});

const Button = ({
text, backgroundColor, height, width}) => {
  return (
      <View 
      style={styles.container} 
      backgroundColor={backgroundColor} 
      height={height}
      width={width} 
      >
        <Text style={styles.text}>{text}</Text>
      </View>
  );
};

Button.defaultProps = {
    text: null,
    backgroundColor: null,
    height: null
};

export default Button;