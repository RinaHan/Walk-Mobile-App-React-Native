import React from "react";
import styled from "styled-components/native";
import { View,  } from "react-native";

const MainCont = styled.View`
  width:376px;
  height:415px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding-top:30px;
`;

const Header = styled.View`
  width:376px;
  height:53px;
  /* background-color:#DBD; */
  display:flex;
  flex-direction:row;
`;

const ProfilePic = styled.View`
  flex:1;
  /* background-color:#BBC; */
  display:flex;
  align-items:center;
  
`;

const ImgCont = styled.View`
  width:40px;
  height:40px;
  /* background-color:blue; */
  border-radius:20px;
  display:flex;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ProfileName = styled.View`
  flex:5;
  /* background-color:#DBB; */
  display:flex;
  flex-direction:column;
  padding-left:8px;
  justify-content:space-evenly;
`;
const Name = styled.View`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  
`;

const ViewProfile = styled.View`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: #53B7BE;
`;

const Time = styled.View`
  flex:1;
  /* background-color:#CCD; */
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: #959494;
  display:flex;
  flex-direction:row;
  align-items:center;
  
`;

const Picture = styled.View`
  width:100%;
 height:328px;
 /* background-color:#BBD; */
`;

const Footer = styled.View`
  width:376px;
  height:34px;
  /* background-color:#DCB; */
  display:flex;
  flex-direction:row;
  
`;

const Icons = styled.View`
  flex:1;
  /* background-color:#ADD; */
  display:flex;
  flex-direction:row;
  
`;

const Heart = styled.View`
  width:40px;
  height:40px;
 
  img {
    max-width:100%;
    max-height:100%;
    object-fit:cover;
  }
`;

const Message = styled.View`
  width:40px;
  height:40px;
 
  img {
    max-width:100%;
    max-height:100%;
    object-fit:cover;
  }
`;

const Distance = styled.View`
  flex:3;
  /* background-color:#DDA; */
  display:flex;
  justify-content:center;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
`;

const Post = ({text, time, picture, distance}) => {
  return (
    <View>
      <MainCont>
        <Header>
          <ProfilePic>
            <ImgCont>
              <img src="Lucky.png"></img>
            </ImgCont>
          </ProfilePic>
          <ProfileName>
            <Name><text>{text}</text></Name>
            <ViewProfile><text>View Profile</text></ViewProfile>
          </ProfileName>
          <Time><text>{time}  hr ago</text></Time>
        </Header>
        <Picture>
          <img src={picture}></img>
        </Picture>
        <Footer>
          <Icons>
            <Heart>
            <img src="like.png" />
            </Heart>
            <Message>
            <img src="message.png" />
            </Message>
            </Icons>
          <Distance>
            <text>{distance} Km away</text>
          </Distance>
        </Footer>
      </MainCont>
    </View>
  );
};

Post.defaultProps = {
  text:"Lucky",
  time:"2",
  picture:"Lucky.png",
  distance:"1"
};
export default Post;
