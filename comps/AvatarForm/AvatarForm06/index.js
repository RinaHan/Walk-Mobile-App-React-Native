import React from "react";
import { View, Text, StyleSheet} from "react-native";
import Avatar04 from '../../Avatar/Avatar04';

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
  },
  textcont1: {
      backgroundColor: "lightgray",
      width:100,
      height:100
  },
  textcont23: {
    justifyContent:"space-between",
    flexDirection: "row",
      width:300,
      height:300
  },
  textcont2: {
      backgroundColor: "lightgray",
      width:100,
      height:100
  },
  textcont3: {
      backgroundColor: "lightgray",
      width:100,
      height:100
  }

});

const AvatarForm06 = ({}) => {
  
  return (
      <View style={styles.container}>
        <Avatar04 
        image2={require('../../Avatar/edit.png')}
        />
        <View style={styles.textcont1}></View>
        <View style={styles.textcont23}>
            <View style={styles.textcont2}></View>
            <View style={styles.textcont3}></View>
        </View>
      </View>
  );
};

AvatarForm06.defaultProps = {
    text: null,
    backgroundColor: null,
};

export default AvatarForm06;