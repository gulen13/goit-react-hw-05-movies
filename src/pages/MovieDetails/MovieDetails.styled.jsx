import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkStl = styled(Link)`
  color: black;
  font-size: large;
  margin: 10px;
  text-decoration: none;
  border: 1px solid black;
  padding: 4px 4px;
  border-radius: 6px;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 0;
  margin-bottom: 16px;
`;

export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const P = styled.p`
  font-size: large;
  font-weight: 700;
`;
