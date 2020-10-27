import React from 'react';
import styled from 'styled-components';

const Bgcolor = styled.div`
position: relative;
width: 375px;
height: 812px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(151, 215, 218, 0.46) 100%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF;
`;

const Background = () => {
    return <div>
        <Bgcolor></Bgcolor>
    </div>
}


export default Background;