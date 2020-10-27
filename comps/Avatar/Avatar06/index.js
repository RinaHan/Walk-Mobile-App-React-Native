import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
    // backgroundColor:"red"
  },
  avatar: {
    // position:"absolute",
    height:85,
    width:85,
    borderRadius:50,
    // position:"relative"
  },
  text: {
    color: "#53B7BE",
    fontSize:10,
    fontWeight:"bold"
  },
});

const Avatar06 = ({text, image1}) => {
  return (
      <View style={styles.container}
      >
        <Image style={styles.avatar}
        source={image1} 
        />
        <Text style={styles.text}>{text}</Text>
      </View>
  );
};

Avatar06.defaultProps = {
  text: null,
  image1: null,
    // image2: null,
};

export default Avatar06;