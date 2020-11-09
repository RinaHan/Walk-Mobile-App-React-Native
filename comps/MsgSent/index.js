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
  align-items:center;
`;

const RightSide = styled.View`
  flex: 6;
  background: #EAF6F7;
  border-radius: 0px 6px 6px 6px;
`;

const ImgCont = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  background-color: blue;
  img {
    width:100%;
    height:100%;
  object-fit:contain;
  }
`;

const MsgSent = ({ avatar }) => {
  return (
    <View>
      <MainCont>
        <Cont>
          <LeftSide>
            <ImgCont>
              <img src={avatar} />
            </ImgCont>
          </LeftSide>
          <RightSide></RightSide>
        </Cont>
      </MainCont>
    </View>
  );
};

MsgSent.defaultProps = {
  avatar:"selfie.jpg"
};
export default MsgSent;
