import React from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import DashDog from "../../comps/DashDog";
import DashOwner from "../../comps/DashOwner";
import FooterBar from "../../comps/FooterBar";
import MapPlaceholder from "../../comps/MapPlaceholder";
import TopBar from '../../comps/TopBar';
import WalkerProfile from "../../comps/WalkerProfile";
// import AvatarViewProfile from '../AvatarForm/AvatarViewProfile';

const styles = StyleSheet.create({
  app: {
    justifyContent:"center",
    // alignItems:"center",
    // width:"100%",
    height:"100%"
  },
  container:{
    alignItems:"center",
    marginTop:40,
  
  },
  map: {
    
  },
  dashcont: {
    flexDirection: "row",
    width: 360,
    justifyContent:"space-between",
    marginTop:50,
    marginBottom:40
  },
  
});

const OwnerDashPage = ({}) => {
 
  return (
      <View style={styles.app}>
        <ScrollView>
            <TopBar title="Dashboard" />
          <View style={styles.container}>
            <MapPlaceholder style={styles.map}
            text="Return Address"/>
            <View style={styles.dashcont}>
              <WalkerProfile/>
            </View>
          </View>
        </ScrollView>
        <FooterBar/>
      </View>
  );
};

OwnerDashPage.defaultProps = {
    // size: null,
    text: null,
    backgroundColor: null,
    // height: null
};


export default OwnerDashPage;