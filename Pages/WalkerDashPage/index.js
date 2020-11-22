import React from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import WalkerFooterBar from "./Comps/WalkerFooterBar";
import DashDog from "./Comps/DashDog";
import DashOwner from "./Comps/DashOwner";
import WalkerProfileTitle from "./Comps/WalkerProfileTitle";
import TopBar from "./Comps/TopBar";
import MapPlaceholder from "./Comps/MapPlaceholder";

const LocationCont = styled.View`
  top: 5%;
`;

const LocationText = styled.View`
  margin-left: 50px;
  margin-bottom: 10px;
`;

const DashOwnerCont = styled.View`
  padding-left: 5px;
`;

const DashDogCont = styled.View`
  padding-right: 5px;
`;

const DashDogOwnerCont = styled.View`
  flex-direction: row;
  top: 20%;
`;

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

const WalkerDashPage = () => {
  return (
    <View>
      <Main>
        <MainCont>
          <Header>
            <TopBar title="Dashboard" />
          </Header>
          <Cont>
            <LocationCont>
              <LocationText>
                <WalkerProfileTitle text="Return Address" />
              </LocationText>
              <MapPlaceholder />
            </LocationCont>
            <DashDogOwnerCont>
              <DashDogCont>
                <DashDog />
              </DashDogCont>
              <DashOwnerCont>
                <DashOwner
                  owneremail="ethan123@gmail.com"
                  owneradress="1234 123A Ave Burnaby, BC"
                />
              </DashOwnerCont>
            </DashDogOwnerCont>
          </Cont>
          <FooterCont>
            <WalkerFooterBar />
          </FooterCont>
        </MainCont>
      </Main>
    </View>
  );
};

export default WalkerDashPage;
