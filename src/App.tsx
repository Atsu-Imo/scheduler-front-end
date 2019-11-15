import React from 'react';
import './App.css';
import { NavBar } from './NavBar';


const App: React.FC = () => {
  return (
    <NavBar/>
  );
};

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
