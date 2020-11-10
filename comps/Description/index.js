import React from "react";
import styled from "styled-components/native";
import { View, TextInput } from "react-native";

const MainCont = styled.View`
  width: 288px;
  height: 103px;
  background: #ffffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  margin:30px 30px;

`;
const Description = ({}) => {
  return (
    <View>
      <MainCont>
        <TextInput placeholder="Type at least 5 words"/>

   
      </MainCont>
    </View>
  );
};

Description.defaultProps = {};
export default Description;
