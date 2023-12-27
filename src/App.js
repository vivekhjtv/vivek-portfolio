import { Outlet } from 'react-router-dom';
import './App.css';
import About from './components/About';
import ContactPage from './components/ContactPage';
import Header from './components/Header';
import Home from './components/Home';
import ProjectPage from './components/ProjectPage';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
