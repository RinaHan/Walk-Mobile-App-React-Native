import React from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import TopBar from '../../comps/TopBar';
import AvatarFormText from '../../comps/AvatarForm/AvatarFormText';
import BasicAvatar from "../../comps/Avatar/BasicAvatar";
import Spacer from "../../comps/Spacer";
import FooterBar from "../../comps/FooterBar";
import MsgSelection from "../../comps/MsgSelection";

const styles = StyleSheet.create({
  container: {
    height:"100%",
  },
  spacer: {
    height:10
  },
  avatarcont: {
      marginLeft:20,
      flexDirection:"row",
      height:130,
  }
});

const RequestPage = ({}) => {
 
  return (
    <View style={styles.container}>
      <TopBar title="Inbox" />
      <MsgSelection/>
      <ScrollView>

        <View>
          <View style={styles.avatarcont}>
            <BasicAvatar
              image1={require('../../comps/Avatar/face11.jpg')}
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
        <View>
          <View style={styles.avatarcont}>
            <BasicAvatar
              image1={require('../../comps/Avatar/face13.jpg')}
              width={64}
              height={64} />
            <AvatarFormText
              textname={"Bob S."}
              text={"I'm gonna let you know:) Thanks"}
              backgroundColor={"#53B7BE"}
            />
          </View>
          <View style={styles.spacer}>
            <Spacer />
          </View>
        </View>

        <View>
          <View style={styles.avatarcont}>
            <BasicAvatar
              image1={require('../../comps/Avatar/face9.jpg')}
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