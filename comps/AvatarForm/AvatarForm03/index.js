import React from "react";
import { View, Text, StyleSheet} from "react-native";
import BasicAvatar from '../../Avatar/BasicAvatar';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems:"center",
    // justifyContent:"space-between",
    // width:"100%",
    
  },
  avatar: {
    marginLeft:20
  },
  textcont: {
    // alignItems:"center",
    justifyContent:"center",
    marginLeft:10,
    width:130
    
  },
  text1: {
    color: "black",
    fontSize:13,
    fontWeight:"bold"
  },
  text2: {
    fontSize: 9,
    color: "#53B7BE"
  },
  text3: {
    fontSize: 10,
    color: "#959494",
    justifyContent:"flex-end",
  },
});

const AvatarForm03 = ({}) => {
  
  return (
      <View style={styles.container}>
        <View style={styles.avatar}>
            <BasicAvatar 
            image1={require('../../Avatar/face2.jpg')}
            width={64}
            height={64}
            />
        </View>
        <View style={styles.textcont}>
            <Text style={styles.text1}>Mason K.</Text>
            <Text style={styles.text2}>View Profile</Text>
            <Text style={styles.text3}>Cute pup! I want to walk him/her!</Text>
        </View>
      </View>
  );
};

AvatarForm03.defaultProps = {
    // size: null,
    text: null,
    backgroundColor: null,
    // height: null
};

export default AvatarForm03;