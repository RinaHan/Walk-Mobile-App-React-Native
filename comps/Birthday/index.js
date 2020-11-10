import React, {useState} from "react";
import styled from "styled-components/native";
import { View, TextInput } from "react-native";

const MainCont = styled.View`
  width: 304px;
  height: 360px;
  display: flex;
  /* background-color:#DBD; */
  margin:30px 30px;
 justify-content:flex-end;
`;
const Cont = styled.View`
  width:100%;
  height:93%;
  display:flex;
  flex-direction:row;
`;
const Month = styled.View`
  flex:3;
  /* background-color:#DCD; */
  display:flex;
  align-items:center;
  flex-direction:column;
`;
const ChildMonth = styled.View`
  width: 108px;
  height: 34px;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 4px;
  display:flex;
  align-items:flex-end;
  justify-content:center;
`;
const MonthDrop = styled.View`
  width:108px;
  height:280px;
  /* background-color:#BCB; */
  display:${props=>props.expandM ? "none" : "inline-flex"};
  flex-direction:column;
`;
const MonthOption = styled.View`
  flex:1;
  background: #FFFFFF;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
`;
const Day = styled.View`
  flex:2;
  /* background-color:#DAD; */
  display:flex;
  align-items:center;
`;
const ChildDay = styled.View`
  width: 66px;
  height: 34px;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 4px;
  display:flex;
  align-items:flex-end;
  justify-content:center;
`;
const DayDrop = styled.View`
  width:66px;
  height:280px;
  /* background-color:#BCB; */
  display:${props=>props.expandD ? "none" : "inline-flex"};
  flex-direction:column;
  overflow-y:scroll;
  background: #FFFFFF;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
`;
const DayOption = styled.View`
  height:30px;
  background: #FFFFFF;
  box-shadow: 1px 1px 5px rgba(0, 0.25, 0, 0.25);
  display:flex;
  justify-content:center;
`;
const Year = styled.View`
  flex:3;
  /* background-color:#FCD; */
  display:flex;
  align-items:center;
`;
const ChildYear = styled.View`
  width: 108px;
  height: 34px;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 4px;
  display:flex;
  align-items:flex-end;
  justify-content:center;
`;
const YearDrop = styled.View`
  width:108px;
  height:280px;
  /* background-color:#BCB; */
  display:${props=>props.expandY ? "none" : "inline-flex"};
  flex-direction:column;
  overflow-y:scroll;
  background: #FFFFFF;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
`;
const YearOption = styled.View`
  width:108px;
  height:30px;
  background: #FFFFFF;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  display:flex;
  justify-content:center;
`;
const ImgCont = styled.View`
  width:12px;
  height:12px;
  margin-right:8px;
  margin-top:6px;
`;
const Birthday = ({}) => {
  const [expandM, setExpandM] = useState(true)
  const [expandD, setExpandD] = useState(true)
  const [expandY, setExpandY] = useState(true)
  return (
    <View>
      <MainCont>
        <text>Birthday</text>
        <Cont>
        <Month>
          <ChildMonth>
            <ImgCont onClick={()=>{
              setExpandM(!expandM);
            }}>
              <img src="downarrow.png" />
            </ImgCont>
          </ChildMonth>
          <MonthDrop expandM={expandM}>
            <MonthOption><text>January</text></MonthOption>
            <MonthOption><text>February</text></MonthOption>
            <MonthOption><text>March</text></MonthOption>
            <MonthOption><text>April</text></MonthOption>
            <MonthOption><text>May</text></MonthOption>
            <MonthOption><text>June</text></MonthOption>
            <MonthOption><text>July</text></MonthOption>
            <MonthOption><text>August</text></MonthOption>
            <MonthOption><text>September</text></MonthOption>
            <MonthOption><text>October</text></MonthOption>
            <MonthOption><text>November</text></MonthOption>
            <MonthOption><text>December</text></MonthOption>
          </MonthDrop>
        </Month>
        <Day>
          <ChildDay>
            <ImgCont onClick={()=>{
              setExpandD(!expandD);
            }}>
              <img src="downarrow.png" />
            </ImgCont>
          </ChildDay>
          <DayDrop expandD={expandD}>
            <DayOption><text>1</text></DayOption>
            <DayOption><text>2</text></DayOption>
            <DayOption><text>3</text></DayOption>
            <DayOption><text>4</text></DayOption>
            <DayOption><text>5</text></DayOption>
            <DayOption><text>6</text></DayOption>
            <DayOption><text>7</text></DayOption>
            <DayOption><text>8</text></DayOption>
            <DayOption><text>9</text></DayOption>
            <DayOption><text>10</text></DayOption>
            <DayOption><text>11</text></DayOption>
            <DayOption><text>12</text></DayOption>
            <DayOption><text>13</text></DayOption>
            <DayOption><text>14</text></DayOption>
            <DayOption><text>15</text></DayOption>
            <DayOption><text>16</text></DayOption>
            <DayOption><text>17</text></DayOption>
            <DayOption><text>18</text></DayOption>
            <DayOption><text>19</text></DayOption>
            <DayOption><text>20</text></DayOption>
            <DayOption><text>21</text></DayOption>
            <DayOption><text>22</text></DayOption>
            <DayOption><text>23</text></DayOption>
            <DayOption><text>24</text></DayOption>
            <DayOption><text>25</text></DayOption>
            <DayOption><text>26</text></DayOption>
            <DayOption><text>27</text></DayOption>
            <DayOption><text>28</text></DayOption>
            <DayOption><text>29</text></DayOption>
            <DayOption><text>30</text></DayOption>
            <DayOption><text>31</text></DayOption>
          </DayDrop>
        </Day>
        <Year>
          <ChildYear>
            <ImgCont onClick={()=>{
              setExpandY(!expandY);
            }}>
            <img src="downarrow.png" />
            </ImgCont>
          </ChildYear>
          <YearDrop expandY={expandY}>
            <YearOption><text>2002</text></YearOption>
            <YearOption><text>2001</text></YearOption>
            <YearOption><text>2000</text></YearOption>
            <YearOption><text>1999</text></YearOption>
            <YearOption><text>1998</text></YearOption>
            <YearOption><text>1997</text></YearOption>
            <YearOption><text>1996</text></YearOption>
            <YearOption><text>1995</text></YearOption>
            <YearOption><text>1994</text></YearOption>
            <YearOption><text>1993</text></YearOption>
            <YearOption><text>1992</text></YearOption>
            <YearOption><text>1991</text></YearOption>
            <YearOption><text>1990</text></YearOption>
            <YearOption><text>1989</text></YearOption>
            <YearOption><text>1987</text></YearOption>
            <YearOption><text>1986</text></YearOption>
            <YearOption><text>1985</text></YearOption>
            <YearOption><text>1984</text></YearOption>
            <YearOption><text>1983</text></YearOption>
            <YearOption><text>1982</text></YearOption>
            <YearOption><text>1981</text></YearOption>
            <YearOption><text>1980</text></YearOption>
            <YearOption><text>1979</text></YearOption>
            <YearOption><text>1978</text></YearOption>
            <YearOption><text>1977</text></YearOption>
            <YearOption><text>1976</text></YearOption>
            <YearOption><text>1975</text></YearOption>
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
