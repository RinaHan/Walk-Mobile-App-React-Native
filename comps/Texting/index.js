import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const InputCont = styled.View`
  width: 532px;
  height: 119px;
  /* background-color:#DBB; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inputs = styled.View`
  display: flex;
  flex-direction: row;
  width: 344px;
  height: 37px;
  /* background-color: #bbd; */
`;

const Add = styled.View`
  flex: 1;
  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 18px;
    height: 18px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Textbox = styled.View`
  flex: 6;
  display: flex;
  justify-content: center;
  /* background-color: blue; */
  input {
    padding: 20px 20px;
    height: 100%;
    box-sizing: border-box;
  }
`;

const NextArrow = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: green; */
`;

const ArrowCont = styled.View`
  width: 34px;
  height: 34px;
  /* background-color: red; */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Texting = ({}) => {
  return (
    <View>
      <InputCont>
        <Inputs>
          <Add>
            <div>
              <img src="plus.png" />
            </div>
          </Add>
          <Textbox>
            <input placeholder="Type a message..." />
          </Textbox>
          <NextArrow>
            <ArrowCont>
              <img src="nextarrow.png" />
            </ArrowCont>
          </NextArrow>
        </Inputs>
      </InputCont>
    </View>
  );
};

Texting.defaultProps = {};

export default Texting;
