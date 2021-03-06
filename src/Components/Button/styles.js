import styled from 'styled-components';


export const Container =styled.div`

  padding:5px;

`

export const Button = styled.button`
  font-size: 1rem;
  font-family: var(--type-first);
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: var(--yellow);
  color: var(--darkYellow);
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1rem;

  &:hover,
  &:focus {
  outline: none;
  box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
}
`;