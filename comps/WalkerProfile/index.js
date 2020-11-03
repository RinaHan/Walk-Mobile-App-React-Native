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

const WalkerProfile = () => {
  return (
    <View>
      <Titletext>
        <Text>Walker Profile</Text>
      </Titletext>
    </View>
  );
};

export default WalkerProfile;
