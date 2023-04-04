// Importing React and PropTypes modules
import React from 'react';
import PropTypes from 'prop-types';
// Declaring a functional component called Profile that receives props as an object
const Profile = ({ fullName, bio, profession, handleName, children }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      {children}
      <h2 style={{ color: 'black' }}>Full Name: {fullName}</h2>
      <h3 style={{ fontStyle: 'italic' }}>Profession: {profession}</h3>
      <p>Bio: {bio}</p>
      <button onClick={() => handleName(fullName)}>Click me</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: 'Akebli Mouna',
  profession: 'Uweb developper',
  bio: 'Hi, my name is Mouna Akebli',
};

// define Types of value and if it's required

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

// Exporting the Profile component as the default export of this module
export default Profile;