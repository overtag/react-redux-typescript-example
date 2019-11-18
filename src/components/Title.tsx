import * as React from 'react';
import styled from 'styled-components';
import { H2 } from './ui/text-default-styled';
import * as image from '../../public/img/image.png';

const H2Styled = styled(H2)`
  margin-top: 33px;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ImgWrap = styled.div`
  margin: 20px auto 0;
  width: 150px;
  height: 150px;
`;

export const Title = () => (
  <>
    <H2Styled>Daft Punk</H2Styled>
    <ImgWrap>
      <Img src={image} alt='Logo' />
    </ImgWrap>
  </>
);
