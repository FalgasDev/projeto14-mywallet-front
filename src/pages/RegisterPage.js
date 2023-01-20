import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

export default function RegisterPage() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');
	const navigate = useNavigate();

	async function register(e) {
		e.preventDefault();
		if (password !== confirm) {
			return alert('As senhas não conferem');
		}

		const URL = `http://localhost:5000/sign-up`;
		const body = { name, email, password };

		try {
			await axios.post(URL, body);
			navigate('/');
		} catch (error) {
			alert(error.response.data);
			console.log(error);
		}
	}

	return (
		<Container>
			<h1>MyWallet</h1>
			<form onSubmit={register}>
				<InputRegister
					placeholder="Nome"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<InputRegister
					placeholder="E-mail"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<InputRegister
					placeholder="Senha"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<InputRegister
					placeholder="Confirme a senha"
					type="password"
					value={confirm}
					onChange={(e) => setConfirm(e.target.value)}
					required
				/>
				<SubmitButton type="submit">Cadastrar</SubmitButton>
			</form>
			<p onClick={() => navigate('/')}>Já tem uma conta? Entre agora!</p>
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
