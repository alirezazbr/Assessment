import React from 'react';
import styled from 'styled-components';

import AssessmentQuestions from './components/AssessmentQuestions';
import AssessmentResult from './components/AssessmentResult';

const Container = styled.div`
  width: 80%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const App = () => {
  return (
    <Container>
      <AssessmentResult />
    </Container>
  );
};

export default App;
