import React from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import DashDog from "../../comps/DashDog";
import DashOwner from "../../comps/DashOwner";
import FooterBar from "../../comps/FooterBar";
import MapPlaceholder from "../../comps/MapPlaceholder";
import TopBar from '../../comps/TopBar';
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
    marginTop:40,
  },
  
});

const WalkerDashPage = ({}) => {
 
  return (
      <View style={styles.app}>
        <ScrollView>
            <TopBar title="Dashboard" />
          <View style={styles.container}>
            <MapPlaceholder style={styles.map}/>
            <View style={styles.dashcont}>
              <DashDog/>
              <DashOwner/>
            </View>
          </View>
        </ScrollView>
        <FooterBar/>
      </View>
  );
};

WalkerDashPage.defaultProps = {
    // size: null,
    text: null,
    backgroundColor: null,
    // height: null
};


export default WalkerDashPage;