import React from "react";
import { View, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontWeight:"bold"
  }
});

const WalkerProfileTitle = () => {
  return (
    <View>
        <Text style={styles.text}>
          Walker Profile
        </Text>
    </View>
  );
}

export default WalkerProfileTitle;
