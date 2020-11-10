import React, {useState} from "react";
import styled, { css } from "styled-components/native";
import { View } from "react-native";

const Component = styled.View`
  margin:30px 30px;
  width:273px;
  height:180px;
`;

const MainCont = styled.View`
  width:273px;
  height:62px;
  /* background-color:#DDB; */
  display:flex;
  justify-content:flex-end;
`;

const Cont = styled.View`
  width:273px;
  height:40px;
  /* background-color:#BDB; */
  display:flex;
  align-items:center;
  justify-content:flex-end;
  flex-direction:row;
  padding-right:8px;
  padding-left:8px;
  background: #FFFFFF;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
`;

const ImgCont = styled.View`
  width:12px;
  height:12px;
`;

const Options = styled.View`
  width:273px;
  height:80px;
  /* background-color:#BCD; */
  display:${props=>props.expand ? "none" : "inline-flex"};
  flex-direction:column;
`;

const Country = styled.View`
  flex:1;
  background: #FFFFFF;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  display:flex;
  justify-content:center;
  padding-left:4px;
`;

const Dropdown = ({text, country}) => {
  const [expand, setExpand] = useState(false)
  return (
    <View>
      <Component>
      <MainCont>
        <text>{text}</text>
        <Cont>{country}
          <ImgCont
            onClick={()=>{
              setExpand(!expand);
            }}>
              <img src="downarrow.png" /></ImgCont>
        </Cont>
      </MainCont>
      <Options expand={expand}>
        <Country><text>Canada</text></Country>
        <Country><text>United States</text></Country>
      </Options>
      </Component>
    </View>
  );
};

Dropdown.defaultProps = {
  text:"Country",
  country:"",

};

export default Dropdown;
