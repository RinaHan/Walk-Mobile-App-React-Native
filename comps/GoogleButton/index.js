import React, { useState} from 'react';
import styled from 'styled-components';

const Googlelogo = styled.div`
margin-left:10px;
margin-top:3px;
`;

const ButtonBox = styled.div`
    display:flex;
    background:${props => props.pressed ? "#FFF" : "#F1F1F1"};
    width:288px;
    padding:6px;
    border: 0.5px solid #959494;
    box-sizing: border-box;
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);

    
`;

const Buttontext = styled.text`
    align-items:center;
    justify-content:center;
    display:flex;
    color:#000;
    width:300px;
    margin-right:25px;
    
 
`;



const GoogleButton = () => {
    const [pressed, setPressed] = useState(true);

    return <div>
        <ButtonBox onClick={() => {
            setPressed(!pressed);
        }} pressed={pressed}>
            

            <Googlelogo><img src="google.png"></img></Googlelogo>
            <Buttontext>Sign in With Google</Buttontext>
        </ButtonBox>

    </div>
}


export default GoogleButton;