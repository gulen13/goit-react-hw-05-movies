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
  border-radius: 15px;
  background-color: #526799;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
`;
