import React, { useState } from 'react';
import styled from 'styled-components';

const Buttontext = styled.div`
color:#FFF;
align-items:center;
justify-content:center;
display:flex;
`;

const Buttoncontainer = styled.div`
background:${props => props.pressed ? "#565555" : "#C4C4C4"};
width:137px; 
border-radius:7px;
padding:12px
`;

const Startext = styled.div`
padding-left:5px;
`;


const Star5 = styled.div`
`;

const Star4 = styled.div`
`;

const Star3 = styled.div`
`;

const Star2 = styled.div`
`;

const Star1 = styled.div`
`;

const Starscontainer = styled.div`
width:124px;
justify-content:space-between;
display:flex;
flex-direction:row;
`;

const Main = styled.div`
flex-direction:row;
display:flex;
align-items:center;
width:320px;
justify-content:space-between;
`;

const Reviewcontainer = styled.div`
flex-direction:column;
display:flex;

`;

const Reviewtext = styled.div`
margin-bottom:10px;
`;

const WriteReview = () => {
    const [pressed, setPressed] = useState(true);

    return <div>
        <Main>
            <Reviewcontainer>
                <Reviewtext>Reviews</Reviewtext>
                <Starscontainer>
                    <Star1><img src="unfilled.png"></img></Star1>
                    <Star2><img src="unfilled.png"></img></Star2>
                    <Star3><img src="unfilled.png"></img></Star3>
                    <Star4><img src="unfilled.png"></img></Star4>
                    <Star5><img src="unfilled.png"></img></Star5>
                    <Startext>(30)</Startext>
                </Starscontainer>
            </Reviewcontainer>

            <Buttoncontainer onClick={() => {
                setPressed(!pressed);
            }} pressed={pressed}>

                <Buttontext>
                    Write a Review
            </Buttontext>
            </Buttoncontainer>
        </Main>
    </div>
}


export default WriteReview;