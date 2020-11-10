import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

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
  /* background-color: #bdb; */
`;

const ImgCont = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  /* background-color: blue; */
  img {
    width:100%;
    height:100%;
    object-fit:cover;
  }
`;

const MsgRecieved = ({ avatar, msgRecieve }) => {
  return (
    <View>
      <MainCont>
        <Cont>
          <LeftSide>
            <ImgCont>
              <img src={avatar} width="28px" height="28px"/>
            </ImgCont>
          </LeftSide>
          <RightSide>
            <text>{msgRecieve}</text>
          </RightSide>
        </Cont>
      </MainCont>
    </View>
  );
};

MsgRecieved.defaultProps = {
  avatar:"selfie.jpg",
  msgRecieve:"defaultmessage"
};
export default MsgRecieved;
