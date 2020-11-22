import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";

import TopBar from "./comps/TopBar";
import MsgSent from "./comps/MsgSent";
import MsgRecieved from "./comps/MsgRecieved";
import Texting from "./comps/Texting";

const Main = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const MainCont = styled.View`
`;
const FooterCont = styled.View`
  width: 375px;
  height: 100px;
  position: absolute;
  bottom: 0;
  align-items: center;
`;
const Cont = styled.View`
  width: 100%;
  height: 86%;
  flex-direction: column;
  bottom: 70;
  position: absolute;
`;

const Chatting = () => {
  return (
      <Main>
          <TopBar 
          imageLeft1={require("./comps/TopBar/leftArrow.png")}
          title="Bob"
          />
        <ScrollView>
        <MainCont>
            <MsgSent 
            msgSent="hi"/>
            <MsgRecieved 
            msgRecieve="hello"/>
        </MainCont>
        </ScrollView>
            <Texting />
      </Main>
  );
};

export default Chatting;