import React from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import TopBar from '../../comps/TopBar';
import AvatarViewProfile from '../../comps/AvatarForm/AvatarViewProfile';
import BasicAvatar from "../../comps/Avatar/BasicAvatar";
import DeclineButton from "../../comps/WButton/DeclineButton";
import ActivateButton from "../../comps/WButton/ActivateButton";
import Spacer from "../../comps/Spacer";
import FooterBar from "../../comps/FooterBar";
import MsgSelection from "../../comps/MsgSelection";

const styles = StyleSheet.create({
  app: {
    height:"100%",
  },
  container: {
      marginLeft:30,
      flexDirection:"row",
      height:130,
      alignItems:"center"
  },
  buttons: {
    marginLeft:30
  },
  spacer: {
    height:20
  },
});

const ActivatePage = ({}) => {
 
  return (
      <View style={styles.app}>
        <TopBar title="Inbox" />
        <MsgSelection style={styles.selection}/>
        <ScrollView>

        <View>
          <View style={styles.container}>
            <BasicAvatar
              image1={require('../../comps/Avatar/face12.jpg')}
              width={64}
              height={64} />
            <AvatarViewProfile
              textName={"Mason K."}
              textView={"View Profile"}
              text={"Cute Pup! I want to walk him"}
            />
            <View style={styles.buttons}>
              <ActivateButton />
              <DeclineButton />
            </View>
          </View>
          <View style={styles.spacer}>
            <Spacer />
          </View>
        </View>

          <View>
          <View style={styles.container}>
            <BasicAvatar
            image1={require('../../comps/Avatar/face11.jpg')}
            width={64}
            height={64}/>
            <AvatarViewProfile
            textName={"Bob S."}
            textView={"View Profile"}
            text={"Hello, I want to ask for a volunteer your dog walk"}
            />
            <View style={styles.buttons}>
            <ActivateButton />
            <DeclineButton />
            </View> 
          </View>
          <View style={styles.spacer}>
             <Spacer/> 
          </View>
          </View>

          <View>
          <View style={styles.container}>
            <BasicAvatar
              image1={require('../../comps/Avatar/face10.jpg')}
              width={64}
              height={64} />
            <AvatarViewProfile
              textName={"Mason K."}
              textView={"View Profile"}
              text={"Cute Pup! I want to walk him"}
            />
            <View style={styles.buttons}>
              <ActivateButton />
              <DeclineButton />
            </View>
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

ActivatePage.defaultProps = {
    // size: null,
    text: null,
    backgroundColor: null,
    // height: null
};

export default ActivatePage;