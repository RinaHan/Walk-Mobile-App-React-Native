import React from "react";
import { View, Text, StyleSheet} from "react-native";
import TopBar from '../TopBar';
import AvatarForm02 from '../AvatarForm/AvatarForm02';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems:"center",
    // justifyContent:"space-between",
    
  },
  avatarform1: {
      marginTop:20,
      marginBottom:20
  }
  
});

const Page01 = ({}) => {
 
  return (
      <View style={styles.container}>
        <View style={styles.avatar}>
        <TopBar title="Inbox" />
        <View>
        <AvatarForm02 style={styles.avatarform1}/>
        <AvatarForm02/>
        </View>
        </View>
        
      </View>
  );
};

Page01.defaultProps = {
    // size: null,
    text: null,
    backgroundColor: null,
    // height: null
};

export default Page01;