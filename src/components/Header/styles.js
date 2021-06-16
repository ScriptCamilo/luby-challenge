import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: ${({ back }) => back === 'true' ? 'flex-start' : 'flex-start'};

  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;

  background-color: #1F1F1F;

  height: ${({ profile }) => profile === 'true' ? '8rem' : ''};

  padding: 1.1rem;
  margin-bottom: 1rem;

  & > span {
    font-weight: 700;
    width: ${({ profile }) => profile === 'true' ? '33.3%' : '60%'};
    text-align: ${({ profile }) => profile === 'true' ? '' : 'center'};
    align-self: ${({ profile }) => profile === 'true' ? '' : 'center'};
  }

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${({back}) => back === 'true' ? 'space-between' : 'flex-end'};

    height: 10rem;
    width: 33.3%;
    span {
      font-weight: 700;
    }

    img {
      height: 7rem;
      width: 7rem;
      border-radius: 100%;
      border: 3px solid white;
    }
  }

  a {
    display: flex;
    justify-content: ${({ justifycontent }) => justifycontent || 'flex-end' };
    align-items: center;

    width: 33.3%;

    span {
      margin-right: 10px;
      font-weight: 300;
    }
  }

  a ~ a {
    justify-content: flex-end;
  }

  & > div {
    width: 33.3%;
  }
`;
