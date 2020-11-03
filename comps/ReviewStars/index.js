import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Startext = styled.Text`
  padding-left: 5px;
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
  margin-left: auto;
  margin-right: auto;
`;

const ReviewStars = () => {
  return (
    <View>
      <Starscontainer>
        <Star1>
          <img src="unfilled.png"></img>
        </Star1>
        <Star2>
          <img src="unfilled.png"></img>
        </Star2>
        <Star3>
          <img src="unfilled.png"></img>
        </Star3>
        <Star4>
          <img src="unfilled.png"></img>
        </Star4>
        <Star5>
          <img src="unfilled.png"></img>
        </Star5>
        <Startext>
          <Text>(30)</Text>
        </Startext>
      </Starscontainer>
    </View>
  );
};

export default ReviewStars;
