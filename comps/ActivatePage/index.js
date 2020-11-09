import React from "react";
import { View, Text, StyleSheet} from "react-native";
import TopBar from '../TopBar';
import AvatarViewProfile from '../AvatarForm/AvatarViewProfile';
import BasicAvatar from "../Avatar/BasicAvatar";
import DeclineButton from "../WButton/DeclineButton";
import ActivateButton from "../WButton/ActivateButton";

const styles = StyleSheet.create({
  app: {
    // flexDirection: "row",
   
    // justifyContent:"space-between",
    
  },
  container: {
    //    alignItems:"center",
      marginTop:30,
      marginBottom:20,
      marginLeft:30,
      flexDirection:"row"
  },
  buttons: {
    // alignItems:"center",
    // justifyContent:"center"
    marginLeft:30
  }
});

const ActivatePage = ({}) => {
 
  return (
      <View style={styles.app}>
        <TopBar title="Inbox" />
        <View>
          <View style={styles.container}>
            <BasicAvatar
            image1={require('../../comps/Avatar/face3.jpg')}
            width={64}
            height={64}/>
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


          <View style={styles.container}>
            <BasicAvatar
            image1={require('../../comps/Avatar/face6.jpg')}
            width={64}
            height={64}/>
            <AvatarViewProfile
            textName={"Amy L."}
            textView={"View Profile"}
            text={"Cute Pup! I want to walk him"}
            />
            <View style={styles.buttons}>
            <ActivateButton />
            <DeclineButton />
            </View>  
          </View>
          
        </View>
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