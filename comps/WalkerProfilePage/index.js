import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import TopBar from "../TopBar";
import FooterBar from "../FooterBar";
import UserBio from "../UserBio";
import WriteReview from "../WriteReview";
import LocationAge from "../LocationAge";

const styles = StyleSheet.create({
  app: {
    height:"100%",

  },
  Cont: {
    display:"flex",
    flexDirection: "column",
    backgroundColor:"red"
  },
 
  footerCont: {
  
  }
});

const WalkerProfilePage = () => {
  return (
    <View style={styles.app}>
      <TopBar title="Inbox" />
      <ScrollView>
        <View style={styles.Cont}>
          <LocationAge/>
          <UserBio />
          <WriteReview />
        
        </View>
        
        
      </ScrollView>
          <FooterBar />
    </View>
  );
};


export default WalkerProfilePage;
