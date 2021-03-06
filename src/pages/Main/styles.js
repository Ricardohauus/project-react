import styled from 'styled-components/native';

export const Title = styled.h1`
  font-size: 24px;
  color: ${(props) => (props.error ? 'red' : '#7159c1')};
  font-family: Arial, Helvetica, sans-serif;

  small {
    font-size: 14px;
    color: #333;
  }
`;
