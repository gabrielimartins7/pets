import React from 'react'
import { Link } from 'react-router-dom';
import { Title, Container, Content, Background, AnimationContainer } from './styles';

import Button from '../../Components/Button';
import Input from '../../Components/Input'

export default function Login() {
  const [useName, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(useName);
    console.log(password);
  }

  return (
    <Container>
    <Content>
      <AnimationContainer>
      <Title>Login</Title>
        <form action="" onSubmit={handleSubmit}>
          <Input type="text" label="Usuário" value={useName} onChange={({target}) => setUsername(target.value)} />
          <Input type="password" label="Senha" value={password} onChange={({target}) => setPassword(target.value)} />
          <Button title={"Entrar"}/>
        </form>
        <Link to="/cadastro">Cadastre-se</Link>
    </AnimationContainer>
    </Content>
    <Background/>
    </Container>
  )
}
