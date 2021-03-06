import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import styled from "styled-components/native";
import TopBar from "../../comps/TopBar";
import EventInfo from "../../comps/EventInfo";
import FooterBar from "../../comps/FooterBar";
import Spacer from "../../comps/Spacer";


const MainCont = styled.View`
  /* width: 100%; */
  height: 100%;
  /* background-color:red; */
  /* margin-left:20; */
  
  /* align-items:center; */
  /* justify-content:center; */
`;

const Cont = styled.View`
/* width:80%; */
/* justify-content:center; */
align-items:center;
`;

const Section = styled.View`
 margin-top:20px;
  /* justify-content:center; */
flex-direction:row;
`;

const EventsCont = styled.View`
  
  justify-content:center;
  width:170px;
  align-items:center;
`;

const SpacerCont = styled.View`
  margin-top: 20px;
  padding-bottom: 20px;
`;

const EventImg = styled.View`
`;

const DisplayPic = styled.Image`
  width:180px;
  height:200px;
  /* justify-content:center; */
  /* align-items:center; */
`;

const place0 = require("../../Public/rocky-point.png");
const place1 = require("../../Public/derby-reach.png");
const place2 = require("../../Public/queen-elizabeth.png");

const Events = ({}) => {
  return (

    <MainCont>
      <TopBar title="Events" />
      <ScrollView>

        <Cont>

          <Section>
          <EventsCont>
            <EventInfo
              title="Rocky Point Park"
              date="Wednesday, Dec 7th 2020"
              number="6"
              time="2:00pm"
              detail1="Small Dogs"
              detail2="At the park"
            />
          </EventsCont>

          <EventImg>
            <DisplayPic source={place0} />
          </EventImg>
          </Section>
        </Cont>

        <SpacerCont>
          <Spacer />
        </SpacerCont>


        <Cont>
          <Section>
          <EventsCont>
            <EventInfo
              title="Derby Reach Regional Park"
              date="Sunday, Nov 8th 2020"
              number="7"
              time="1:00pm"
              detail1="Let's Walk"
              detail2="through a track"
            />
          </EventsCont>
          <EventImg>
            <DisplayPic source={place1} />
          </EventImg>
          </Section>
        </Cont>
        <SpacerCont>
          <Spacer />
        </SpacerCont>

        <Cont>
          <Section>
          <EventsCont>
            <EventInfo
              title="Queen Elizabeth Dog Park"
              date="Wednesday, Dec 7th 2020"
              number="6"
              time="2:00pm"
              detail1="Small Dogs"
              detail2="At the park"
            />
          </EventsCont>
          <EventImg>
            <DisplayPic source={place2} />
          </EventImg>
          </Section>
        </Cont>
        <SpacerCont>
          <Spacer />
        </SpacerCont>
        
      </ScrollView>
      <FooterBar />
    </MainCont>
   
  );
};

export default Events;