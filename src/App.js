import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

function Users() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, []);
  console.log(user);
  return (
    <div>
      {user.map(user =>
        <div className="user">
          <h1>Name: {user.name}</h1>
          <h2>Phone Number: {user.phone}</h2>
          <h3>Email: {user.email}</h3>
        </div>
      )}
    </div>
  )
}

export default App;
