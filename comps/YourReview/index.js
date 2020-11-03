import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Reviewtext = styled.Text``;

const Main = styled.View`
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const Star5 = styled.View``;

const Star4 = styled.View``;

const Star3 = styled.View``;

const Star2 = styled.View``;

const Star1 = styled.View``;

const Starscontainer = styled.View`
  width: 124px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

const YourReview = () => {
  return (
    <View>
      <Main>
        <Reviewtext>
          <Text>
            <h1>Your Review</h1>
          </Text>
        </Reviewtext>
        <Starscontainer>
          <Star1>
            <img src="bigunfilled.png"></img>
          </Star1>
          <Star2>
            <img src="bigunfilled.png"></img>
          </Star2>
          <Star3>
            <img src="bigunfilled.png"></img>
          </Star3>
          <Star4>
            <img src="bigunfilled.png"></img>
          </Star4>
          <Star5>
            <img src="bigunfilled.png"></img>
          </Star5>
        </Starscontainer>
      </Main>
    </View>
  );
};

export default YourReview;
