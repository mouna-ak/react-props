import React from 'react';
import Profile from './profile/profile';
import './App.css';


// Defining a functional component called App
function App() {
  const handleName = (name) => alert(`Hello, my name is ${name}`);

  // Rendering the App component JSX
  return (
    <div className="App">
      <Profile
        fullName="Akebli Mouna"
        bio="Hi, my name is Mouna Akebli, i'm a web developper."
        profession="Web Developer"
        handleName={handleName}
      >

        {/* Rendering an image as a child of the Profile component */}
        <img
          src={require('./profile/photo.png')}
          alt="Profile picture"
          style={{ borderRadius: '50%' }}
        />
      </Profile>
    </div>
  );
}

export default App;