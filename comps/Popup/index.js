import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const PopupCont = styled.View`
  width: 324px;
  height: 254px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  // border:1px solid grey;
  border-radius: 8px;
  mix-blend-mode: normal;
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.25));
`;

const Exit = styled.View`
  display: flex;
  width: 100%;
  height: 15%;
  /* background-color: #dad; */
  align-items: flex-end;
  justify-content: center;
`;

const ImgBox = styled.View`
  width: 17px;
  height: 17px;
  /* background-color: blue; */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextDisplay = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35%;
  /* background-color: #bed; */
`;

const Inputs = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
  // background-color:#ABC;
`;

const InputsCont = styled.View`
  width: 85%;
  height: 45px;
  /* background-color:red; */
  display: flex;
  flex-direction: row;
`;

const TextInput = styled.View`
  flex: 5;
  height: 45px;
  /* background-color:#BED; */
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    width: 97%;
    height: 92%;
    border-radius: 10px;
    border: none;
  }
`;

const ImgInput = styled.View`
  flex: 1;
  height: 44px;
  View {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Popup = ({}) => {
  return (
    <View>
      <PopupCont>
        <Exit>
          <ImgBox>
            <img src="close.png" />
          </ImgBox>
        </Exit>
        <TextDisplay>Send a Message</TextDisplay>
        <Inputs>
          <InputsCont>
            <TextInput>
              <input placeholder="Type a Message..." />
            </TextInput>
            <ImgInput>
              <div>
                <img src="nextarrow.png" />
              </div>
            </ImgInput>
          </InputsCont>
        </Inputs>
      </PopupCont>
    </View>
  );
};

Popup.defaultProps = {};

export default Popup;
