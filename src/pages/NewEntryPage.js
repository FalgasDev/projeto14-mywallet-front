import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function NewEntryPage() {
	const [value, setValue] = useState('');
	const [description, setDescription] = useState('');
	const navigate = useNavigate();

  function createEntry(e) {
    e.preventDefault()
    alert('ok')
    navigate('/home')
  }

	return (
		<Container>
			<h1>Nova entrada</h1>
			<form onSubmit={(e) => createEntry(e)}>
				<InputEntry
					placeholder="Valor"
					type="text"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					required
				/>
				<InputEntry
					placeholder="Descrição"
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					required
				/>
				<SendButton type='submit'>Salvar entrada</SendButton>
			</form>
		</Container>
	);
}

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		color: #ffffff;
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
`;

const InputEntry = styled.input`
	width: 326px;
	height: 58px;
	background-color: #ffffff;
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
`;

const SendButton = styled.button`
	width: 326px;
	height: 46px;
	background-color: #a328d6;
	color: #ffffff;
	border: none;
	border-radius: 5px;
	font-family: 'Raleway', sans-serif;
	font-size: 20px;
	font-weight: 700;
`;
