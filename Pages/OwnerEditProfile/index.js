import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components/native";


import Input from "../../comps/Input";
import Likes from "../../comps/Likes";
import AddImage from "../../comps/AddImage";
import Spacer from "../../comps/Spacer";
import TopBar from "../../comps/TopBar";
import FooterBar from "../../comps/FooterBar";
import Avatar06 from "../../comps/Avatar/Avatar06";
import Dislikes from "../../comps/Dislikes";
import Province from "../../comps/Province";

const Main = styled.View`
  width: 375px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  /* align-items: center; */
`;
const MainCont = styled.ScrollView`
  width: 100%;
`;
const FooterCont = styled.View`
  width: 375px;
  position: absolute;
  bottom: 0;
`;
const Cont = styled.View`
  width: 100%;
  height: 86%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom:150px;
`;
const Top = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #dad; */
`;
const BasicInfo = styled.View`
  width: 100%;
  align-items: center;
  align-content:space-between;
`;
const TitleText = styled.Text`
  font-weight: 500;
  font-size: 14px;
  margin-left: 46px;
  margin-top: 10px;
`;
const TitleText2 = styled.Text`
  color: #565555;
  font-size: 12px;
  margin-left: 46px;
  margin-top: 10px;
`;
const DogInfo = styled.View`
  width: 100%;
  height:380px;
`;
const InputCont = styled.View`
  width: 100%;
  /* background-color: #bba; */
  align-items: center;
  height:200px;
  z-index: 2;
  margin-top:14px;
  align-content:space-between;
`;
const InputCont2 = styled.View`
  width: 100%;
  /* background-color: #acb; */
  align-items: center;
  margin-top: 10px;
  justify-content: space-evenly;
`;
const LikesCont = styled.View`
  width: 92%;
  height:300px;
  justify-content: space-evenly;

`;
const PersonalInfo = styled.View`
  width: 100%;
  margin-top:10px;
`;
const PostCont = styled.View`
  width: 100%;
  /* background-color: #ada; */
`;
const AddCont = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 20px;
`;

const OwnerEditProfile = () => {
  const [dogname, setDogName] = useState("");
  const [dogage, setDogAge] = useState("");
  const [dogbreed, setDogBreed] = useState("");
  const [dogemail, setDogEmail] = useState("");
  const [dogphone, setDogPhone] = useState("");
  const [dogadress, setDogAdress] = useState("");
  const [dogzip, setDogZip] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{flex:1}}
    >
      <Main>
        <MainCont>
          <TopBar title="Edit Profile" text1="Cancel" text2="Done" />
          <Cont>
            <Top>
              <Avatar06 />
            </Top>
            <Spacer />
            <BasicInfo>
              <Input
                text="Name"
                height="35px"
                onChangeText={(t) => {
                  // alert(t);
                  setDogName(dogname);
                }}
              />
              <Input
                text="Age"
                height="35px"
                onChangeText={(t) => {
                  // alert(t);
                  setDogAge(dogage);
                }}
              />
              <Input
                text="Breed"
                height="35px"
                onChangeText={(t) => {
                  // alert(t);
                  setDogBreed(dogbreed);
                }}
              />
            </BasicInfo>
            <Spacer />
            <DogInfo>
              <TitleText><Text>Dog Information</Text></TitleText>
              <InputCont>
                <Input
                  text="Bio"
                  height="48px"
                  onChangeText={(t) => {
                    // alert(t);
                    setDogBreed(dogbreed);
                  }}
                />
                <LikesCont>
                  <Likes 
                  maintext="Likes"
                  />
                  <Dislikes 
                      maintext="Dislikes"
                  />
                </LikesCont>
              </InputCont>
            </DogInfo>
            <Spacer />
            <PersonalInfo>
              <TitleText><Text>Personal Information</Text></TitleText>
              <InputCont2>
                <Input
                  text="Email"
                  height="35px"
                  onChangeText={(t) => {
                    // alert(t);
                    setDogEmail(dogemail);
                  }}
                />
                <Input
                  text="Phone" height="35px"
                  onChangeText={(t) => {
                    // alert(t);
                    setDogPhone(dogphone);
                  }}
                />
               
                <Province text="Province" />
           
                <Input
                  text="Adress"
                  height="35px"
                  onChangeText={(t) => {
                    // alert(t);
                    setDogAdress(dogadress);
                  }}
                />
                <Input
                  text="Zip Code"
                  height="35px"
                  onChangeText={(t) => {
                    // alert(t);
                    setDogZip(dogzip);
                  }}
                />
                    
              </InputCont2>
            </PersonalInfo>
            <Spacer />
            <PostCont>
              <TitleText><Text>Posts</Text></TitleText>
              <TitleText2><Text>Add pup pics here!</Text></TitleText2>
              <AddCont>
                <AddImage />
              </AddCont>
            </PostCont>
          </Cont>
          
        </MainCont>
        <FooterCont>
            <FooterBar />
          </FooterCont>
      </Main>
    </KeyboardAvoidingView>
  );
};

export default OwnerEditProfile;
