import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 0.5rem;
  
  font-family: 'Roboto', sans-serif;

  background-color: #5252525D;
`;

export const Followers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 33.3%;

  h2 {
    font-weight: 700;
    font-size: 2.5rem;
  }

  span {
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 1.4rem;
  }
`;

export const Following = styled(Followers)``;

export const Repos = styled(Followers)``;