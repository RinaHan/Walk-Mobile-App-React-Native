import React from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet } from "react-native";
import UserInfo from "../UserInfo";
import Avatar07 from '../../comps/Avatar/Avatar07';
import ReviewStars from "../ReviewStars";

import global from '../../Pages/globaj';

const styles = StyleSheet.create({ 
  box: {
    width:353,
    height:196,
    backgroundColor:"red",
    backgroundColor: "#FFFFFF",
    borderRadius: 26,
    alignItems:"center",
    justifyContent:"space-between",
  },
  container: {
    width:"80%",
    flexDirection:"row",
    justifyContent:"center",
  },
  rightcont: {
    marginTop:20,
    height:150,
    justifyContent:"center",
    justifyContent:"space-between",
  },
});


const WalkerProfile = ({city, age, bio, name}) => {
  return (
    <View style={styles.box}>
      
     
        <View style={styles.container}>
          <View>
            <UserInfo/>
            <Text 
              style={styles.extratext}
              style={{fontSize:10, marginTop:10}}>View full profile</Text>
          </View>

          <View style={styles.rightcont}>
          <Avatar07
              image1={require('../../comps/Avatar/face3.jpg')}
          />
          <ReviewStars/>
          </View>
        </View>
        
    </View>

  
  );
};

WalkerProfile.defaultProps = {
  city:"Burnaby, BC",
  age:"23",
  bio:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  name:"Ethan P",
  pic:"selfie.jpg"
};
export default WalkerProfile;
