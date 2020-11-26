import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/native";
import { View, Text, ScrollView} from "react-native";

const Component = styled.View`
  width: 273px;
`;

const MainCont = styled.View`
  width: 273px;
  height: 62px;

  display: flex;

  justify-content: flex-end;
`;

const Cont = styled.View`
  width: 273px;
  height: 40px;

  display: flex;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-right: 8px;
  padding-left: 8px;
  background-color: #ffffff;
  border: 1px solid lightgrey;
`;

const ImgCont = styled.TouchableOpacity`
  width: 15px;
  height: 8px;
  /* background-color:red; */
`;

const Options = styled.View`
  width: 273px;

  height: 280px;
  border: 1px solid #EEEEEE;

  display: ${(props) => (props.expand ? "none" : "flex")};
  flex-direction: column;
`;

const Country = styled.TouchableOpacity`
  height:30px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  padding-left: 4px;
`;

const Arrow = styled.Image`
  width: 100%;
  height: 100%;
`;
const downarrowimg = require("./downarrow.png");
const Province = ({ text, province }) => {
  const [expand, setExpand] = useState(true);
  const [tProvince, setProvince] = useState("");

  const HandleBC = ()=>{
    setProvince("British Columbia");
    setExpand(!expand);
  }
  const HandleAB = ()=>{
    setProvince("Alberta");
    setExpand(!expand);
  }
  const HandleMA = ()=>{
    setProvince("Manitoba");
    setExpand(!expand);
  }
  const HandleSA = ()=>{
    setProvince("Saskatchewan");
    setExpand(!expand);
  }
  const HandleON = ()=>{
    setProvince("Ontario");
    setExpand(!expand);
  }
  const HandleQB = ()=>{
    setProvince("Quebec");
    setExpand(!expand);
  }
  const HandleNL = ()=>{
    setProvince("Newfoundland & Labrador");
    setExpand(!expand);
  }
  const HandleNB = ()=>{
    setProvince("New Brunswick");
    setExpand(!expand);
  }
  const HandleNS = ()=>{
    setProvince("Nova Scotia");
    setExpand(!expand);
  }
  const HandlePEI = ()=>{
    setProvince("PEI");
    setExpand(!expand);
  }

  return (
    <View>
      <Component>
        <MainCont>
          <Text>Province</Text>
          <Cont>
            <Text>{tProvince}</Text>
            <ImgCont
              onPress={() => {
                setExpand(!expand);
              }}
            >
              <Arrow source={downarrowimg} />
            </ImgCont>
          </Cont>
        </MainCont>
        <Options expand={expand}>
          <ScrollView>
          <Country onPress={() => { HandleBC();
          }}>
            <Text>British Columbia</Text>
          </Country>
          <Country 
          onPress={() => { HandleAB();
          }}>
            <Text>Alberta</Text>
          </Country>
          <Country
            onPress={() => {HandleSA();
            }} >         
            <Text>Saskatchewan</Text>
          </Country>
          <Country onPress={() => {HandleMA();
            }}>
            <Text>Manitoba</Text>
          </Country>
          <Country
            onPress={() => {HandleON();}}>
            <Text>Ontario</Text>
          </Country>
          <Country
            onPress={() => {HandleQB(); }}>
            <Text>Quebec</Text>
          </Country>
          <Country
            onPress={() => {HandleNL();}}>
            <Text>NL & L</Text>
          </Country>
          <Country onPress={() => { HandleNB();
          }}>
            <Text>New Brunswick</Text>
          </Country>
          <Country
            onPress={() => {
              HandlePEI();
            }}
          >
            <Text>PEI</Text>
          </Country>
          <Country
            onPress={() => {
              HandleNS();
            }}
          >
            <Text>Nova Scotia</Text>
          </Country>
          </ScrollView>
        </Options>
      </Component>
    </View>
  );
};

Province.defaultProps = {
  text: "Country",
  country: "",
  tCountry: ""
};

export default Province;
