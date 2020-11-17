import React from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import FooterBar from "./Comps/FooterBar";
import WalkerProfile from "./Comps/WalkerProfile";
import ReviewStars from "./Comps/ReviewStars";
import WalkerProfileTitle from "./Comps/WalkerProfileTitle";
import TopBar from "./Comps/TopBar";

const WalkerTitleCont = styled.View`
  margin-left: 50px;
  margin-bottom: 10px;
`;

const ReviewStarsCont = styled.View`
  bottom: 17%;
  margin-left: 200px;
`;
const WalkerProfileCont = styled.View`
  /* position: relative; */
  top: 60%;
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

const OwnerDash = () => {
  return (
    <View>
      <Main>
        <MainCont>
          <Header>
            <TopBar title="Dashboard" />
          </Header>
          <Cont>
            <WalkerProfileCont>
              <WalkerTitleCont>
                <WalkerProfileTitle />
              </WalkerTitleCont>
              <WalkerProfile />
              <ReviewStarsCont>
                <ReviewStars />
              </ReviewStarsCont>
            </WalkerProfileCont>
          </Cont>
          <FooterCont>
            <FooterBar />
          </FooterCont>
        </MainCont>
      </Main>
    </View>
  );
};

export default OwnerDash;
