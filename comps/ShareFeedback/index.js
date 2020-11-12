import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Description = styled.Text`
  color: #000;
  justify-content: left;
  align-items: left;
  text-align: left;
`;
const Titletext = styled.Text`
  color: #000;
  justify-content: left;
  align-items: left;
  text-align: left;
`;

const TextCont = styled.View`
  display: flex;
  align-items: column;
  margin-left: auto;
  margin-right: auto;
`;

const ShareFeedback = () => {
  return (
    <View>
      <TextCont>
        <Titletext>
          <Text>
            <b>Help others by sharing feedback</b>
          </Text>
        </Titletext>
        <Description>
          <Text>Describe your experience with this walker.</Text>
        </Description>
      </TextCont>
    </View>
  );
};

export default ShareFeedback;
