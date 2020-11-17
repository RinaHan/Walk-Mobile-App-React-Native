import React from "react";
import { View, StyleSheet } from "react-native";
// import WriteReview from "./Comps/WriteReview";
import UserInfo from "../UserInfo";
import FooterBar from "../FooterBar";

const styles = StyleSheet.create({
  walkprofileCont: {
    flexDirection: "column"
  },
  // writereviewCont: {
  //   marginTop: 280,
  //   marginLeft: 10
  // },
  footerCont: {
    position: "absolute",
    marginTop: 600
  }
});

const WalkerProfilePage = () => {
  return (
    <View>
      <View style={styles.walkprofileCont}>
        <UserInfo />
        {/* <View style={styles.writereviewCont}>
          // <WriteReview />
        </View> */}
        <View style={styles.footerCont}>
          <FooterBar />
        </View>
      </View>
    </View>
  );
};


export default WalkerProfilePage;
