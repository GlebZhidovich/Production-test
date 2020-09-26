import React, {useState} from 'react';
import Auth from './componets/auth';
import List from './componets/list';
import './App.css';

function App() {
  const [isAuth, setAuth] = useState(false);

  function activeAuth() {
    setAuth(true);
  }

  return (
    <div className="app">
      {!isAuth ? <Auth activeAuth={activeAuth}/> : <List/>}
    </div>
  );
}

export default App;
