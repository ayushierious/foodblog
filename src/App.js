import './App.css';
import Signup from './Components/auth/Signup'
import Signin from './Components/auth/Signin';
import AuthDetails from './Components/AuthDetails';
function App() {
  return (
    <div className="App">
      <Signin/>
      <Signup/>
      <AuthDetails/>
    </div>
  );
}

export default App;
