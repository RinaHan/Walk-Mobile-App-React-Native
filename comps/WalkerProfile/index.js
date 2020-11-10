import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const MainCont = styled.View`
  width:353px;
  height:196px;
  background: #FFFFFF;
  mix-blend-mode: normal;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 26px;
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  /* margin:30px 30px; */
`;

const LeftCont = styled.View`
  flex:1;
  /* background-color:#DDA; */
  display:flex;
  flex-direction:column;
  align-items:flex-end;
`;

const Location = styled.View`
  flex:1;
  /* background-color:red; */
  width:55%;
  margin-top:10px;
  margin-right:26px;
  display:flex;
  flex-direction:row;
  align-items:center;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  justify-content:space-between;

`;

const Title = styled.View`
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  
`;

const Age = styled.View`
  flex:1;
  width:20%;
  /* background-color:#CCA; */
  display:flex;
  flex-direction:row;
  align-items:center;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  margin-right:88px;
  justify-content:space-between;

`;
const Bio = styled.View`
  flex:3;
  width:70%;
  /* background-color:#DCC; */
  display:flex;
  flex-direction:row;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  justify-content:space-between;
`;

const BioCont = styled.View`
  width:100px;
`;

const ViewProfile = styled.View`
  flex:1;
  width:70%;
  /* background-color:blue; */
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  color: #565555;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  flex-direction:row;
`;

const ImgCont = styled.View`
  width:12px;
  height:12px;
  /* background-color:red; */
  img {
    width:100%;
    height:100%;
    object-fit:cover;
  }
`;

const RightCont = styled.View`
  flex:1;
  /* background-color:#ADA; */
  display:flex;
  align-items:center;
  justify-content:center;
`;

const Cont = styled.View`
  height:158px;
  width:148px;
  /* background-color:#CBA; */
  display:flex;
  flex-direction:column;
  align-items:center;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  color: #000000;
`;

const ProfPic = styled.View`
  width:85px;
  height:85px;
  background-color:blue;
  border-radius:44px;
  img {
    width:100%;
    height:100%;
    object-fit:cover;
  }
`;
const Name = styled.View`
  /* background-color:red; */
  width:80%;
  height:20px;
  margin-top:10px;
  align-items:center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;

const Rating = styled.View`
  width:100%;
  height:20px;
`;

const WalkerProfile = ({city, age, bio, name, pic}) => {
  return (
    <View>
      <MainCont>
        <LeftCont>
          <Location><Title><text>Location</text></Title><text>{city}</text></Location>
          <Age><Title><text>Age</text></Title><text>{age}</text></Age>
          <Bio><Title><text>Bio</text></Title><BioCont><text>{bio}</text></BioCont></Bio>
          <ViewProfile><text>View full profile</text><ImgCont><img width="10px" height="10px" object-fit="cover" src="right.png"/></ImgCont></ViewProfile>
        </LeftCont>
        <RightCont>
          <Cont>
            <ProfPic><img height="80" width="80" object-fit="cover" src={pic}/></ProfPic>
            <Name>{name}</Name>
            <text>Certified Walker</text>
            <Rating></Rating>
          </Cont>
        </RightCont>
      </MainCont>
    </View>
  );
};

WalkerProfile.defaultProps = {
  city:"Burnaby, BC",
  age:"23",
  bio:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or sure there",
  name:"Ethan P",
  pic:"ethan.jpeg"
};
export default WalkerProfile;
