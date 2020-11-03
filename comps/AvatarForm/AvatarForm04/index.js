import React from "react";
import { View, Text, StyleSheet} from "react-native";
import AvatarForm03 from "../AvatarForm03";
import Button01 from "../../WButton/Button01";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems:"center",
    // justifyContent:"center",
  },
});

const AvatarForm04 = ({}) => {
  
  return (
      <View style={styles.container}>
        <AvatarForm03/>
        <Button01 style={styles.button01}/>
      </View>
  );
};

AvatarForm04.defaultProps = {
    // size: null,
    text: null,
    backgroundColor: null,
    // height: null
};

export default AvatarForm04;