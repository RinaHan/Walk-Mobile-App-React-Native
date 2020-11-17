import React from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import FooterBar from "./Comps/FooterBar";
import TopBar from "./Comps/TopBar";

const Header = styled.View``;

const Main = styled.View`
  width: 375px;
  height: 812px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  align-items: center;
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
  /* background-color: blue; */
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OwnerDash = () => {
  return (
    <View>
      <Main>
        <MainCont>
          <Header>
            <TopBar title="Walker Profile" />
          </Header>
          <Cont></Cont>
          <FooterCont>
            <FooterBar />
          </FooterCont>
        </MainCont>
      </Main>
    </View>
  );
};

export default OwnerDash;
