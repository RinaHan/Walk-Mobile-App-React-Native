import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text } from "react-native";

const InputCont = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 268px;
  height: 48px;
  /* background-color:#DBD; */
`;

const InputTitle = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color:#CBD; */
`;
const Spacer = styled.View`
  flex: 1;
`;
const InputBox = styled.View`
  display: flex;
  flex: 3;
  /* background-color:#DDD; */
  height:${props=>props.height ? props.height : "27px"};
`;
const TextInput = styled.TextInput`
  width:100%;
  height:${props=>props.height ? props.height : "27px"};
`;

const Input = ({ text, placeholder, height }) => {
  return (
    <View>
      <InputCont>
        <InputTitle>
          <Text>{text}</Text>
        </InputTitle>
        <Spacer />
        <InputBox  height={height}>
          <TextInput placeholder={placeholder}  height={height} multiline/>
        </InputBox>
      </InputCont>
    </View>
  );
};

Input.defaultProps = {
  text: "default",
  placeholder: "default",
  width: "22px",
  height: "27px"
};

export default Input;
