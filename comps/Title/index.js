import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Titletext = styled.Text`
  color: #97d7da;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = () => {
  return (
    <View>
      <Titletext>
        <h1>
          <Text>WALK</Text>
        </h1>
      </Titletext>
    </View>
  );
};

export default Title;
