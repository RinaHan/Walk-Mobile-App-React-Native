import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const EventCont = styled.View`
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

const Buttontext = styled.Text`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const Buttonbox = styled.View`
  background: #959494;
  border-radius: 4px;
  width: 107px;
  padding: 10px;
  display: flex;
  align-items: right;
  justify-content: right;
  margin-top: 8px;
`;

const Details = styled.Text`
  display: flex;
  justify-content: left;
  align-items: left;
`;

const AttendCont = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: left;
`;

const Paw = styled.View`
  width: 20px;
  height: 20px;
  display: flex;
  margin-left: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Number = styled.Text`
  justify-content: left;
  align-items: left;
`;

const Subhead = styled.Text`
  color: #53b7be;
`;

const Title = styled.Text``;

const EventInfo = () => {
  return (
    <View>
      <EventCont>
        <Title>
          <Text>
            <h2>Rocky Point Park</h2>
          </Text>
        </Title>
        <Subhead>
          <Text>Wednesday, Oct 6th 2020</Text>
        </Subhead>
        <AttendCont>
          <Number>
            <Text>6</Text>
          </Number>
          <Paw>
            <img src="paw.png"></img>
          </Paw>
        </AttendCont>
        <Details>
          <Text>
            2:00pm <br></br>more details here<br></br>more details here
          </Text>
        </Details>
        <Buttonbox>
          <Buttontext>
            <Text>Interested</Text>
          </Buttontext>
        </Buttonbox>
      </EventCont>
    </View>
  );
};

export default EventInfo;
