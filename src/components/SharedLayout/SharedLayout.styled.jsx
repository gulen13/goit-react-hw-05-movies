import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: x-large;
  margin: 10px;
  text-decoration: none;
  background-color: #aeb9e6;
  padding: 8px 8px;
  border-radius: 6px;

  &.active {
    color: #cf2a2a;
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  padding: 35px;
`;

export const Header = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;
