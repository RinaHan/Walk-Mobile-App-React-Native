import React from 'react';
import styled from 'styled-components';

const Titletext = styled.text `
color:#97D7DA;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;

    const Title = () => {
        return <div>
            <Titletext><h1>WALK</h1></Titletext>
        </div>
    }


export default Title;