import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";

const EventCont = styled.View`
  /* margin-left: auto;
  margin-right: auto; */
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
`;

const Buttontext = styled.Text`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const Buttonbox = styled.TouchableOpacity`
  background: ${(props) => (props.highlight ? "#959494" : "#53B7BE")};
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
  font-weight: 400;
  padding: 5px;
`;

const AttendCont = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: left;
  padding: 5px;
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
  font-weight: 500;
`;

const Subhead = styled.Text`
  color: #53b7be;
  font-weight: 400;
  padding-top: 5px;
`;

const Title = styled.Text`
  font-weight: 700;
`;

const PawImg = styled.Image`
  width: 20px;
  height: 20px;
  font-weight: 700;
`;

const paw = require("./paw.png");

const EventInfo = ({ text }) => {
  const [highlight, setHighlight] = useState(true);

  return (
    <View>
      {/* <EventCont>
        <Title>
          <Text>Rocky Point Park</Text>
        </Title>
        <Subhead>
          <Text>Wednesday, Oct 6th 2020</Text>
        </Subhead>
        <AttendCont>
          <Number>
            <Text>6</Text>
          </Number>
          <Paw>
            <PawImg source={paw} />
          </Paw>
        </AttendCont>
        <Details>
          <Text>
            2:00pm <br></br>Dog friendly park<br></br>Weather permitting
          </Text>
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
      </EventCont> */}
    </View>
  );
};

EventInfo.defaultProps = {
  text: "Interested",
  onPress: () => {}
};

export default EventInfo;

