import styled from 'styled-components';
import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Registers from '../components/Registers';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function HomePage() {
	const navigate = useNavigate();
	const [registers, setRegisters] = useState([]);
	let balance = 0;
	const token = localStorage.getItem('Token')
	const name = localStorage.getItem('Name')

	useEffect(() => {
		async function data() {
			const URL = `${process.env.REACT_APP_API_URL}/wallet`;
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};

			try {
				const data = await axios.get(URL, config);
				setRegisters(data.data);
			} catch (error) {
				alert(error.response.data);
			}
		};
		data()
	}, []);

	function logout() {
		localStorage.clear()
		navigate('/')
	}

	return (
		<Container>
			<Header>
				<h1>Olá, {name}</h1>
				<HiOutlineArrowRightOnRectangle onClick={logout} />
			</Header>
			<RegistersContainer registers={registers}>
				{registers.map((item) => {
					item.type === 'exit'
						? (balance -= Number(item.value))
						: (balance += Number(item.value));
					return (
						<Registers
							key={item._id}
							description={item.description}
							value={Number(item.value)}
							date={item.date}
							type={item.type}
						/>
					);
				})}
				<TotalBalance registers={registers} balance={balance}>
					<h3>SALDO</h3>
					<p>{balance.toFixed(2)}</p>
				</TotalBalance>
				<h2>Não há registros de entrada ou saída</h2>
			</RegistersContainer>
			<ButtonsContainer>
				<ButtonStyled onClick={() => navigate('/nova-entrada')}>
					<IoIosAddCircleOutline />
					<p>Nova entrada</p>
				</ButtonStyled>
				<ButtonStyled onClick={() => navigate('/nova-saida')}>
					<IoIosRemoveCircleOutline />
					<p>Nova saída</p>
				</ButtonStyled>
			</ButtonsContainer>
		</Container>
	);
}

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Header = styled.div`
	width: 326px;
	height: 12px;
	color: #ffffff;
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
`;

const RegistersContainer = styled.div`
	font-family: 'Raleway', sans-serif;
	margin-top: 32px;
	width: 326px;
	height: 446px;
	background-color: #ffffff;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: ${(props) => (props.registers.length === 0 ? 'center' : '')};
	align-items: center;
	padding-top: 23px;
	padding-left: 12px;
	padding-right: 11px;
	position: relative;
	h2 {
		color: #868686;
		width: 180px;
		text-align: center;
		line-height: 23px;
		display: ${(props) => (props.registers.length === 0 ? '' : 'none')};
	}
`;

const ButtonsContainer = styled.div`
	width: 326px;
	margin-top: 13px;
	display: flex;
	justify-content: space-between;
`;

const ButtonStyled = styled.button`
	width: 155px;
	height: 114px;
	background-color: #a328d6;
	border-radius: 5px;
	border: none;
	color: #ffffff;
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
`;

const TotalBalance = styled.div`
	width: 92%;
	height: 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	bottom: 5px;
	font-size: 17px;
	display: ${props => props.registers.length === 0 ? 'none' : ''};
	h3 {
		font-weight: 700;
	}
	p {
		color: ${props => props.balance <= 0 ? '#C70000' : '#03ac00'};
	}
`;
