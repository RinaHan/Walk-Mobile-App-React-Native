import React from 'react';
import styled, {css} from 'styled-components';

const InputCont = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:268px;
    height:48px; 
    background-color:red;    
`;

const InputTitle = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const InputBox = styled.div`
    display:flex;
    flex:3;
        form {
            width:100%;
            height:${props => props.height ? props.height : 22}px;
            border: none;
            rows: 10;
            columns:20;
        }
`;
const Spacer = styled.div`
        flex:1;
`;

const Input= ({text, placeholder, height}) => {
    return <InputCont>
        <InputTitle><p>{text}</p></InputTitle>
        <Spacer />
        <InputBox  height={height}><form placeholder={placeholder}></form></InputBox>
    </InputCont>
}

Input.defaultProps= {
    text:"default",
    placeholder:"default",
    width:"22px",
}

export default Input;