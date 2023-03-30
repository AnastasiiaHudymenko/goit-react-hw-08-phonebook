import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: rgb(39, 34, 124);
  font-weight: 500;

  &.active {
    color: white;
    background-color: rgb(39, 34, 124);
  }
`;

export const WrapContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.img`
  width: 25px;
  height: 25px;
`;

// export const Title = styled.h1`
//   margin: 0;
//   font-size: 24px;
//   font-style: italic;
//   color: rgb(39 34 124);
// `;
