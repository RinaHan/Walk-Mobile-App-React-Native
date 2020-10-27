import React from "react";
import { View, Text, Image StyleSheet} from "react-native";

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

const Avatar = ({text, backgroundColor, height}) => {
  return (
      <View 
      style={styles.container} 
      backgroundColor={backgroundColor} 
      height={height} 
      >
          <Image/>
        <Text style={styles.text}>{text}</Text>
      </View>
  );
};

Avatar.defaultProps = {
    text: null,
    backgroundColor: null,
    height: null
};

export default Avatar;