import React, { useState, useEffect } from 'react';

// import components
import { ResultTitle, ResultContributor } from './components/Header';
import { YourLevel } from './components/YourLevel';

const AssessmentResult = () => {

    return (
        <div>
            <ResultTitle />
            <ResultContributor />
            <YourLevel />
        </div>
    );

};

export default AssessmentResult;
