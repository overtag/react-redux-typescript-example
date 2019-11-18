import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #d7dce1;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.12);
  color: #ffffff;
  cursor: pointer;
  font-family: Roboto-Light;
  font-size: 13px;
  font-weight: 500;
  padding: 9px 22px 9px 47px;
  position: relative;
`;

const IconPlusSpan = styled.span`
  background: no-repeat center;
  background-image: url("data:image/svg+xml,%3Csvg width='22px' height='22px' viewBox='0 0 22 22' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: sketchtool 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3E8C05DF6B-EA8C-49DD-8423-64199B392B37%3C/title%3E%3Cdesc%3ECreated with sketchtool.%3C/desc%3E%3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Icons-/-+' fill='%23FFFFFF'%3E%3Cg id='Group-2' transform='translate(5.000000, 5.000000)'%3E%3Crect id='Rectangle-8' x='0' y='5' width='12' height='2'%3E%3C/rect%3E%3Crect id='Rectangle-8-Copy' transform='translate(6.000000, 6.000000) rotate(-270.000000) translate(-6.000000, -6.000000) ' x='0' y='5' width='12' height='2'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  width: 30px;
  height: 30px;
  display: inline-block;
  position: absolute;
  left: 10px;
  top: 50%;
  margin-top: -15px;
`;

interface ButtonProps {
  className?: string;
  children?: React.ReactChild;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const ButtonPlus = React.memo(({ className, children, onClick, disabled }: ButtonProps) => (
  <Button type='button' className={className} disabled={disabled} onClick={onClick}>
    <IconPlusSpan />
    {children}
  </Button>
));

export default ButtonPlus;
