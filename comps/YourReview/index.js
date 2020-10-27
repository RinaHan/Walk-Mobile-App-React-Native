import React, { useState } from 'react';
import styled from 'styled-components';

const Reviewtext = styled.div`

`;

const Main = styled.div`
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

const YourReview = () => {
    const [img, setImg] = useState(false);

    return <div>
        <Main>
            <Reviewtext><h1>Your Review</h1></Reviewtext>
            <Starscontainer>

                <Star1 onClick={() => {
                    setImg(!img);
                }} img={img}>

                    <img src="bigfilled.png"></img></Star1>

                <Star2><img src="bigunfilled.png"></img></Star2>
                <Star3><img src="bigunfilled.png"></img></Star3>
                <Star4><img src="bigunfilled.png"></img></Star4>
                <Star5><img src="bigunfilled.png"></img></Star5>
            </Starscontainer>
        </Main>
    </div>
}

YourReview.defaultProps = {
    img: "bigunfilled.png"
};

export default YourReview;