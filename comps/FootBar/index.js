import React from "react";
import styled from "styled-components/native";
import { View, Text, Image } from "react-native";

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
  background-color: #fad;
  padding: 15px;
  width: 375px;
  display: flex;
  height:100px;
`;

const FootBar = () => {
  return (
      <Footcontainer>
        <Icons>
          <Homeicon>
            <Image style={{width:100, height:100}} source={require("../Avatar/dog1.jpg")} />
          </Homeicon>
          {/* <Eventicon>
            <Image src="event.png"></Image>
          </Eventicon>
          <Addicon>
            <Image src="new.png"></Image>
          </Addicon>
          <Chaticon>
            <Image src="chat.png"></Image>
          </Chaticon>
          <Usericon>
            <Image src="user.png"></Image>
          </Usericon> */}
        </Icons>
      </Footcontainer>
  );
};

export default FootBar;
