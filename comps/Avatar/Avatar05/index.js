import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";
import Avatar from "../BasicAvatar";

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
    // backgroundColor:"red"
    
  },
  // avatar: {
  //   // position:"absolute",
  //   height:134,
  //   width:134,
  //   borderRadius:70,
  //   // position:"relative"
  // },
  text: {
    color: "black",
    fontSize:16,
    fontWeight:"bold"
    
  },
});

const Avatar05 = ({text, image1}) => {
  return (
      <View style={styles.container}
      >
        <Avatar
        image1={require('../face2.jpg')}
         width={134}
         height={134}
         />
        <Text style={styles.text}>{text}</Text>
      </View>
  );
};

Avatar05.defaultProps = {
  text: null,
  image1: null,
    // image2: null,
};

export default Avatar05;