import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Description from "../../Comps/Description";
import Dropdown from "../../Comps/Dropdown";
import Input from "../../Comps/Input";
import Likes from "../../Comps/Likes";
import Popup from "../../Comps/Popup";
import Texting from "../../Comps/Texting";
import Post from "../../Comps/Post";
import WalkerProfile from "../../Comps/WalkerProfile";
import MsgSent from "../../Comps/MsgSent";
import MsgSelection from "../../Comps/MsgSelection";
import Birthday from "../../Comps/Birthday";
import MsgRecieved from "../../Comps/MsgRecieved";
import DashDog from "../../Comps/DashDog";
import DashOwner from "../../Comps/DashOwner";
import AddImage from "../../Comps/AddImage";
import Spacer from "../../Comps/Spacer";
import TopBar from "../../Comps/TopBar";
import AvatarWithName from "../../Comps/Avatar/AvatarWithName";
import AvatarEdit from "../../Comps/Avatar/AvatarEdit";
import FooterBar from "../../Comps/FooterBar";
import Avatar06 from "../../Comps/Avatar/Avatar06";
import Province from "../../Comps/Province";
import Button from "../../Comps/Button";
import BasicButton from "../../Comps/WButton/BasicButton";

const styles = StyleSheet.create({
  Main: {
    width: 375,
    height: 812,
    flexDirection: "column"
    // backgroundColor: "red"
  },
  MainCont: {
    width: "100%",
    height: 812
  },
  FooterCont: {
    width: 375,
    position: "absolute",
    bottom: "0"
  },
  Cont: {
    width: "100%",
    height: "86%",
    // backgroundColor: "blue",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  InfoCont: {
    // backgroundColor: "#ddd",
    width: "100%",
    height: 295,
    flexDirection: "row"
  },
  Info: {
    width: "50%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  ImgCont: {
    width: 137,
    height: 137,
    borderRadius: 80
    // backgroundColor: "red"
  },
  Bottom: {
    // backgroundColor: "red",
    width: "100%",
    height: 100,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  },
  Top: {
    // backgroundColor: "blue",
    width: "100%",
    height: 100,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  }
});
// const leftarrow = require("./leftarrow.png");
const ViewDogProfile = ({
  likeone,
  liketwo,
  likethree,
  dislikeone,
  disliketwo,
  dislikethree,
  dogname,
  dogbreed,
  dogage,
  image1,
  backgroundColor
}) => {
  return (
    <View>
      <View style={styles.Main}>
        <View style={styles.MainCont}>
          {/* not sure how to get image for imageLeft1 */}
          <TopBar title="Dog Profile" imageLeft1="" />
          <View style={styles.Cont}>
            <View style={styles.InfoCont}>
              <View style={styles.Info}>
                <View style={styles.Top}>
                  {/* get image1 prop from comps/avatar06 */}
                  <View style={styles.ImgCont}>{image1}</View>
                </View>
                <View style={styles.Bottom}>
                  <Text style={{ fontSize: 16, fontWeight: 500 }}>Likes</Text>
                  {/* props from "likes" from "OwnerEditProfile" */}
                  <Text>{likeone}</Text>
                  <Text>{liketwo}</Text>
                  <Text>{likethree}</Text>
                </View>
              </View>
              <View style={styles.Info}>
                <View style={styles.Top}>
                  {/* props for dog name, breed, and age from "OwnerEditProfile" */}
                  <Text style={{ fontSize: 28, fontWeight: 500 }}>
                    {dogname}
                  </Text>
                  <Text style={{ fontSize: 16 }}>{dogbreed}</Text>
                  <Text style={{ fontSize: 16 }}>{dogage}</Text>
                  {/* bgcolor not working */}
                  <BasicButton
                    text="Activate Walk"
                    backgroundColor="#38BC64"
                    height={26}
                    width={91}
                    size={14}
                  />
                </View>
                <View style={styles.Bottom}>
                  <View style={styles.Bottom}>
                    <Text style={{ fontSize: 16, fontWeight: 500 }}>
                      Dislikes
                    </Text>
                    {/* props from "dislikes" from "OwnerEditPage" */}
                    <Text>{dislikeone}</Text>
                    <Text>{disliketwo}</Text>
                    <Text>{dislikethree}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.FooterCont}>
            <FooterBar />
          </View>
        </View>
      </View>
    </View>
  );
};
ViewDogProfile.defaultProps = {
  maintext: "default",
  likeone: "catch",
  liketwo: "swim",
  likethree: "run",
  dislikeone: "catch",
  disliketwo: "swim",
  dislikethree: "run",
  dogname: "Lucky",
  dogbreed: "golden retreiver",
  dogage: "3",
  image1: null
};
export default ViewDogProfile;
