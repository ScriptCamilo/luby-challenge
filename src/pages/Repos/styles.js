import styled from 'styled-components';

export const MainPage = styled.main`
  display: flex;
  flex-direction: column;
  color: white;

  padding-bottom: 20%;
`;

export const Title = styled.h2`
  padding: 0 1rem;
  margin: 0.2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
`;

export const Description = styled(Title).attrs(() => ({
  as: 'p',
}))`
  display: flex;
  align-items: center;
  
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1.4rem;
`;

export const Stars = styled(Description)``;
export const Locks = styled(Description)``;

export const AditionalInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Line = styled.hr`
  border-top: 1px solid #7070705A;
  border-bottom: none;
`;
