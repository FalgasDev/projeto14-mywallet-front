import styled from "styled-components"

export default function NewEntryPage() {
  return (
    <Container>
      <h1>Nova entrada</h1>
      <form>
        <InputEntry placeholder="Valor"/>
        <InputEntry placeholder="Descrição"/>
        <SendButton>Salvar entrada</SendButton>
      </form>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #FFFFFF;
    font-family: 'Raleway', sans-serif;
    font-size: 26px;
    font-weight: 700;
    width: 326px;
    margin-top: 25px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }
`

const InputEntry = styled.input`
  width: 326px;
  height: 58px;
  background-color: #FFFFFF;
  border: none;
  border-radius: 5px;
  margin-bottom: 13px;
  padding-left: 15px;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  color: #000000;
  outline: none;
  &::placeholder {
    color: #000000;
  }
`

const SendButton = styled.button`
  width: 326px;
  height: 46px;
  background-color: #A328D6;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: 700;
`