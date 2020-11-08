import React from "react";
import { View, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems:"center",
    // justifyContent:"space-between",
  },
  avatar: {
    marginLeft:20
  },
  textcont: {
    // alignItems:"center",
    justifyContent:"center",
    marginLeft:10,
    
    
  },
  text1: {
    color: "black",
    fontSize:13,
    fontWeight:"bold"
  },
  text2: {
    fontSize: 13,
    color: "black"
  },

  dotcont: {
    marginLeft:70,
    width:15,
    height:15,
    borderRadius:10
  },
});

const AvatarFormText = ({textname, text, backgroundColor}) => {
  
  return (
      <View style={styles.container}>
        <View style={styles.avatar}>
        </View>
        <View style={styles.textcont}>
        <Text style={styles.text1}>{textname}</Text>
        <Text style={styles.text2}>{text}</Text>
        </View>
        <View style={styles.dotcont} backgroundColor={backgroundColor}></View>
      </View>
  );
};

AvatarFormText.defaultProps = {
    textname: null,
    text: null,
    backgroundColor: null,
    // height: null
};

export default AvatarFormText;