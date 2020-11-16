import React from "react";
import { View, Text, StyleSheet} from "react-native";
import AvatarEdit from '../../Avatar/AvatarEdit';
import DogDislikes from "../../DogDislikes";

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
  },
  textcont1: {
      backgroundColor: "red",
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
      height:100,
      alignItems:"center",
  },
  textcont3: {
      backgroundColor: "lightgray",
      width:100,
      height:100,
      alignItems:"center",
  }

});

const AvatarDogProfile = ({}) => {
  
  return (
      <View style={styles.container}>
        <AvatarEdit 
        image2={require('../../Avatar/edit.png')}
        />
        <View style={styles.textcont1}></View>
        <View style={styles.textcont23}>
            <View style={styles.textcont2}>
              <DogDislikes/>
            </View>
            <View style={styles.textcont3}>
            <DogDislikes/>
            </View>
        </View>
      </View>
  );
};

AvatarDogProfile.defaultProps = {
    text: null,
    backgroundColor: null,
};

export default AvatarDogProfile;