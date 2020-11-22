import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import Texting from "../../Comps/Texting";
import MsgSent from "../../Comps/MsgSent";
import MsgRecieved from "../../Comps/MsgRecieved";
import TopBar from "../../Comps/TopBar";

const Main = styled.View`
  width: 375px;
  height: 812px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  margin: 30px 30px;
`;
const MainCont = styled.View`
  width: 100%;
  height: 812px;
`;
const FooterCont = styled.View`
  width: 375px;
  height: 100px;
  position: absolute;
  bottom: 0;
  /* display: flex; */
  align-items: center;
`;
const Cont = styled.View`
  width: 100%;
  height: 86%;
  overflow-y: scroll;
  /* display: flex; */
  flex-direction: column;
  /* align-items: center; */
  /* background-color: blue; */
  bottom: 70;
  position: absolute;
`;

const Chatting = () => {
  return (
    <View>
      <Main>
        <MainCont>
          <TopBar imageLeft1={require("../../Comps/TopBar/leftArrow.png")} />
          <Cont>
            <MsgSent />
            <MsgRecieved />
          </Cont>
          <FooterCont>
            <Texting />
          </FooterCont>
        </MainCont>
      </Main>
    </View>
  );
};

export default Chatting;
