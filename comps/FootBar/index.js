import React from 'react';
import styled from 'styled-components';

const Usericon = styled.div`

`;


const Chaticon = styled.div`

`;

const Addicon = styled.div`

`;

const Eventicon = styled.div`


`;

const Homeicon = styled.div`


`;

const Icons = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
flex-direction:row;
padding-left:5px;
padding-right:5px;

`;

const Footcontainer = styled.div`
background: #FFF;
padding:15px;
width:375px;
`;

    const FootBar = () => {
        return <div>
            <Footcontainer>
                <Icons>
                    <Homeicon><img src="home.png"></img></Homeicon>
                    <Eventicon><img src="event.png"></img></Eventicon>
                    <Addicon><img src="new.png"></img></Addicon>
                    <Chaticon><img src="chat.png"></img></Chaticon>
                    <Usericon><img src="user.png"></img></Usericon>
                </Icons>
            </Footcontainer>
        </div>
    }


export default FootBar;