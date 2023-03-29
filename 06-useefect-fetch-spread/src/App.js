import './App.css';
import './components/shared/CardComponent/CardComponent.css'
import ChallengeJokeComponent from './components/ChallengeComponents/ChallengeJokeComponent.jsx'

function App() {
  return (
    <>
      <h1>UseEffect, Fetch and Spread Operator</h1>
      <div className="subcontainer">
        <h3 className="text-description">1) Consume the indicated Public API and represent the data through a new component, 
          control the requests through the Hook: useEffect.<br/>Assign a state to the button to make a new request and change the 
          information represented in the component.
        </h3>
        <ChallengeJokeComponent />
      </div>
      
    </>
  );
}

export default App;
