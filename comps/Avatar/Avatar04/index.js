import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
    
  },
  avatar: {
    // position:"absolute",
    height:134,
    width:134,
    borderRadius:70,
    // position:"relative"
  },
  icon: {
    marginLeft:100
  },
});

const Avatar04 = ({text, image1, image2}) => {
  return (
      <View style={styles.container}
      >
        <Image style={styles.avatar}
        source={image1} 
        />
        <Image style={styles.icon}
        source={image2} 
        />
        {/* <Text style={styles.text}>{text}</Text> */}
      </View>
  );
};

Avatar04.defaultProps = {
  // text: null,
    image1: null,
    image2: null,
};

export default Avatar04;