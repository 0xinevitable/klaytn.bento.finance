import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import { HeaderSection } from './sections/HeaderSection';

const LandingPage: NextPage = () => {
  return (
    <Container>
      <NavigationWrapper />
      <HeaderSection />
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1332px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const NavigationWrapper = styled.nav`
  margin-top: 42px;
  margin-bottom: 28px;
  width: 100%;
  height: 72px;
`;
