import React from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import WriteReview from "./Comps/WriteReview";
import LocationAge from "./Comps/LocationAge";
import UserBio from "./Comps/UserBio";
import FooterBar from "./Comps/FooterBar";
import AvatarWithName from "./Comps/./Avatar/AvatarWithName";
import TopBar from "./Comps/TopBar";

const WriteReviewCont = styled.View`
  margin-top: 150px;
  margin-bottom: 30px;
  margin-left: 20px;
`;

const UserInfoCont = styled.View`
  margin-left: 20px;
  margin-top: 40px;
`;

const AvatarName = styled.View`
  margin-top: 40px;
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

const WalkProfile = () => {
  return (
    <View>
      <Main>
        <MainCont>
          <Header>
            <TopBar title="Walker Profile" />
          </Header>
          <Cont>
            <AvatarName>
              <AvatarWithName text="Mason K" />
            </AvatarName>

            <UserInfoCont>
              <LocationAge />
              <UserBio />
            </UserInfoCont>

            <WriteReviewCont>
              <WriteReview />
            </WriteReviewCont>
          </Cont>
          <FooterCont>
            <FooterBar />
          </FooterCont>
        </MainCont>
      </Main>
    </View>
  );
};

export default WalkProfile;