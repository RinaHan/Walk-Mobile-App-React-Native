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
  align-items: flex-start;
  padding-right: 10epx;
`;

const RightSide = styled.View`
  flex: 8;
  background-color: #EAF6F7;
  border-radius: 0px 6px 6px 6px;
`;

const ImgCont = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  /* background-color: blue; */
`;
const Img = styled.Image`
  width:100%;
  height:100%;
  border-radius:16px;
`;
const avatar = require("./selfie.jpg");

const MsgRecieved = ({msgRecieve }) => {
  return (
    <View>
      {/* <MainCont>
        <Cont>
          <LeftSide>
            <ImgCont>
            <Img source={avatar} />
            </ImgCont>
          </LeftSide>
          <RightSide>
            <Text multiline>{msgRecieve}</Text>
          </RightSide>
        </Cont>
      </MainCont> */}
    </View>
  );
};

MsgRecieved.defaultProps = {
  avatar:"selfie.jpg",
  msgRecieve:"defaultmessage"
};
export default MsgRecieved;
