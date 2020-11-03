import React from "react";
import { View, Text, StyleSheet} from "react-native";
import BasicAvatar from '../../Avatar/BasicAvatar';

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
    position:"absolute",
    right:30,
    backgroundColor:"#53B7BE",
    width:15,
    height:15,
    borderRadius:10
  },
});

const AvatarForm02 = ({}) => {
  
  return (
      <View style={styles.container}>
        <View style={styles.avatar}>
        <BasicAvatar 
        image1={require('../../Avatar/face1.jpg')}
        width={64}
        height={64}
        />
        </View>
        <View style={styles.textcont}>
        <Text style={styles.text1}>Bob S.</Text>
        <Text style={styles.text2}>Such great weather today!</Text>
        </View>
        <View style={styles.dotcont}>
        </View>
      </View>
  );
};

AvatarForm02.defaultProps = {
    // size: null,
    text: null,
    backgroundColor: null,
    // height: null
};

export default AvatarForm02;