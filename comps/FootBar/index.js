import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Usericon = styled.View``;

const Chaticon = styled.View``;

const Addicon = styled.View``;

const Eventicon = styled.View``;

const Homeicon = styled.View``;

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
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const FootBar = () => {
  return (
    <View>
      <Footcontainer>
        <Icons>
          <Homeicon>
            <img src="home.png"></img>
          </Homeicon>
          <Eventicon>
            <img src="event.png"></img>
          </Eventicon>
          <Addicon>
            <img src="new.png"></img>
          </Addicon>
          <Chaticon>
            <img src="chat.png"></img>
          </Chaticon>
          <Usericon>
            <img src="user.png"></img>
          </Usericon>
        </Icons>
      </Footcontainer>
    </View>
  );
};

export default FootBar;
