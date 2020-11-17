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
`;
const MainCont = styled.View`
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
  /* background-color: blue; */
  bottom: 70;
  position: absolute;
`;
const InputCont = styled.View`
  width: 80%;
  margin-right: 75px;
  height: 260px;
  /* background-color:#dbd; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Upload = styled.View`
  width: 100%;
  height: 260px;
  /* background-color:#aad; */
  margin-top: 40px;
  display: flex;
  align-items: center;
  border: 1px solid #e8e8e8;
`;
const UpTitle = styled.View`
  width: 100%;
  height: 20px;
  /* background-color:#dad; */
`;
const TitleText = styled.Text``;
const Image = styled.Image`
  width: 50px;
  height: 50px;
`;
const ImgCont = styled.View`
  width: 50px;
  height: 90%;
  /* background-color:#dad; */
  justify-content: center;
`;

const addimage = require("./addphoto.png");
const AddEvent = () => {
  const [eventAdress, setEventAdress] = useState("");
  const [eventCity, setEventCity] = useState("");

  return (
    <View>
      <Main>
        <MainCont>
          <TopBar
            title="Create an Event"
            imageLeft1={require("../../Comps/TopBar/leftArrow.png")}
          />
          <Cont>
            <InputCont>
              <Input
                text="Adress"
                onChangeText={(t) => {
                  alert(t);
                  eventAdress(setEventAdress);
                }}
              />
              <Input
                text="City"
                onChangeText={(t) => {
                  alert(t);
                  eventCity(setEventCity);
                }}
              />
              <EventTime />
            </InputCont>
            <Upload>
              <UpTitle>
                <TitleText>Upload Photo</TitleText>
              </UpTitle>
              <ImgCont
                onPress={() => {
                  alert("Add 1 Photo from Camera Roll to fill Upload const");
                }}
              >
                <Image source={addimage} />
              </ImgCont>
            </Upload>
            <Button />
          </Cont>
          <FooterCont>
            <FooterBar />
          </FooterCont>
        </MainCont>
      </Main>
    </View>
  );
};

export default AddEvent;
