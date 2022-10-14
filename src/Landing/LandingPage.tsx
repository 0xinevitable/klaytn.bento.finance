import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import { MetaHead } from '@/components/MetaHead';
import { Colors } from '@/styles/colors';

import { HeaderSection } from './sections/HeaderSection';

const LandingPage: NextPage = () => {
  return (
    <>
      <MetaHead />
      <Container>
        <NavigationWrapper />
        <HeaderSection />

        <FixedMessage href="https://bento.finance/en" target="_blank">
          <div className="container">
            <span className="title">Start with Bento</span>
            <span className="url">bento.finance</span>
          </div>
        </FixedMessage>
      </Container>
    </>
  );
};

export default LandingPage;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1332px;
  width: 100%;

  padding-bottom: 140px;

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

const FixedMessage = styled.a`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: #d9f15c;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease-in-out;

  &:hover {
    background: #f7f783;
  }

  & > .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1332px;

    & > .title {
      font-weight: 800;
      font-size: 24px;
      line-height: 120%;
      letter-spacing: -0.03em;
      color: ${Colors.gray900};
    }

    & > .url {
      font-weight: 800;
      font-size: 24px;
      line-height: 120%;
      letter-spacing: -0.03em;
      color: #829c1b;
    }
  }
`;
