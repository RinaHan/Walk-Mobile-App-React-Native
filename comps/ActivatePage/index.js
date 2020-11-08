import React from "react";
import { View, Text, StyleSheet} from "react-native";
import TopBar from '../TopBar';
import AvatarViewProfile from '../AvatarForm/AvatarViewProfile';
import BasicAvatar from "../Avatar/BasicAvatar";
import BasicButton from "../WButton/BasicButton";

const styles = StyleSheet.create({
  app: {
    // flexDirection: "row",
    // alignItems:"center",
    // justifyContent:"space-between",
    
  },
  container: {
      marginTop:30,
      marginLeft:20,
      flexDirection:"row"
  },
  buttons: {
      marginBottom:20,

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
            <BasicButton  
            text="Activate Walk"  
            backgroundColor= "#38BC64" 
            height={26}
            width={91}
            size={14}
            />
            </View>
            <View>
            <BasicButton 
            text="Decline"  
            backgroundColor= "#C74C33" 
            height={26}
            width={91}
            size={14}
            />
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