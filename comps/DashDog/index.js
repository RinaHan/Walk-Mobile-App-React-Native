import React from "react";
import styled from "styled-components/native";
import {View, Text, TouchableOpacity} from "react-native";


const MainCont = styled.View`
  width:166px;
  height:266px;
  display:flex;
  flex-direction:column;
  /* margin:30px 30px; */
`;
const TitleCont = styled.View`
  width:100%;
  height:23px;
`;
const TitleText = styled.Text`
  font-size:16px;
  font-weight:bold;
`;
const InfoCont = styled.View`
  width:100%;
  height:243px;
  display:flex;
  flex-direction:column;
  border-radius: 10px;
  border:1px solid #d9d9d9;
`;
const TopInfo = styled.View`
  flex:3;
  justify-content:center;
`;
const TopCont = styled.View`
  width:100%;
  height:50px;
  display:flex;
  flex-direction:row;
`;
const ProfPicCont = styled.View`
  flex:3;
  display:flex;
  align-items:center;
  justify-content:center;
`;
const ImgCont = styled.View`
  width:49px;
  height:49px;
`;
const Img = styled.Image`
  width:100%;
  height:100%;
  border-radius:24px;
`;
const ProfTextCont = styled.View`
  flex:4;
  display:flex;
  flex-direction:column;
`;
const Name = styled.View`
  flex:1;
`;
const ViewProfile = styled.TouchableOpacity`
  flex:1;
  display:flex;
  flex-direction:row;
`;
const PText = styled.Text`
  font-size:10px;
  color: #53B7BE;
`;
const ArrowCont = styled.View`
    width:10px;
    height:10px;
    margin-left:4px;
`;
const Arrow = styled.Image`
  width:100%;
  height:100%;
`;
const BottomInfo = styled.View`
  flex:4;
  display:flex;
  align-items:center;
  justify-content:flex-start;
`;
const BottomCont = styled.View`
  width:100%;
  height:80%;
  display:flex;
  flex-direction:column;
`;
const AgeCont = styled.View`
  flex:1;
  width:100%;
  display:flex;
  flex-direction:row;
`;
const BreedCont = styled.View`
  flex:1;
  width:100%;
  display:flex;
  flex-direction:row;
`;
const LikesCont = styled.View`
  flex:1;
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
`;
const DisplayLikes = styled.View`
  width:80%;
  height:90px;
  display:flex;
  align-items:center;
  align-content:space-around;
`;
const Title = styled.View`
  height:100%;
  flex:2;
  display:flex;
  justify-content:center;
`;
const TitleText2 = styled.Text`
  font-weight:bold;
  font-size: 12px;
`;
const Info = styled.View`
  height:100%;
  flex:5;
  align-items:flex-start;
  justify-content:center;
  padding-left:4px;
`;
const InfoText = styled.Text`
  font-weight: normal;
  font-size: 12px;
  color: #565555;
`;
const NameText = styled.Text`
font-weight: 500;
font-size: 18px;
`;


const rightarrow = require("./right.png");

//get dogname, age, breed from OwnerEditProfile
//get likeOne, likeTwo, likeThree from ./Comps/Likes
const DashDog = ({dogname, dogpicture, age, breed, likeOne, likeTwo, likeThree}) => {
  return (
    <View>
      <MainCont>
        <TitleCont><TitleText>Dog Profile</TitleText></TitleCont>
        <InfoCont>
          <TopInfo>
            <TopCont>
              <ProfPicCont>
                <ImgCont><Img source={dogpicture}/></ImgCont>
              </ProfPicCont>
              <ProfTextCont>
                <Name><NameText>{dogname}</NameText></Name>
                <ViewProfile onPress={() => {
                    alert("Take me to OwnerProfilePage")
                }
                  }>
                  <PText><Text>View full profile</Text></PText>
                  <ArrowCont><Arrow source={rightarrow}/></ArrowCont>
                  </ViewProfile>
              </ProfTextCont>
            </TopCont>
          </TopInfo>
          <BottomInfo>
            <BottomCont>
              <AgeCont>
                <Title><TitleText2><Text>Age</Text></TitleText2></Title>
                <Info><InfoText><Text>{age}</Text></InfoText></Info>
              </AgeCont>
              <BreedCont>
                <Title><TitleText2><Text>Breed</Text></TitleText2></Title>
                <Info><InfoText><Text>{breed}</Text></InfoText></Info>
              </BreedCont>
              <LikesCont>
                <Title><TitleText2><Text>Likes</Text></TitleText2></Title>
                <DisplayLikes>
                  <InfoText>{likeOne}</InfoText>
                  <InfoText>{likeTwo}</InfoText>
                  <InfoText>{likeThree}</InfoText>
                </DisplayLikes>
              </LikesCont>
            </BottomCont>
          </BottomInfo>
        </InfoCont>
      </MainCont>
    </View>
  );
};

DashDog.defaultProps = {
  dogname:"Lucky",
  age:"6",
  breed:"Golden Retriever",
  dogpicture: require("./Lucky.png")
  
};
export default DashDog;
