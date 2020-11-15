import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const TextCont = styled.View`
  display: flex;
  /* margin-left: auto;
  margin-right: auto; */
  /* margin-left: 20px; */
  padding-top: 30px;
`;

const LocationTitle = styled.Text`
  font-weight: 500;
`;

const Locationtext = styled.Text`
  font-weight: 400;
  padding-left: 30px;
  color: #565555;
`;

const LocationCont = styled.Text`
  flex-direction: row;
  padding-bottom: 5px;
`;

const AgeTitle = styled.Text`
  font-weight: 500;
`;

const Agetext = styled.Text`
  font-weight: 400;
  padding-left: 60px;
  color: #565555;
`;

const AgeCont = styled.Text`
  flex-direction: row;
`;

const LocationAge = () => {
  return (
    <View>
      <TextCont>
        <LocationCont>
          <LocationTitle>
            <Text>Location</Text>
          </LocationTitle>
          <Locationtext>
            <Text>Burnaby, BC</Text>
          </Locationtext>
        </LocationCont>

        <AgeCont>
          <AgeTitle>
            <Text>Age</Text>
          </AgeTitle>
          <Agetext>
            <Text>22</Text>
          </Agetext>
        </AgeCont>
      </TextCont>
    </View>
  );
};

export default LocationAge;
