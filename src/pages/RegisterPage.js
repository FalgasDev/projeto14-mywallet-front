import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function RegisterPage() {
  const navigate = useNavigate()

  function register(e) {
    e.preventDefault()
    alert('oi')
  }

  return (
    <Container>
      <h1>MyWallet</h1>
      <form onSubmit={register}>
        <InputRegister placeholder="Nome" type="text" required/>
        <InputRegister placeholder="E-mail" type="email" required/>
        <InputRegister placeholder="Senha" type="password" required/>
        <InputRegister placeholder="Confirme a senha" type="password" required/>
        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </form>
      <p onClick={() => navigate('/')}>Já tem uma conta? Entre agora!</p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  h1 {
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    color: #FFFFFF;
    margin-bottom: 24px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  p {
    margin-top: 36px;
    color: #FFFFFF;
    font-size: 15px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
  }
`

const InputRegister = styled.input`
  width: 326px;
  height: 58px;
  border-radius: 5px;
  border: none;
  padding-left: 15px;
  margin-bottom: 13px;
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
  color: #000000;
  outline: none;
  &::placeholder {
    color: #000000;
  }
`

const SubmitButton = styled.button`
  width: 326px;
  height: 46px;
  background-color: #A328D6;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  color: #FFFFFF;
`