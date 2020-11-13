import React from "react";
import { View, StyleSheet } from "react-native";
import ReviewStars from "./Comps/ReviewStars";
import YourReview from "./Comps/YourReview";
import ShareFeedback from "./Comps/ShareFeedback";
import FootBar from "./Comps/FootBar";

const LeaveReview = () => {
  return (
    <View>
      <View style={styles.mainCont}>
        <View style={styles.leavereviewCont}>
          <ReviewStars />
          <View style={styles.feedbackstarsCont}>
            <View style={styles.shareCont}>
              <ShareFeedback />
            </View>
            <YourReview numstar={3} />
          </View>
        </View>
        <View style={styles.footerCont}>
          <FootBar />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    flexDirection: "column"
  },

  leavereviewCont: {
    marginLeft: 20
  },
  feedbackstarsCont: {
    marginTop: 100
  },
  footerCont: {
    position: "absolute",
    marginTop: 600
  },
  shareCont: {
    top: 200
  }
});

export default LeaveReview;
