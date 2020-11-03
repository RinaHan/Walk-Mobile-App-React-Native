import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Button = styled.View`
  align-items: center;
`;

const FBlogo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ImgCont = styled.View`
  width: 30px;
  height: 30px;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ButtonBox = styled.View`
  display: flex;
  background: ${(props) => (props.highlight ? "#F1F1F1" : "#FFF")};
  width: 288px;
  padding: 6px;
  border: 0.5px solid #959494;
  box-sizing: border-box;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const Buttontext = styled.Text`
  align-items: center;
  justify-content: center;
  display: flex;
  color: #000;
  width: 300px;
  margin-right: 25px;
`;

const FacebookButton = () => {
  const [highlight, setHighlight] = useState(true);

  return (
    <View>
      <Button>
        <ButtonBox
          onMouseOver={() => {
            setHighlight(!highlight);
          }}
          highlight={highlight}
          onMouseOver={() => {
            setHighlight(!highlight);
          }}
        >
          <FBlogo>
            <ImgCont>
              <img src="facebook.png"></img>
            </ImgCont>
            <Buttontext>
              <Text>Sign in With Facebook</Text>
            </Buttontext>
          </FBlogo>
        </ButtonBox>
      </Button>
    </View>
  );
};

export default FacebookButton;
