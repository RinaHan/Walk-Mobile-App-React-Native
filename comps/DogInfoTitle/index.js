import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Titletext = styled.Text`
  margin-top: 20px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const DogInfoTitle = () => {
  return (
    <View>
      <Titletext>
        <Text>Dog Information</Text>
      </Titletext>
    </View>
  );
};

export default DogInfoTitle;
