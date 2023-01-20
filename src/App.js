import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NewEntryPage from './pages/NewEntryPage';
import NewExitPage from './pages/NewExitPage';
import RegisterPage from './pages/RegisterPage';

function App() {
	const [token, setToken] = useState('');
	const [name, setName] = useState('')

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage setToken={setToken} setName={setName}/>} />
				<Route path="/cadastro" element={<RegisterPage />} />
				<Route path="/home" element={<HomePage token={token} name={name}/>} />
				<Route path="/nova-entrada" element={<NewEntryPage token={token}/>} />
				<Route path="/nova-saida" element={<NewExitPage token={token}/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
