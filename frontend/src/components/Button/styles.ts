import styled from 'styled-components';

interface ContainerProps {
  backgroundColor: string;
}

export const Container = styled.button<ContainerProps>`
  background: ${(props) => props.backgroundColor};
  height: 36px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  margin-top: 6px;
  transition: opacity 0.2s;

  &:hover {
    opacity: .75;
    transition: opacity 0.2s;
  }
`;
