import React from 'react';

// node modules
import styled from 'styled-components';

// local components
import { ColumnContainer } from './styleguide/Containers';
import { SectionHeader } from './styleguide/Headers';

const Home = () => (
  <HomeContainer alignItems="flex-start" justifyContent="flex-start">
    <SectionHeader>Welcome.</SectionHeader>
    <Text>
      This is the Content Management Dashboard for Berkeley Pi Sigma Epsilon's website, located at{' '}
      <ExtLink href="http://berkeleypse.org" target="_blank" rel="noopener noreferrer">
        http://berkeleypse.org
      </ExtLink>.
      <br /> <br />
      Use this dashboard to make changes to "static" fields on the website -- Brothers, Careers,
      FAQs, Applications, and Registration forms. Select an option in the sidebar on the left to
      continue.
    </Text>
  </HomeContainer>
);

export default Home;

const HomeContainer = ColumnContainer.extend`
  padding: 0 20px;
`;

const Text = styled.p`
  color: var(--main);
  font-size: 18px;
`;

const ExtLink = styled.a`
  color: var(--accent);
  text-decoration: none;
  transition: all 0.25s;

  &:hover {
    color: var(--accent-alt);
  }
`;
