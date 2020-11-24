import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text, StyleSheet } from "react-native";

const InputCont = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 268px;
  height: 48px;
  /*shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  */
  /* background-color:#DBD; */
`;

const InputTitle = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color:#CBD; */
  font-size:30;
`;
const Spacer = styled.View`
  flex: 1;
`;
const InputBox = styled.View`
  display: flex;
  width:194px;
  /* background-color:#DDD; */
  height:${props=>props.height ? props.height : "27px"};
`;
const TextInput = styled.TextInput`
  width:100%;
  height:${props=>props.height ? props.height : "27px"};
  border:1px solid #DDD;
`;

const styles = StyleSheet.create({ 
  text: {
    fontSize:13,
    fontWeight:"bold"
  },
});

const Input = ({ text, placeholder, height, onChangeText, width }) => {
  return (
    <View>
      <InputCont>
        <InputTitle>
          <Text style={styles.text}>{text}</Text>
        </InputTitle>
        {/* <Spacer /> */}
        <InputBox  height={height}>
          <TextInput placeholder={placeholder}  width={width} height={height} multiline/>
        </InputBox>
      </InputCont>
    </View>
  );
};

Input.defaultProps = {
  text: "default",
  placeholder:"",
  width: "194px",
  height: "37px",
  onChangeText:()=>{}
};

export default Input;
