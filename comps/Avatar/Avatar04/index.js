import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";
import Avatar from "../BasicAvatar";

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
    
  },
  icon: {
    marginLeft:100
  },
});

const Avatar04 = ({text, image1, image2}) => {
  return (
      <View style={styles.container}
      >
        {/* <Image style={styles.avatar}
        source={image1} 
        />
         */}
        <Avatar
        image1={require('../dog3.jpg')}
         width={134}
         height={134}
         />
         <Image style={styles.icon}
        source={image2} 
        />
      </View>
  );
};

Avatar04.defaultProps = {
  // text: null,
    image1: null,
    image2: null,
};

export default Avatar04;