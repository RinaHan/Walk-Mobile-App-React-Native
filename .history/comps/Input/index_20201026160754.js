import React from 'react';
import styled, {css} from 'styled-components';

const InputCont = styled.div`
    display:flex;
    flex-direction:row;
    width:268px;
    height:28px;
`;

const InputTitle = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const InputBox = styled.div`
    flex:3;
        input {
            width:194px;
            height:22px;
        }
`;

const Input= ({text, placeholder}) => {
    return <InputCont>
        <InputTitle><p>{text}</p></InputTitle>
        <InputBox><input placeholder={placeholder}/></InputBox>
    </InputCont>
}

Input.defaultProps= {
    text:"default",
    placeholder:"default"
}

export default Input;