import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Biotext = styled.Text`
  color: #000;
  align-items: left;
  text-align: left;
`;

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
  /* margin-left: 20px; */
  width: 155px;
  padding-top: 30px;
`;

const UserInfo = () => {
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
        <Biotext>
          <Text>
            <b>Bio</b> “Hi there! My name is Ethan and I love all animals. Dogs,
            cats, birds, you name it. I really love spending time outdoors in
            nature and ...”
          </Text>
        </Biotext>
      </TextCont>
    </View>
  );
};

export default UserInfo;
