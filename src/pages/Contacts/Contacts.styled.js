import styled from 'styled-components';
import bg from '../../image/subtle-prism.png';

export const Bg = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px;
`;
