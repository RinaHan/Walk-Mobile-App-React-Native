import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import Dropdown from "../../comps/Dropdown";
import Input from "../../comps/Input";
import Birthday from "../../comps/Birthday";
import Spacer from "../../comps/Spacer";
import FooterBar from "../../comps/FooterBar";
import Province from "../../comps/Province";
import BasicButton from "../../comps/WButton/BasicButton";

const Main = styled.View`
  width: 375px;
  height: 812px;
  /* background-color: red; */
  align-items: center;
  margin: 30px 30px;
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
  height: 92%;
  /* background-color: blue; */
  /* overflow-y: scroll; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleText = styled.Text`
  font-size: 24px;
  color: #53b7be;
  margin-top: 60px;
`;
const TitleText2 = styled.Text`
  font-size: 24px;
  color: #53b7be;
  margin-top: 30px;
`;
const InputCont = styled.View`
  width: 100%;
  height: 570px;
  /* background-color: #bdb; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 4;
`;

const WalkerAuthentication = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [walkerzip, setWalkerZip] = useState("");
  const [emname, emSetName] = useState("");
  const [emphone, emSetPhone] = useState("");
  return (
    <View>
      <Main>
        <MainCont>
          <Cont>
            <TitleText>Dog Walker Application</TitleText>
            <InputCont>
              <Input
                text="Phone"
                onChangeText={(t) => {
                  // alert(t);
                  phone(setPhone);
                }}
              />
              <Input
                text="Email"
                onChangeText={(t) => {
                  // alert(t);
                  email(setEmail);
                }}
              />
              <Dropdown />
              <Province text="Province" />
              <Input
                text="Zip Code"
                onChangeText={(t) => {
                  // alert(t);
                  walkerzip(setWalkerZip);
                }}
              />
              <Birthday />
            </InputCont>
            <Spacer />
            <TitleText2>Emergency Contact</TitleText2>
            <Input
              text="Name"
              onChangeText={(t) => {
                // alert(t);
                emname(emSetName);
              }}
            />
            <Input
              text="Phone"
              onChangeText={(t) => {
                // alert(t);
                emphone(emSetPhone);
              }}
            />
            <BasicButton text="Continue" height={44} backgroundColor="#53B7BE" />
          </Cont>
          <FooterCont>
            <FooterBar />
          </FooterCont>
        </MainCont>
      </Main>
    </View>
  );
};

export default WalkerAuthentication;
