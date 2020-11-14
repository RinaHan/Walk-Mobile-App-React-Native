import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Description = styled.Text`
  color: #000;
  font-weight: 400;
`;
const Titletext = styled.Text`
  color: #000;
  font-weight: 500;
`;

const TextCont = styled.View`
  display: flex;
  align-items: column;
  text-align: center;
`;

const DogDislikes = () => {
  return (
    <View>
      {/* <TextCont>
        <Titletext>
          <Text>Dislikes</Text>
        </Titletext>
        <Description>
          <Text>
            Touching her paws <br></br> The smell of oranges
          </Text>
        </Description>
      </TextCont> */}
    </View>
  );
};

export default DogDislikes;
