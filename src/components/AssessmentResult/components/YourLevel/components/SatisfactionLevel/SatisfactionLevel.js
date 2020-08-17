import React from 'react';
import styled from 'styled-components';
import './SatisfactionLevel.css';

const SemicircularContainer = styled.div`
    width: 350px;
    height: 175px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`;

// const SemicircularOuter = styled.div`
//     width: 350px;
//     height: 175px;
//     background-color: #FED403;
//     border-top-left-radius: 185px;
//     border-top-right-radius: 185px;
//     border: 10px solid #F0F0F0;
//     border-bottom: 0;
// `;

// const SemicircularMiddle = styled.div`
//     width: 228px;
//     height: 116px;
//     background-color: #F0F0F0;
//     border-top-left-radius: 200px;
//     border-top-right-radius: 200px;
//     border: 19px solid white;
//     border-bottom: 0;
//     position: relative;
//     left: 50%;
//     transform: translateX(-50%);
//     top: 40px;
// `;

// const SemicircularInner = styled.div`
//     width: 180px;
//     height: 93px;
//     background-color: white;
//     border-top-left-radius: 200px;
//     border-top-right-radius: 200px;
//     border-bottom: 0;
//     position: relative;
//     left: 50%;
//     top: 23px;
//     transform: translateX(-50%);
// `;


const SatisfactionLevel = () => {
    return (
        <SemicircularContainer>
            {/* <SemicircularOuter>
                <SemicircularMiddle>
                    <SemicircularInner></SemicircularInner>
                </SemicircularMiddle>
            </SemicircularOuter> */}
            <ul class="chart-skills">
                <li />
                <li />
                <li />
            </ul>
        </SemicircularContainer>
    );
};

export default SatisfactionLevel;
