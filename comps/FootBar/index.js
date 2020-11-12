import React, { useState } from "react";
import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";

const Usericon = styled.TouchableOpacity``;

const Chaticon = styled.TouchableOpacity``;

const Addicon = styled.TouchableOpacity``;

const Eventicon = styled.TouchableOpacity``;

const Homeicon = styled.TouchableOpacity``;

const Icons = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-left: 5px;
  padding-right: 5px;
`;

const Footcontainer = styled.View`
  background: #fff;
  padding: 15px;
  width: 375px;
  bottom: 0;
  position: fixed;
`;

const UserImg = styled.Image`
  width: 18px;
  height: 19px;
`;

const ChatImg = styled.Image`
  width: 18px;
  height: 18px;
`;

const NewImg = styled.Image`
  width: 70px;
  height: 40px;
`;

const EventImg = styled.Image`
  width: 18px;
  height: 20px;
`;

const HomeImg = styled.Image`
  width: 25.87px;
  height: 21px;
`;

const home = require("./home.png");
const activehome = require("./activehome.png");
const events = require("./events.png");
const activeevents = require("./activeevents.png");
const add = require("./new.png");
const chat = require("./chat.png");
const activechat = require("./activechat.png");
const user = require("./user.png");
const activeuser = require("./activeuser.png");

const FootBar = () => {
  const [Activehome, setActivehome] = useState(false);
  const [Activechat, setActivechat] = useState(false);
  const [Activeevents, setActiveevents] = useState(false);
  const [Activeuser, setActiveuser] = useState(false);

  return (
    <View>
      <Footcontainer>
        <Icons>
          <Homeicon
            onPress={() => {
              setActivehome(true);
            }}
          >
            <HomeImg source={Activehome !== true ? home : activehome} />
          </Homeicon>
          <Eventicon
            onPress={() => {
              setActiveevents(true);
            }}
          >
            <EventImg source={Activeevents !== true ? events : activeevents} />
          </Eventicon>
          <Addicon>
            <NewImg source={add} />
          </Addicon>
          <Chaticon
            onPress={() => {
              setActivechat(true);
            }}
          >
            <ChatImg source={Activechat !== true ? chat : activechat} />
          </Chaticon>
          <Usericon
            onPress={() => {
              setActiveuser(true);
            }}
          >
            <UserImg source={Activeuser !== true ? user : activeuser} />
          </Usericon>
        </Icons>
      </Footcontainer>
    </View>
  );
};

export default FootBar;
