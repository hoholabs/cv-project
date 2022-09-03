//import logo from './logo.svg';
import './App.css';
import PersonalInfo from './components/PersonalInfo'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div id="app">
      <PersonalInfo/>

      <Education/>

      <WorkExperience/>
    </div>
  );
}

export default App;
