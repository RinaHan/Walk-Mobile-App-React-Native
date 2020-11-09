import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text } from "react-native";

const DropMenu = styled.View`
  border: 1px solid black;
  display: flex;
  width: 273px;
  height: 40px;
  justify-content: flex-end;
  align-items: center;
`;

const DropBox = styled.View`
  width: 10px;
  height: 12px;
  padding: 10px;
  display: flex;
  div {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`;

const Spacer = styled.View`
  width: 100%;
  height: 1px;
  background-color: black;
`;

const Expand = styled.View`
  width: 273px;
  height: 120px;
  border: 1px solid black;
  background-color: red;
`;

const Dropdown = ({}) => {
  return (
    <View>
      <DropMenu>
        <DropBox>
          <View>
            {" "}
            <img src="downarrow.png" />
          </View>
        </DropBox>
      </DropMenu>
      <Expand>
        <View>
          <Text>Canada</Text>
        </View>
        <Spacer />
        <View>
          <Text>Canada</Text>
        </View>
        <Spacer />
        <View>
          <Text>Canada</Text>
        </View>
      </Expand>
    </View>
  );
};

Dropdown.defaultProps = {};

export default Dropdown;
