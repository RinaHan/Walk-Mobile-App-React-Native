import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Description = styled.Text`
  color: #000;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Titletext = styled.Text`
  color: #000;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TextCont = styled.View`
  display: flex;
  align-items: column;
`;

const DogInfo = () => {
  return (
    <View>
      <TextCont>
        <Titletext>
          <Text>
            <h1>Milly</h1>
          </Text>
        </Titletext>
        <Description>
          <Text>
            Border Collie <br></br> Age 6
          </Text>
        </Description>
      </TextCont>
    </View>
  );
};

export default DogInfo;
