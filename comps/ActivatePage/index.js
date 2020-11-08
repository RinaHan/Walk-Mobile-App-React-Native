import React from "react";
import { View, Text, StyleSheet} from "react-native";
import TopBar from '../TopBar';
import AvatarViewProfile from '../AvatarForm/AvatarViewProfile';
import BasicAvatar from "../Avatar/BasicAvatar";

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    // alignItems:"center",
    // justifyContent:"space-between",
    
  },
  avatarcont: {
      marginTop:30,
      marginLeft:20,
      flexDirection:"row"
  }
});

const ActivatePage = ({}) => {
 
  return (
      <View style={styles.container}>
        <TopBar title="Inbox" />
        <View>
          <View style={styles.avatarcont}>
            <BasicAvatar
            image1={require('../../comps/Avatar/face3.jpg')}
            width={64}
            height={64}/>
            <AvatarViewProfile
            textName={"Mason K."}
            textView={"View Profile"}
            text={"Cute Pup! I want to walk him"}
            />
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