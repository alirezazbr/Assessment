import React from 'react';
import styled from 'styled-components';


// styled components
const ResultContainer = styled.div`
    width: 100%;
    height: auto;
`;

const ResultContent = styled.div`
    width: 100%;
    height: 80px;
    text-align: center;
    padding: 35px 0 0 0;
`;

const TitleTextOne = styled.p`
    font-size: 20px;
    font-weight: bold;
    font-family: Arial;
    text-align: center;
    color: blue;
    margin: 0;
`;

const TitleTextTwo = styled.p`
    font-size: 15px;
    font-weight: bold;
    font-family: Arial;
    text-align: center;
    color: blue;
    margin: 10px 0;
`;


const ResultTilte = () => {

    return (
        <ResultContainer>
            <ResultContent>
                <TitleTextOne>گزارش مصاحبه</TitleTextOne>
                <TitleTextTwo>Interview Report</TitleTextTwo>
            </ResultContent>
        </ResultContainer>
    );

};

export default ResultTilte;
