import React from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet } from "react-native";

const Placeholder = styled.Text`
  /* display: flex; */
  width: 358px;
  height: 224px;
  border-radius: 19px;
  background-color: #ffffff;
`;

const Map = styled.View`
width:100%;
  height:103px;
  padding: 12px 20px;
`;

// const MainCont = styled.View`
//   width: 288px;
//   height: 103px;
//   background-color: #ffffff;
//   border-radius: 3px;
// `;

// const Input1 = styled.TextInput`
//   width:100%;
//   height:103px;
//   padding: 12px 20px;
// `;
const styles = StyleSheet.create({ 
  text: {
    justifyContent:"center",
    alignItems:"center",
    fontSize:16,
    marginBottom:20
  },
  shadow: {
    shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
  },
  map: {
    width:"100%",
    height:"100%",
    backgroundColor:"#dad"
  }
});


const MapPlaceholder = ({text}) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
      <Placeholder style={styles.shadow}>
        <Map></Map>
      </Placeholder>
    </View>
  );
};

MapPlaceholder.defaultProps = {
  text: "Walker Location"
};

export default MapPlaceholder;
