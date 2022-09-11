//import logo from './logo.svg';
import './App.css';
import PersonalInfo from './components/PersonalInfo'
import Education from './components/Education'
import Experience from './components/Experience';

function App() {
  return (
    <div id="app">
      
      <PersonalInfo/>
      <div className = 'divider'></div>
      <Education/>
      <div className = 'divider'></div>
      <Experience/>

    </div>
  );
}

export default App;
