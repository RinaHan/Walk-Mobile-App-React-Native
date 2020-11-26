import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/native";
import { View, Text, Image, StyleSheet } from "react-native";

const Component = styled.View`
  /* margin:30px 30px; */
  width: 273px;
 

  /* background-color:#DDB; */
`;

const MainCont = styled.View`
  width: 273px;
  height: 62px;
  /* background-color:#DDB; */
  display: flex;
  justify-content: flex-end;
  justify-content:center;
`;

const Cont = styled.View`
  width: 280px;
  height: 40px;
  /* background-color:#BDB; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-right: 8px;
  padding-left: 8px;
  background-color: #ffffff;
  border:1px solid #e3e3e3;
`;

const ImgCont = styled.TouchableOpacity`
  width: 15px;
  height: 8px;
  /* background-color:red; */
`;

const Options = styled.View`
  width: 280px;
  height: 80px;
  background-color: #bcd;
  position:relative;
  display: ${(props) => (props.expand ? "none" : "flex")};
  flex-direction: column;
  border:1px solid #e3e3e3;
`;

const Country = styled.TouchableOpacity`
  flex: 1;
  background-color: #ffffff;
  
  display: flex;
  justify-content: center;
  padding-left: 4px;
`;

const Arrow = styled.Image`
  width: 100%;
  height: 100%;
`;

const styles = StyleSheet.create({ 
  text: {
    fontSize:20,
    marginBottom:5
  },
});

const downarrowimg = require("./downarrow.png");

const Dropdown = ({ text }) => {
  const [expand, setExpand] = useState(true);
  const [tCountry, setCountry] = useState("");

  const HandleCanada = ()=>{
    setCountry("Canada");
    setExpand(!expand);
  }
  const HandleUsa = ()=>{
    setCountry("Unites States");
    setExpand(!expand);
  }
  return (
    <View>
      <Component>
        <MainCont>
          <Text style={styles.text}>{text}</Text>
          <Cont>
            <Text>{tCountry}</Text>
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
          <Country
            onPress={() => {
              HandleCanada();
            }}
          >
            <Text>Canada</Text>
          </Country>
          <Country
            onPress={() => {
              HandleUsa();
            }}
          >
            <Text>United States</Text>
          </Country>
        </Options>
      </Component>
    </View>
  );
};

Dropdown.defaultProps = {
  text: "Country",
  country: "",
  tCountry: ""
};

export default Dropdown;
