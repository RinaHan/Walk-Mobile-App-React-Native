import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const MainCont = styled.View`
  /* background-color: #dbd; */
  width: 290px;
  height: 104px;
  display: flex;
  flex-direction: row;
`;

const LeftSide = styled.View`
  /* background-color: #bbd; */
  flex: 3;
  display: flex;
  align-items: center;
  padding: 4px;
`;

const RightSide = styled.View`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const OpOne = styled.View`
  width: 100%;
  height: 27px;
  border: 1px solid #e5e5e5;
`;

const OpTwo = styled.View`
  width: 100%;
  height: 27px;
  border: 1px solid #e5e5e5;
`;

const OpThree = styled.View`
  width: 100%;
  height: 27px;
  border: 1px solid #e5e5e5;
`;

const Likes = ({ maintext}) => {
  return (
    <View>
      <MainCont>
        <LeftSide>
          <text>{maintext}</text>
        </LeftSide>
        <RightSide>
          <OpOne>
          <input placeholder="Type something..." />
          </OpOne>
          <OpTwo>
          <input placeholder="Type something..." />
          </OpTwo>
          <OpThree>
            <input placeholder="Type something..." />
          </OpThree>
        </RightSide>
      </MainCont>
    </View>
  );
};

Likes.defaultProps = {
  maintext: "default",
};
export default Likes;
