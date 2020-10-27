import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
    // position:"relative"
  },
  avatar: {
    // position:"absolute",
    height:40,
    width:40,
    borderRadius:30, 
  },
  // text: {
  //   color: "#999",
  //   fontSize:16
  // },
});

const Avatar02 = ({text, image, width, height}) => {
  return (
      <View style={styles.container}
      >
        <Image style={styles.avatar}
        source={image} 
        // width={width}
        // height={height}
        />
        {/* <Text style={styles.text}>{text}</Text> */}
      </View>
  );
};

Avatar02.defaultProps = {
  // text: null,
    image: null,
    // width: null,
    // height: null
};

export default Avatar02;