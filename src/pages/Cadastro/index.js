import React from 'react';
import { Title, Container, Content, Background, AnimationContainer } from './styles';

import Button from '../../Components/Button';
import Input from '../../Components/Input'


export const Cadastro = () => {
  const [useName, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }


  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Title>Cadastre-se</Title>
          <form action="" onSubmit={handleSubmit}>
            <Input type="text" label="Usuário" value={useName} onChange={({target}) => setUsername(target.value)} />
            <Input type="text" label="Senha" value={password} onChange={({target}) => setPassword(target.value)} />
            <Button title={"Cadastrar"}/>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  )
}
