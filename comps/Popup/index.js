import React from "react";
import styled from "styled-components/native";
import { View, Text, Image, StyleSheet} from "react-native";




// const Exit = styled.View`
//   display: flex;
//   width: 100%;
//   height: 15%;
//   /* background-color: #dad; */
//   align-items: flex-end;
//   justify-content: center;
// `;

// const ImgBox = styled.View`
//   width: 17px;
//   height: 16px;
//   margin-right:10px;
//   /* background-color: blue; */
// `;


// const Inputs = styled.View`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   height: 50%;
//   width: 100%;
//   /* background-color:#ABC; */
// `;

// const InputsCont = styled.View`
//   width: 85%;
//   height: 45px;
//   /* background-color:red; */
//   display: flex;
//   flex-direction: row;
// `;

// const TextInput = styled.View`
//   flex: 5;
//   height: 45px;
//   /* background-color:#BED; */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border:1px solid lightgrey;
//   border-radius:12px;
// `;

// const ImgInput = styled.View`
//   flex: 1;
//   height: 44px;
// `;
// const Close = styled.Image`
// width:100%;
// height:100%;
// `;

// const InputT = styled.TextInput`
//   width:100%;
//   height:100%;
// `;

const styles = StyleSheet.create({
  
          exit:{
          },       
          imgBox:{
          },       
          inputsCont:{
          },       
          imgBox:{
          },  
          textInput:{
            
          },
          popupCont: {
    // display: flex,
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:8,
    // border:1,
    borderColor:"grey"
  },
  textDisplay: {
    // display: flex,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#BED"
  },
});

const Popup = ({}) => {
  return (
    <View>
      {/* <PopupCont 
      style={styles.popupCont}
      width={324}
      height={254}>
        <Exit style={styles.exit}>
          <ImgBox style={styles.imgBox}>
          <Close source={require=("./close.png")} />
          </ImgBox>
        </Exit>
        <TextDisplay 
        style={styles.textDisplay}
        width={100}
         height={35}
        >Send a Message</TextDisplay>
        <Inputs>
          <InputsCont style={styles.inputsCont}>
            <TextInput style={styles.textInput}>
              <InputT placeholder="Type a Message..." />
            </TextInput>
            <ImgInput>
                <Close source={require=("./nextarrow.png")} />
            </ImgInput>
          </InputsCont>
        </Inputs>
      </PopupCont> */}
    </View>
  );
};

Popup.defaultProps = {};

export default Popup;
