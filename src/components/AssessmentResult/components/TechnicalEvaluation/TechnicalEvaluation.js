import React from 'react';
import styled from 'styled-components';

const EvalContainer = styled.div`
    width: 100%;
    height: auto;
`;

const EvalTitle = styled.div`
    width: 100%;
    height: 50px;
    text-align: right;
`;

const EvalTitleContent = styled.p`
    font-family: Arial;
    font-weight: bold;
    font-size: 20px;
    text-align: right;
    color: blue;
    margin-right: 20px;
`;

const EvalTitleEn = styled.span`
    font-family: Arial;
    font-size: 15px;
    font-weight: 500;
    color: blue;
`;

const TechnicalEvaluation = () => {
    return (
        <EvalContainer>
            <EvalTitle>
                <EvalTitleContent>
                    <EvalTitleEn>Technical Evaluation</EvalTitleEn> ارزیابی فنی
                </EvalTitleContent>
            </EvalTitle>
        </EvalContainer>
    );
};

export default TechnicalEvaluation;