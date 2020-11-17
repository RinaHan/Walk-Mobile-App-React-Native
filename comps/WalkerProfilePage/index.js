import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
// import WriteReview from "./Comps/WriteReview";
// import UserInfo from "../UserInfo";
import FooterBar from "../FooterBar";
import WriteReview from "../WriteReview";

const styles = StyleSheet.create({
  walkprofileCont: {
    flexDirection: "column"
  },
  // writereviewCont: {
  //   marginTop: 280,
  //   marginLeft: 10
  // },
  footerCont: {
  
    marginTop: 600
  }
});

const WalkerProfilePage = () => {
  return (
    <View>
      <ScrollView>
      <View style={styles.walkprofileCont}>
        {/* <UserInfo /> */}
        <View style={styles.writereviewCont}>
          <WriteReview />
        </View>
      </View>
        <View style={styles.footerCont}>
          <FooterBar />
        </View>
      </ScrollView>
    </View>
  );
};


export default WalkerProfilePage;
