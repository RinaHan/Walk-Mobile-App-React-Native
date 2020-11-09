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

const AvatarEdit = ({imageedit}) => {
  return (
      <View style={styles.container}
      >
        <Avatar
        image1={require('../dog3.jpg')}
         width={134}
         height={134}
         />
         <Image style={styles.icon}
        source={imageedit}
        />
      </View>
  );
};

AvatarEdit.defaultProps = {
  // text: null,
    image1: null,
    imageedit: null,
};

export default AvatarEdit;