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


import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import ReviewStars from "./comps/ReviewStars";
import YourReview from "./comps/YourReview";
import ShareFeedback from "./comps/ShareFeedback";
import FooterBar from "./comps/FooterBar";
import TopBar from "./comps/TopBar";
import Description from "./comps/Description";
import AvatarForm05 from "./comps/AvatarForm/AvatarForm05";
import BasicButton from "./comps/WButton/BasicButton";


const Main = styled.View`
  width: 375px;
  height: 812px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  align-items: center;
`;

const MainCont = styled.View`
 height: 100%;
 
`;
const Header = styled.View``;

const Cont = styled.View`
  /* height: 100%; */
  /* background-color: blue; */
  /* overflow-y: scroll; */
  
`;

const WalkerStars = styled.View`
  /* flex-direction: row; */
`;
const AvatarCont = styled.View`
  /* margin-top: 40px; */
`;
const StarsCont = styled.View`
  /* margin-left: 160px; */
`;







const PostButtonCont = styled.View`
  /* background-color: blue; */
`;

const CancelButtonCont = styled.View`
  /* background-color: blue; */
`;

const ButtonCont = styled.View`
  flex-direction: row;
  width: 345px;
  justify-content: space-between;
`;






const TypeCont = styled.View`
  margin-top: 20px;
`;

const ShareFeedbackCont = styled.View`
  margin-top: 70px;
  margin-right: 60px;
`;



const YourReviewCont = styled.View`
  margin-top: 120px;
  margin-right: 200px;
`;



const FooterCont = styled.View`
  width: 375px;
  position: absolute;
  bottom: 0;
`;


const LeaveReview = () => {
  return (

        <MainCont>
          <Header>
            <TopBar title="Leave a Review" />
          </Header>
          
          <ScrollView/>
          <Cont>
            <WalkerStars>

                <AvatarCont>
                  <AvatarForm05 name="Mason K." />
                </AvatarCont>


            </WalkerStars>

            {/* <YourReviewCont>
              <YourReview numstar={3} />
            </YourReviewCont>

            <ShareFeedbackCont>
              <ShareFeedback />
            </ShareFeedbackCont>

            <TypeCont>
              <Description />
            </TypeCont>

            <ButtonCont>
              <CancelButtonCont>
                <BasicButton
                  text="Cancel"
                  // backgroundColor="#EAF6F7"
                  // color="#565555"
                  height={45}
                  width={137}
                />
              </CancelButtonCont>
              <PostButtonCont>
                <BasicButton
                  text="Post Review"
                  // backgroundColor="#565555"
                  height={45}
                  width={137}
                />
              </PostButtonCont>
            </ButtonCont> */}
          </Cont>

<ScrollView/>
            <FooterBar />

        </MainCont>

  );
};

export default LeaveReview;

