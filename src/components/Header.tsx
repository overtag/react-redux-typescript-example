import * as React from 'react';
import styled from 'styled-components';
import * as logo from '../../public/img/logo.png';
import { H1, H2 } from './ui/text-default-styled';

const Wrap = styled.header`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const Block = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  margin-right: 637px;
`;

const Block2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 22px;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ImgWrap = styled.div`
  width: 54px;
  height: 35px;
`;

export const Header = () => (
  <Wrap>
    <Block>
      <ImgWrap>
        <LogoImg src={logo} alt='Logo' />
      </ImgWrap>
      <H2>Daft Punk</H2>
    </Block>
    <Block2>
      <H1>Harder, Better, Faster, Stronger </H1>
      <H1>Daft Punk</H1>
    </Block2>
  </Wrap>
);
