import React from 'react';
import styled from 'styled-components';

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

    const ReviewStars = () => {
        return <div>
            <Starscontainer>
                <Star1><img src="unfilled.png"></img></Star1>
                <Star2><img src="unfilled.png"></img></Star2>
                <Star3><img src="unfilled.png"></img></Star3>
                <Star4><img src="unfilled.png"></img></Star4>
                <Star5><img src="unfilled.png"></img></Star5>
                <Startext>(30)</Startext>
            </Starscontainer>
        </div>
    }


export default ReviewStars;