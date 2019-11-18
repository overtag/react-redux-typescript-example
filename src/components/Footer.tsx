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

export const Footer = () => {
  return (
    <Block>
      <Text3>© DAFTPUNK </Text3>
      <Link href='mailto:help@instagramban.com'>help@daftpunk.com</Link>
      <Link style={{ color: '#999999' }} href={'#'} target='_blank'>
        Контакты
      </Link>
    </Block>
  );
};
