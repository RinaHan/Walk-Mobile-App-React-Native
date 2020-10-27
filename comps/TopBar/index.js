import React from "react";
import { View, Image, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
    height:44,
    borderBottomColor:"#999",
    borderBottomWidth: 1,
    justifyContent:"space-between"
    
  },
  title: {
    color: "black",
    fontSize:22,
    fontWeight:"bold"
  },
  text1: {
    color: "black",
    fontSize:16,
    fontWeight:"bold",
    
    // display:"flexBetween"
    
  },
  text2: {
    color: "#53B7BE",
    fontSize:16,
    fontWeight:"bold"
  },
});

const TopBar = ({title, text1, text2, image1, image2}) => {
  return (
      <View style={styles.container}>
        <Text style={styles.text1}>{text1}</Text>
        <Image
        style={styles.leftArrow}
        source={image1}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text2}>{text2}</Text>
        <Image
        style={styles.rightArrow}
        source={image2}/>
      </View>
  );z
};

TopBar.defaultProps = {
    title: null,
    text1: null,
    text2: null,
    // image: require('./leftArrow.png'),
    image1: null,
    image2: null,
};

export default TopBar;