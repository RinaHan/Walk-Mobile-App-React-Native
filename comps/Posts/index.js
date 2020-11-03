import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Description = styled.Text`
  color: #565555;
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
  margin-top: 20px;
`;

const Posts = () => {
  return (
    <View>
      <TextCont>
        <Titletext>
          <Text>
            <b>Posts</b>
          </Text>
        </Titletext>
        <Description>
          <Text>Show people what you've been up to!</Text>
        </Description>
      </TextCont>
    </View>
  );
};

export default Posts;
