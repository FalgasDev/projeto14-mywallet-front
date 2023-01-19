import styled from "styled-components"
import {HiOutlineArrowRightOnRectangle} from "react-icons/hi2"
import {IoIosAddCircleOutline} from "react-icons/io"
import {IoIosRemoveCircleOutline} from "react-icons/io"
import { useNavigate } from "react-router-dom"

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <Container>
      <Header>
        <h1>Olá, Fulano</h1>
        <HiOutlineArrowRightOnRectangle onClick={() => navigate('/')}/>
      </Header>
      <RegistersContainer>
        <h2>Não há registros de entrada ou saída</h2>
      </RegistersContainer>
      <ButtonsContainer>
        <ButtonStyled>
          <IoIosAddCircleOutline />
          <p>Nova entrada</p>
        </ButtonStyled>
        <ButtonStyled>
          <IoIosRemoveCircleOutline />
          <p>Nova saída</p>
        </ButtonStyled>
      </ButtonsContainer>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Header = styled.div`
  width: 326px;
  height: 12px;
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  h1 {
    font-family: 'Raleway', sans-serif;
	  font-weight: 700;
    font-size: 26px;
  }
  svg {
    font-size: 24px;
  }
`

const RegistersContainer = styled.div`
  font-family: 'Raleway', sans-serif;
  margin-top: 32px;
  width: 326px;
  height: 446px;
  background-color: #FFFFFF;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: #868686;
    width: 180px;
    text-align: center;
    line-height: 23px;
  }
`

const ButtonsContainer = styled.div`
  width: 326px;
  margin-top: 13px;
  display: flex;
  justify-content: space-between;
`

const ButtonStyled = styled.button`
  width: 155px;
  height: 114px;
  background-color: #A328D6;
  border-radius: 5px;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
  padding-bottom: 9px;
  padding-top: 9px;
  p {
    font-size: 17px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    width: 64px;
    text-align: start;
  }
  svg {
    font-size: 25px;
  }
`