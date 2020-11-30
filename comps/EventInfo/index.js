import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import BasicButton from "../WButton/BasicButton"

const EventCont = styled.View`
  /* align-items:center; */
  /* justify-content:center; */
  /* display: flex; */
  /* width:200px; */
`;

const Buttonbox = styled.TouchableOpacity`
  background: ${(props) => (props.highlight ? "#959494" : "#53B7BE")};
  border-radius: 4px;
  width: 140px;
 height:30px;
  margin-top: 8px;
  align-items:center;
  justify-content:center;

`;

const Buttontext = styled.Text` 
color: #fff;
font-size:16px;
`;

const Details = styled.View`
  /* width:150px; */
  margin-top: 10px;
  margin-bottom: 5px;
  flex-direction: column;
`;


const AttendCont = styled.View`
  /* display: flex; */
  flex-direction: row;
`;

const Paw = styled.View`
  width: 30px;
  height: 30px;
  /* display: flex; */
  /* justify-content:center; */
  /* align-items:center; */
  margin-left: 5px;
`;

const PawImg = styled.Image`
  width: 30px;
  height: 30px;
  /* font-weight: 700; */
`;

const Number = styled.Text`
  /* justify-content: left; */
  /* align-items: left; */
  font-weight: bold;
  font-size:18px;
`;

const Subhead = styled.Text`
  color: #53b7be;
  margin:5px 0;
  font-size:13px;
  font-weight:bold;
  /* width:160px; */
`;

const Title = styled.Text`
  font-weight: bold;
  font-size:18px;
  width:150px;
`;

const ImageCont = styled.View``;

const EventImg = styled.Image`
  /* width: 199px;
  height: 200px; */
`;

const Column = styled.View`
  /* align-items: left; */
`;

const paw = require("../../Public/paw.png");
const derbyreach = require("./derby-reach.png");
const queenelizabeth = require("./queen-elizabeth.png");
const rockypoint = require("./rocky-point.png");

const EventInfo = ({
  text,
  title,
  date,
  number,
  time,
  detail1,
  detail2,
  img
}) => {
  const [highlight, setHighlight] = useState(false);

  return (
      <EventCont>
        <ImageCont>
          <EventImg source={img} />
        </ImageCont>
        <Column>
          <Title>
            <Text>{title}</Text>
          </Title>
          <Subhead>
            <Text>{date}</Text>
          </Subhead>
          <AttendCont>
            <Number>
              <Text>{number}</Text>
            </Number>
            <Paw>
              <PawImg source={paw} />
            </Paw>
          </AttendCont>
          
          <Details>
            <Text>{time}</Text>
            
            <Text>{detail1}</Text>
           
          
            <Text>{detail2}</Text>
           
          </Details>
          <Buttonbox
            onPress={() => {
              setHighlight(!highlight);
            }}
            highlight={highlight}
          >
            <Buttontext>
              <Text>{highlight ? text : "Going"}</Text>
            </Buttontext>
          </Buttonbox>

        </Column>
      </EventCont>
  );
};

export default EventInfo;

EventInfo.defaultProps = {
  text: "Interested",
  onPress: () => {},
  title: null,
  date: null,
  number: null,
  time: null,
  detail1: null,
  detail2: null,
  img: null
};
