import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Agetext = styled.Text`
  color: #000;
  align-items: left;
  text-align: left;
  margin-bottom: 10px;
`;
const Locationtext = styled.Text`
  color: #000;
  align-items: left;
  text-align: left;
  margin-bottom: 10px;
`;

const TextCont = styled.View`
  display: flex;
  /* margin-left: auto;
  margin-right: auto; */
  margin-left: 20px;
  width: 155px;
  padding-top: 30px;
`;

const LocationAge = () => {
  return (
    <View>
      <TextCont>
        <Locationtext>
          <Text>
            <b>Location</b> Burnaby, BC
          </Text>
        </Locationtext>
        <Agetext>
          <Text>
            <b>Age</b> 24
          </Text>
        </Agetext>
      </TextCont>
    </View>
  );
};

export default LocationAge;
