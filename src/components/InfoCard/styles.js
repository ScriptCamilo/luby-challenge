import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: ${({alignItems}) => alignItems || ''};

  margin: 3rem 1rem;

  & > div {
    position: absolute;
    left: 0;

    border-right: 10px solid #FFCE00;
    border-radius: 0 10px 10px 0;
    height: 3rem;
  }

  section {
    width: 100%;
  }
`;