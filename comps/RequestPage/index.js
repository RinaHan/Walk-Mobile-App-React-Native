import React from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import TopBar from '../TopBar';
import AvatarFormText from '../AvatarForm/AvatarFormText';
import BasicAvatar from "../Avatar/BasicAvatar";
import Spacer from "../Spacer";
import FooterBar from "../FooterBar";

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    // alignItems:"center",
    // justifyContent:"space-between",
    height:"100%",
    // backgroundColor:"pink"
  },
  spacer: {
    height:10
  },
  avatarcont: {
      // marginTop:30,
      marginLeft:20,
      flexDirection:"row",
      height:130,
      // backgroundColor:"red"
  }
});

const RequestPage = ({}) => {
 
  return (
    <View style={styles.container}>
      <TopBar title="Inbox" />
      <ScrollView>
        <View>
          <View style={styles.avatarcont}>
            <BasicAvatar
              image1={require('../../comps/Avatar/face1.jpg')}
              width={64}
              height={64} />
            <AvatarFormText
              textname={"Bob S."}
              text={"Such great weather today!"}
              backgroundColor={"#53B7BE"}
            />
          </View>
          <View style={styles.spacer}>
            <Spacer />
          </View>
        </View>

      </ScrollView>
      <FooterBar style={styles.footerBar} />
    </View>
  );
};

RequestPage.defaultProps = {
    // size: null,
    text: null,
    backgroundColor: null,
    // height: null
};

export default RequestPage; 