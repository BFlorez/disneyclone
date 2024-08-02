import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Header from "./components/header"

function App() {
  return (
    <div className="App">
      <Header /> {/* Header bileşenini render edin */}
      <Router>
        <Routes>
          <Route path="/" element={ <Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
