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

const DogLikes = () => {
  return (
    <View>
      <TextCont>
        <Titletext>
          <Text>
            <h2>Dislikes</h2>
          </Text>
        </Titletext>
        <Description>
          <Text>
            Touching her paws <br></br> The smell of oranges
          </Text>
        </Description>
      </TextCont>
    </View>
  );
};

export default DogLikes;
