import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Placeholder = styled.Text`
  display: flex;
  width: 358px;
  height: 224px;
  border: 1px solid #565555;
  border-radius: 19px;
  display: flex;
`;

const MapPlaceholder = () => {
  return (
    <View>
      <Placeholder></Placeholder>
    </View>
  );
};

export default MapPlaceholder;
