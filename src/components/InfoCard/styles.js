import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  margin: 1rem 0;

  div {
    border-right: 10px solid #FFCE00;
    border-radius: 0 10px 10px 0;
    height: 3rem;
  }
`;

export const Title = styled.h2`
  padding: 0 1rem;
  margin: 0.2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 2rem;
`;

export const Description = styled(Title)`
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1.4rem;
`;