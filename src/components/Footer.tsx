import * as React from 'react';
import styled from 'styled-components';
import { Text3, A } from './ui/text-default-styled';

const Block = styled.footer`
  text-align: center;
  margin: auto 0 10px 0;
  padding: 10px 0 0 0;
`;

const Link = styled(A)`
  margin-left: 15px;
`;
const a = [1, 2, 3, 4, 5];

export const Footer = () => {
  return <Block></Block>;
};
