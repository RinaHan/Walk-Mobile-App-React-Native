import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const MainCont = styled.View`
  width: 460px;
  height: 154px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cont = styled.View`
  width: 302px;
  height: 50px;
  /* background-color: #bcb; */
`;

const Title = styled.View`
  width: 100%;
  padding-left: 20px;
  padding-bottom: 6px;
`;

const Inputs = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Month = styled.View`
  width: 100px;
  height: 34px;
  /* background-color: #bdb; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;
`;

const Day = styled.View`
  width: 60px;
  height: 34px;
  /* background-color: #bdc; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;
`;

const Year = styled.View`
  width: 100px;
  height: 34px;
  /* background-color: #ddb; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;
`;

const ImgCont = styled.View`
  width: 10px;
  height: 10px;
  padding-top: 4px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Birthday = ({}) => {
  return (
    <View>
      <MainCont>
        <Cont>
          <Title>
            <text>Birthday</text>
          </Title>
          <Inputs>
            <Month>
              <text>Month</text>
              <ImgCont>
                <img src="downarrow.png" />
              </ImgCont>
            </Month>
            <Day>
              <text>Day</text>
              <ImgCont>
                <img src="downarrow.png" />
              </ImgCont>
            </Day>
            <Year>
              <text>Year</text>
              <ImgCont>
                <img src="downarrow.png" />
              </ImgCont>
            </Year>
          </Inputs>
        </Cont>
      </MainCont>
    </View>
  );
};

Birthday.defaultProps = {};
export default Birthday;
