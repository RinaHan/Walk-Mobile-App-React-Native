// import React, { Component } from "react";
// import { View, StyleSheet } from "react-native";
// import Button from "./comps/Button";


// const App = () => {
//   return (
//     <View>
//         <Button 
//         backgroundColor="red"/>

//       </View>
//   );
// };

// // export default App;
// export {default} from './storybook'; 


import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";

import Texting from "./comps/Texting";
import MsgSent from "./comps/MsgSent";
import MsgRecieved from "./comps/MsgRecieved";
import TopBar from "./comps/TopBar";

const Main = styled.View`

  height: 100%;
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
  height: 100px;
  position: absolute;
  bottom: 0;
  align-items: center;
`;
const Cont = styled.View`
  width: 100%;
  height: 86%;
  /* overflow-y: scroll; */
  /* display: flex; */
  flex-direction: column;
  /* align-items: center; */
  /* background-color: blue; */
  bottom: 70;
  position: absolute;
`;

const Chatting = () => {
  return (
      <Main>
          <TopBar imageLeft1={require("./comps/TopBar/leftArrow.png")} />
       
        <ScrollView>
        <MainCont>
          <Cont>
            <MsgSent />
            <MsgRecieved />
          </Cont>


        </MainCont>
        </ScrollView>
          <FooterCont>
            <Texting />
          </FooterCont>
      </Main>
  );
};

export default Chatting;
