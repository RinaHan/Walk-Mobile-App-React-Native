import React, {useState} from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const MainCont = styled.View`
  width:375px;
  height:30px;
  /* background-color:#BDB; */
  margin:30px 30px;
  display:flex;
  flex-direction:row;
  cursor: pointer;
`;

const Left = styled.View`
  flex:1;
  height:30px;
  display:flex;
  justify-content:flex-end;
  flex-direction:column;
  align-items:center;
  font-weight:${props=>props.general ? "bold" : "normal"};
`;

const LeftBar = styled.View`
width:100%;
height:2px;
background-color:${props=>props.general ? "black" : "#d6d6d6"};
`;

const Right = styled.View`
  flex:1;
  height:30px;
  display:flex;
  justify-content:flex-end;
  flex-direction:column;
  align-items:center;
  font-weight:${props=>props.general ? "normal" : "bold"};
`;

const RightBar = styled.View`
width:100%;
height:2px;
background-color:${props=>props.general ? "#d6d6d6" : "black"};
`;

const MsgSelection = ({}) => {
  const [general, setGeneral] = useState(false)
  return (
    <View>
      <MainCont onClick={()=>{
        setGeneral(!general);
      }}>
       <Left general={general}>
         <text>General</text>
         <LeftBar general={general}></LeftBar>
       </Left>
       <Right general={general}>
       <text>Walk Requests</text>
         <RightBar general={general}></RightBar>
       </Right>
      </MainCont>
    </View>
  );
};
MsgSelection.defaultProps = {};
export default MsgSelection;
