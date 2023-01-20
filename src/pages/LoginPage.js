import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function LoginPage({ setToken, setName }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	async function login(e) {
		e.preventDefault();

		const URL = 'http://localhost:5000/sign-in';
		const body = { email, password };

		try {
			const data = await axios.post(URL, body);
			setToken(data.data.token);
			setName(data.data.name)
			navigate('/home');
		} catch (error) {
			alert(error.response.data);
		}
	}

	return (
		<Container>
			<h1>MyWallet</h1>
			<form onSubmit={login}>
				<InputLogin
					placeholder="E-mail"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<InputLogin
					placeholder="Senha"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<SubmitButton type="submit">Entrar</SubmitButton>
			</form>
			<p onClick={() => navigate('/cadastro')}>Primeira vez? Cadastre-se!</p>
		</Container>
	);
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
		color: #ffffff;
		margin-bottom: 24px;
	}
	form {
		display: flex;
		flex-direction: column;
	}
	p {
		margin-top: 36px;
		color: #ffffff;
		font-size: 15px;
		font-family: 'Raleway', sans-serif;
		font-weight: 700;
		cursor: pointer;
	}
`;

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
`;

const SubmitButton = styled.button`
	width: 326px;
	height: 46px;
	background-color: #a328d6;
	border: none;
	border-radius: 5px;
	font-size: 20px;
	font-family: 'Raleway', sans-serif;
	font-weight: 700;
	color: #ffffff;
	cursor: pointer;
`;
