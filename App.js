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
import { View, Text } from "react-native";
import styled from "styled-components/native";

import Input from "./comps/Input";
import TopBar from "./comps/TopBar";
import FooterBar from "./comps/FooterBar";
import BasicButton from "./comps/WButton/BasicButton";
import EventTime from "./comps/EventTime";
import WalkerAuthentication from "./Pages/WalkerAuthentication";
import OwnerEditProfile from "./Pages/OwnerEditProfile";
import Events from "./Pages/EventPage";
import WalkerDashPage from "./Pages/WalkerDashPage";

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
  /* overflow-y: scroll; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: blue; */
  /* bottom: 70; */
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

const addimage = require("./Pages/AddEvent/addphoto.png");
const AddEvent = () => {
  const [eventAdress, setEventAdress] = useState("");
  const [eventCity, setEventCity] = useState("");
  // return<WalkerAuthentication/>
  return<OwnerEditProfile/>
  // return<Events/>
  // return<WalkerDashPage/>
  return (
    <View>
      <Main>
        <MainCont>
          <TopBar
            title="Create an Event"
            // imageLeft1={require("../../Comps/TopBar/leftArrow.png")}
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
                <TitleText><Text>Upload Photo</Text></TitleText>
              </UpTitle>
              <ImgCont
                onPress={() => {
                  alert("Add 1 Photo from Camera Roll to fill Upload const");
                }}
              >
                <Image source={addimage} />
              </ImgCont>
            </Upload>
            <BasicButton />
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






