//import logo from './logo.svg';
import './App.css';
import PersonalInfo from './components/PersonalInfo'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className="App">
      <PersonalInfo/>
      {/* <h1>Education</h1> */}
      <Education/>
      <h1>Experience</h1>
      <WorkExperience/>
    </div>
  );
}

export default App;
