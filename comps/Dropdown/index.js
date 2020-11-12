import React, {useState, useEffect} from "react";
import styled, { css } from "styled-components/native";
import { View, Text, Image } from "react-native";

const Component = styled.View`
  /* margin:30px 30px; */
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
  justify-content:space-between;
  flex-direction:row;
  padding-right:8px;
  padding-left:8px;
  background-color: #FFFFFF;
  border:1px solid lightgrey;
`;

const ImgCont = styled.TouchableOpacity`
  width:15px;
  height:8px;
  /* background-color:red; */
`;

const Options = styled.View`
  width:273px;
  height:80px;
  /* background-color:#BCD; */
  display:${props=>props.expand ? "none" : "inline-flex"};
  flex-direction:column;
`;

const Country = styled.TouchableOpacity`
  flex:1;
  background-color: #FFFFFF;
  border:1px solid lightgrey;
  display:flex;
  justify-content:center;
  padding-left:4px;
`;

const Arrow = styled.Image`
  width:100%;
  height:100%;
`;

const Dropdown = ({text, country}) => {
  const [expand, setExpand] = useState(true)
  const [tCountry, setCountry] = useState("")

useEffect(()=>{
  setCountry(country)
},[country])

  return (
    <View>
      <Component>
      <MainCont>
        <Text>{text}</Text>
        <Cont><Text>{tCountry}</Text>
          <ImgCont
            onPress={()=>{
              setExpand(!expand);
            }}>
              <Arrow source={require=("./downarrow.png")} />
              </ImgCont>
        </Cont>
      </MainCont>
      <Options expand={expand}>
        <Country onPress={()=> {
          setCountry("Canada")
        }}>
          <Text>Canada</Text></Country>
        <Country onPress={()=> {
          setCountry("United States")
        }}><Text>United States</Text></Country>
      </Options>
      </Component>
    </View>
  );
};

Dropdown.defaultProps = {
  text:"Country",
  country:"",
  tCountry:""

};

export default Dropdown;
