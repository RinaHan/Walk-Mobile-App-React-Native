import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const MainCont = styled.View`
  /* background-color: red; */
  width: 375px;
  height: 146px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cont = styled.View`
  width: 344px;
  height: 84px;
  display: flex;
  flex-direction: row;
`;

const LeftSide = styled.View`
  flex: 1;
  /* background-color: #bbb; */
  display: flex;
  align-items: flex-end;
  padding-right: 10px;
  
`;

const RightSide = styled.View`
  flex: 8;
  /* background-color: #bdb; */
  background: #EAF6F7;
  border-radius: 0px 6px 6px 6px;
`;

const ImgCont = styled.View`
  width: 28px;
  height: 28px;
  /* background-color: blue; */
 
`;
const Img = styled.Image`
  width:100%;
  height:100%;
  border-radius: 14px;
`;
const avatar = require("./selfie.jpg");
const MsgSent = ({msgSent }) => {
  return (
    <View>
      <MainCont>
        <Cont>
          <RightSide>
            <Text multiline>{msgSent}</Text>
          </RightSide>
          <LeftSide>
            <ImgCont>
            <Img source={avatar} />
            </ImgCont>
          </LeftSide>
        </Cont>
      </MainCont>
    </View>
  );
};

MsgSent.defaultProps = {
  avatar:"selfie.jpg",
  msgSent:"defaultmessage"
};
export default MsgSent;
