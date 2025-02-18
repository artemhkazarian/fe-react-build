import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Hello from './components/Hello';
import Hello2 from './components/Hello2';


function App() {
  return (
    <div className="App">
       <header>
        <h1>Welcome to My Simple Webpage</h1>
    </header>
        <Router>
            <nav>
        <Link id="homeBtn" to="/">Home</Link>
        <Link id="aboutBtn" to="/hello">About</Link>
        <a id="contactBtn">Contact</a>
    </nav>
    <div class="container">
        <h2 id="sectionTitle">About This Page</h2>
            <Routes>
                <Route path="/" element={<Hello />} />
                <Route path="/hello" element={<Hello2 />} />
                </Routes>
        <p id="sectionContent">This is a simple webpage with a header, navigation, content section, and footer. Some basic CSS styling is applied.</p>
    </div>
    </Router>

    <footer>
        <p>&copy; 2025 Simple Webpage. All rights reserved.</p>
    </footer>
    </div>
  );
}

export default App;
