import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Continuetext = styled.Text`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  color: #53b7be;
  font-weight: 400;
`;

const ContinueAs = () => {
  return (
    <View>
      <Continuetext>
        <Text>Continue as a</Text>
      </Continuetext>
    </View>
  );
};

export default ContinueAs;
