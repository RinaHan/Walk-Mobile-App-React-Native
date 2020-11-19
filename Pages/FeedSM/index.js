import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import Description from "../../Comps/Description";
import Dropdown from "../../Comps/Dropdown";
import Input from "../../Comps/Input";
import Likes from "../../Comps/Likes";
import Popup from "../../Comps/Popup";
import Texting from "../../Comps/Texting";
import Post from "../../Comps/Post";
import WalkerProfile from "../../Comps/WalkerProfile";
import MsgSent from "../../Comps/MsgSent";
import MsgSelection from "../../Comps/MsgSelection";
import Birthday from "../../Comps/Birthday";
import MsgRecieved from "../../Comps/MsgRecieved";
import DashDog from "../../Comps/DashDog";
import DashOwner from "../../Comps/DashOwner";
import AddImage from "../../Comps/AddImage";
import Spacer from "../../Comps/Spacer";
import TopBar from "../../Comps/TopBar";
import AvatarWithName from "../../Comps/Avatar/AvatarWithName";
import AvatarEdit from "../../Comps/Avatar/AvatarEdit";
import FooterBar from "../../Comps/FooterBar";
import Avatar06 from "../../Comps/Avatar/Avatar06";
import Province from "../../Comps/Province";
import Button from "../../Comps/Button";
import EventTime from "../../Comps/EventTime";

const Main = styled.View`
  width: 375px;
  height: 812px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  z-index: auto;
  /* margin: 30px 30px; */
`;
const MainCont = styled.View`
  z-index: 1;
  width: 100%;
  height: 812px;
`;
const FooterCont = styled.View`
  width: 375px;
  position: absolute;
  bottom: 0;
`;
const Cont = styled.View`
  width: 100%;
  height: 86%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 70;
  position: absolute;
`;
const Opactiy = styled.View`
  width: 375px;
  height: 812px;
  background-color: "rgba(52, 52, 52, 0.8)";
  z-index: 10;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Feed_SM = () => {
  return (
    <View>
      <Main>
        <MainCont>
          <Opactiy>
            <Popup></Popup>
          </Opactiy>
          <Cont>
            <Post />
          </Cont>
          <FooterCont>
            <FooterBar />
          </FooterCont>
        </MainCont>
      </Main>
    </View>
  );
};

export default Feed_SM;
