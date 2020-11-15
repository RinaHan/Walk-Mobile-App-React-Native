import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Description = styled.Text`
  color: #000;
  font-weight: 400;
  display: flex;
  flex-direction: column;
`;
const Titletext = styled.Text`
  color: #000;
  font-weight: 500;
`;

const TextCont = styled.View`
  display: flex;
  text-align: center;
`;

const DogInfo = () => {
  return (
    <View>
      <TextCont>
        <Titletext>
          <Text>Milly</Text>
        </Titletext>
        <Description>
          <Text>Border Collie</Text>
          <Text>Age 6</Text>
        </Description>
      </TextCont>
    </View>
  );
};

export default DogInfo;
