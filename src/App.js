import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import NewEntryPage from "./pages/NewEntryPage"
import NewExitPage from "./pages/NewExitPage"
import RegisterPage from "./pages/RegisterPage"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/nova-entrada" element={<NewEntryPage />}/>
        <Route path="/nova-saida" element={<NewExitPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App