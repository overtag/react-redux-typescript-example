import * as React from 'react';
import styled from 'styled-components';
import { H2, P } from './ui/text-default-styled';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  margin-right: 20px;
`;

const Block = styled.div`
  border-radius: 3px;
  border: solid 1px #dfdfdf;
  background-color: #ffffff;
  width: 245px;
  padding: 20px 0;
  margin: 0;

  :nth-child(1) {
    margin-top: 0;
  }
`;

export const InfoBlock = () => (
  <Column>
    <Block>
      <H2>Harder</H2>
      <P>Work it harder Make it better Do it faster Makes us stronger</P>
    </Block>
    <Block>
      <H2>Better</H2>
      <P>More than ever Hour after Our work is Never over</P>
    </Block>
    <Block>
      <H2>Faster</H2>
      <P>Work it harder Make it better Do it faster Makes us stronger</P>
    </Block>
    <Block>
      <H2>Stronger</H2>
      <P>More than ever Hour after Our work is Never over</P>
    </Block>
  </Column>
);
