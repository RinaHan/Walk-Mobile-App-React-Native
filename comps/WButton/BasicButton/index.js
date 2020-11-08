import React from "react";
import { View, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    // flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
  },
  text: {
    color: "#FFF",
    fontSize:16
  },
});

const BasicButton = ({text, size, backgroundColor, height, width}) => {
  
  const fontSize = [{ fontSize: size ? size : 16}] ;
  const widthstyles = [{ width: width ? width : null} , { height: height ? height : 50}] ;
  const sizestyles = [styles.container, widthstyles];
  const fontstyle = [styles.text, fontSize];
  
  return (
      <View 
      style={sizestyles} 
      backgroundColor={backgroundColor} 
      >
        <Text style={fontstyle}>{text}</Text>
      </View>
  );
};

BasicButton.defaultProps = {
    // size: null,
    text: null,
    backgroundColor: null,
    // height: null
};

export default BasicButton;