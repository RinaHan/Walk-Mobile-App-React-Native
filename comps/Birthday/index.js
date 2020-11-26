import React, {useState, useEffect} from "react";
import styled from "styled-components/native";
import { View, Text, ScrollView } from "react-native";
import { tsConstructorType } from "@babel/types";

const MainCont = styled.View`
  width: 304px;
  height: 80%;
 
  /* background-color:#DBD; */
  /* margin:30px 30px; */
 justify-content:center;
 
`;
const Cont = styled.View`
  width:100%;
  height:93%;

  flex-direction:row;
`;
const Month = styled.View`
  flex:3;
  /* background-color:#DCD; */
  align-items:center;
  flex-direction:column;
`;
const ChildMonth = styled.View`
  width: 108px;
  height: 34px;

  border: 1px solid #E5E5E5;
  border-radius: 4px;
  flex-direction:row;
  align-content:space-between;
  align-items:center;

`;
const MonthDrop = styled.ScrollView`
  width:108px;
  height:280px;
  /* background-color:#BCB; */
  display:${props=>props.expandM ? "none" : "flex"};
  flex-direction:column;
  background-color: #FFFFFF;
`;
const MonthOption = styled.TouchableOpacity`
  height:30px;
  background-color: white;
  border:.5px solid lightgrey;
  justify-content:center;
`;
const Day = styled.ScrollView`
  flex:2;
  /* background-color:#DAD; */
`;
const ChildDay = styled.View`
  width: 66px;
  height: 34px;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  flex-direction:row;
  align-content:space-between;
  align-items:center;
`;
const DayDrop = styled.ScrollView`
  width:66px;
  height:280px;
  background-color:#BCB;
  display:${props=>props.expandD ? "none" : "flex"};
  flex-direction:column;
  background-color: #FFFFFF;
`;
const DayOption = styled.TouchableOpacity`
  height:30px;
  background-color: #FFFFFF;
  border:.5px solid lightgrey;
  justify-content:center;
`;
const Year = styled.View`
  flex:3;
  /* background-color:#FCD; */

  align-items:center;
`;
const ChildYear = styled.View`
  width: 108px;
  height: 34px;
  background-color: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  flex-direction:row;
  align-items:center;
  align-content:space-between;
`;
const YearDrop = styled.ScrollView`
  width:108px;
  height:280px;
  /* background-color:#BCB; */
  display:${props=>props.expandY ? "none" : "flex"};
  flex-direction:column;

  background-color: #FFFFFF;
 
`;
const YearOption = styled.TouchableOpacity`
  width:108px;
  height:30px;
  background-color: #FFFFFF;
  border:.5px solid lightgrey;
 
  justify-content:center;
`;
const ImgCont = styled.TouchableOpacity`
  width:15px;
  height:8px;
  right:5px;
  position:absolute;
`;
const Arrow = styled.Image`
width:100%;
height:100%;
`;
const downarrow = require("./downarrow.png");
const Birthday = ({onPress, month}) => {
  const [expandM, setExpandM] = useState(true)
  const [expandD, setExpandD] = useState(true)
  const [expandY, setExpandY] = useState(true)

  const months = ["January", "february", "march", "april", "may", "june", "july", "august",
   "september", "october", "november", "december"];
  const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
  "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
  "24","25","26","27","28","29","30","31",];
  const years = ["2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992",
  "1991","1990","1989","1987","1986","1985","1984","1983","1982","1981","1980","1979","1978",
  "1977","1976","1975","1974","1973","1972","1971","1970","1969","1968","1967","1966","1965",];
  const [tMonth, setMonth] = useState("");
  const [tDay, setDay] = useState("");
  const [tYear, setYear] = useState("");

const HandleMonth = (month_str)=>{
  setMonth(month_str);
  setExpandM(!expandM);
}
const HandleDay = (day_str)=>{
  setDay(day_str);
  setExpandD(!expandD);
}
const HandleYear = (year_str)=>{
  setYear(year_str);
  setExpandY(!expandY);
}

  return (
    <View>
      <MainCont>
        <Text>Birthday</Text>
        <Cont>
        <Month>
          <ScrollView>
          <ChildMonth>
            <Text>{tMonth}</Text>
            <ImgCont onPress={()=>{
              setExpandM(!expandM);
            }}>
              <Arrow source={downarrow} />
            </ImgCont>
          </ChildMonth>
          <MonthDrop expandM={expandM}>
            {months.map((o,i)=>{
              return <MonthOption key={i}
              onPress={HandleMonth.bind(this, o)}
              
              ><Text>{o}</Text></MonthOption>
            })}        
          </MonthDrop>
          </ScrollView>
        </Month>
        <Day>
           <ScrollView>
          <ChildDay>
          <Text>{tDay}</Text>
            <ImgCont onPress={()=>{
              setExpandD(!expandD);
            }}>
              <Arrow source={downarrow} />
            </ImgCont>
          </ChildDay>
          <DayDrop expandD={expandD}>
          {days.map((o,i)=>{
              return <DayOption key={i}
              onPress={HandleDay.bind(this, o)}
              ><Text>{o}</Text></DayOption>
            })}        
          </DayDrop>
            </ScrollView>
        </Day>
        <Year>
          <ChildYear>
            <Text>{tYear}</Text>
            <ImgCont onPress={()=>{
              setExpandY(!expandY);
            }}>
            <Arrow source={downarrow} />
            </ImgCont>
          </ChildYear>
          <YearDrop expandY={expandY}>
              {years.map((o,i)=> {
                return <YearOption key={i}
                onPress={HandleYear.bind(this, o)}
                ><Text>{o}</Text></YearOption>
              })}
          </YearDrop>
        </Year>
        </Cont>
      </MainCont>
    </View>
  );
};

Birthday.defaultProps = {
  
};
export default Birthday;
