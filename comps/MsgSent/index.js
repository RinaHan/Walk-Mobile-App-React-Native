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
  align-items: flex-end;
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

const MsgSent = ({ avatar, msgSent }) => {
  return (
    <View>
      <MainCont>
        <Cont>
          <RightSide>
            <text>{msgSent}</text>
          </RightSide>
          <LeftSide>
            <ImgCont>
              <img src={avatar} width="28px" height="28px"/>
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
