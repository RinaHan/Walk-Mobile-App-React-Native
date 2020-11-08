import React from "react";
import { View, Text, StyleSheet} from "react-native";
import TopBar from '../TopBar';
import AvatarFormText from '../AvatarForm/AvatarFormText';

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    // alignItems:"center",
    // justifyContent:"space-between",
    
  },
  avatar: {
      marginTop:20,
  
  }
});

const RequestPage = ({}) => {
 
  return (
      <View style={styles.container}>
        
        <TopBar title="Inbox" />
        <View>
          <View style={styles.avatar}>
            <AvatarFormText/>
          </View>
          <View style={styles.avatar}>
            <AvatarFormText/>
          </View>
        </View>
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