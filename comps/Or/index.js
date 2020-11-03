import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Ortext = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Or = () => {
  return (
    <View>
      <Ortext>
        <Text>or</Text>
      </Ortext>
    </View>
  );
};

export default Or;
