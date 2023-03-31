import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;
`;

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 34px;
  font-size: 20px;
  font-style: italic;
  color: rgb(39, 34, 124);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  font-size: 18px;
  align-items: center;
  border-bottom: 2px solid rgb(39, 34, 124);
  padding: 8px;
  justify-content: space-between;
`;

export const WrapContent = styled.div`
  margin-right: 70px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const BtnDelete = styled.button`
  border: none;
  background-color: transparent;
`;

export const Span = styled.span`
  color: rgb(39, 34, 124);
`;
