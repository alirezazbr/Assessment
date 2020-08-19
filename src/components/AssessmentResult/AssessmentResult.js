import React from 'react';

// import components
import { ResultTitle, ResultContributor } from './components/Header';
import { YourLevel } from './components/YourLevel';
import TechnicalEvaluation from './components/TechnicalEvaluation';

const AssessmentResult = () => {

    return (
        <div>
            <ResultTitle />
            <ResultContributor />
            <YourLevel />
            <TechnicalEvaluation />
        </div>
    );

};

export default AssessmentResult;
