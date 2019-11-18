import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
  text-decoration: none;
  border-radius: 3px;
  background-color: #11a0f8;
  font-family: Roboto-Regular;
  font-size: 11px;
  padding: 10px 0 9px 0;
  color: #ffffff;
  border: none;
  cursor: pointer;
  content: '';
  display: inline-block;
  width: 226px;
  text-align: center;
  margin: 14px auto 10px;
`;
