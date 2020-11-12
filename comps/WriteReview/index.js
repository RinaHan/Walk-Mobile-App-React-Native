import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const Buttontext = styled.Text`
  color: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Buttoncontainer = styled.View`
  background: ${(props) => (props.highlight ? "#C4C4C4" : "#565555")};
  width: 137px;
  border-radius: 7px;
  padding: 12px;
  cursor: pointer;
  bottom: -300px;
`;

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
`;

const Main = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
  width: 320px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`;

const Reviewcontainer = styled.View`
  flex-direction: column;
  display: flex;
  bottom: -300px;
`;

const Reviewtext = styled.Text`
  margin-bottom: 10px;
`;

const WriteReview = () => {
  const [highlight, setHighlight] = useState(true);

  return (
    <View>
      <Main>
        <Reviewcontainer>
          <Reviewtext>
            <Text>Reviews</Text>
          </Reviewtext>
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
        </Reviewcontainer>

        <Buttoncontainer
          onMouseOver={() => {
            setHighlight(!highlight);
          }}
          highlight={highlight}
          onMouseOver={() => {
            setHighlight(!highlight);
          }}
        >
          <Buttontext>
            <Text>Write a Review</Text>
          </Buttontext>
        </Buttoncontainer>
      </Main>
    </View>
  );
};

export default WriteReview;
