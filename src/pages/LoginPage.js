import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function LoginPage() {
  const navigate = useNavigate()

  function login(e) {
    e.preventDefault()
    alert('oi')
  }
  
  return (
    <Container>
      <h1>MyWallet</h1>
      <form onSubmit={login}>
        <InputLogin placeholder="E-mail" type="email" required/>
        <InputLogin placeholder="Senha" type="password" required/>
        <SubmitButton type="submit">Entrar</SubmitButton>
      </form>
      <p onClick={() => navigate('/cadastro')}>Primeira vez? Cadastre-se!</p>
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

const InputLogin = styled.input`
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