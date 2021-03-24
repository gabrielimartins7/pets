import styled from 'styled-components';

export const Container =styled.div`

  padding:5px;

`

export const Input = styled.input`
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: #eee;

  max-width: 300px;
  margin: 2px;

  &:focus, &:hover{ 
    outline: none;
    border-color: #fb1;
    background: white;
    box-shadow: 0 0 0 3px #fea;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 3px;
`;