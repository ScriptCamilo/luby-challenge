import styled from 'styled-components';

export const Title = styled.h2`
  padding: 0 1rem;
  margin: 0.2rem;
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