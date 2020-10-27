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
    height:64,
    width:64,
    borderRadius:30, 
  },
});

const Avatar03 = ({text, image, width, height}) => {
  return (
      <View style={styles.container}
      >
        <Image style={styles.avatar}
        source={image} 
        // width={width}
        // height={height}
        />
      </View>
  );
};

Avatar03.defaultProps = {
    image: null,
    // width: null,
    // height: null
};

export default Avatar03;