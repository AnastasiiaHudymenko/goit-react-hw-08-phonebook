import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 5px;
  > nav {
    display: flex;
  }
`;

export const Header = styled.header`
  box-shadow: 0px 5px 10px 2px rgba(19, 42, 131, 0.2);
  margin-bottom: 5px;
`;
