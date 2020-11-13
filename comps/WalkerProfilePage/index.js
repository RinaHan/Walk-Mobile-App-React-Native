import React from "react";
import { View, StyleSheet } from "react-native";
import WriteReview from "./Comps/WriteReview";
import UserInfo from "./Comps/UserInfo";
import FootBar from "./Comps/FootBar";

const WalkProfile = () => {
  return (
    <View>
      <View style={styles.walkprofileCont}>
        <UserInfo />
        <View style={styles.writereviewCont}>
          <WriteReview />
        </View>
        <View style={styles.footerCont}>
          <FootBar />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  walkprofileCont: {
    flexDirection: "column"
  },
  writereviewCont: {
    marginTop: 280,
    marginLeft: 10
  },
  footerCont: {
    position: "absolute",
    marginTop: 600
  }
});

export default WalkProfile;
