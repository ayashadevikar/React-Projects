import Card from './Card';
import './App.css';

function App() {
      let list = ["alex", "john", "daniel"]
  return (
       <>
         <h1>Hello</h1>
         <Card myname="alex" list={list}/>
       </>
  );
}

export default App;
