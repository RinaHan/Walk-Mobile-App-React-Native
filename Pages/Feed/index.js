import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import styled from "styled-components/native";

import Post from "../../comps/Post";
import AvatarEdit from "../../comps/Avatar/AvatarEdit";
import FooterBar from "../../comps/FooterBar";
import BasicAvatar from "../../comps/Avatar/BasicAvatar";


const Main = styled.View`
 height: 100%;
 margin-top:20px;
`;
const MainCont = styled.View`
`;
const FooterCont = styled.View`
`;
const Cont = styled.View`
  margin-bottom:70px;
`;
const Feed = () => {
  return (
    <Main>
      <ScrollView>
        <Cont>
          <Post 
          time="1"
          AvatarImage={require('../../Public/dog4.jpg')}
          display={require('../../comps/Avatar/face11.jpg')}
          />
        </Cont>
        <Cont>
          <Post 
          text="DaisyLucas"
          AvatarImage={require('../../Public/dog6.jpg')}
           display={require('../../comps/Avatar/face12.jpg')}
           />
        </Cont>
        <Cont>
          <Post 
          text="Lucas"
          time="1"
          AvatarImage={require('../../Public/dog1.jpg')}
           display={require('../../comps/Avatar/face13.jpg')}
           />
        </Cont>
        {/* <Cont>
          <Post 
           display={require('../../comps/Avatar/face9.jpg')}
           />
        </Cont> */}

      </ScrollView>
      <FooterBar />
    </Main>
  );
};

export default Feed;

