import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    // borderRadius: 4,
    // flexDirection: "row",
    // alignItems:"center",
    // justifyContent:"center",
  },
  text: {
    color: "#999",
    fontSize:16
  },
});

const Avatar = ({text, image1}) => {
  return (
      <View style={styles.container}  
      >
        <Image
        style={styles.leftArrow}
        source={image1}/>
        <Text style={styles.text}>{text}</Text>
      </View>
  );
};

Avatar.defaultProps = {
    text: null,
    // image1: require('./leftArrow.png'),
};

export default Avatar;