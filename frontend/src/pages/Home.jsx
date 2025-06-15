import React from 'react';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        <h2>Welcome to the CRUD Application</h2>
        <p>
          This app mainly focuses on backend development. The frontend is kept minimal intentionally, and no CSS styling has been added beyond basic layout and navigation.
        </p>
        <p>
          You can upload, view, update, and delete products using the provided interfaces.
        </p>

        <h3> Other Projects</h3>
        <p>
          <b>Feel free to check out my other projects where I have implemented full frontend and backend integration with responsive design:</b>
        </p>
        <ul>
          <li>
            <a href="https://github.com/AbdurrahmanDevGithub/career_platform.git" target="_blank" rel="noopener noreferrer">
              CAREER PORTAL - Full Stack individual project (Node + Express + MongoDB + React)
            </a>
          </li>
          <li>
            <a href="https://github.com/AbdurrahmanDevGithub/learning-platform.git" target="_blank" rel="noopener noreferrer">
              LEARNING PLATFORM - My contribution is Backend (Node + Express + MongoDB)
            </a>
          </li>
          <li>
            <a href="https://github.com/AbdurrahmanDevGithub" target="_blank" rel="noopener noreferrer">
              My GitHub account - See all my individual and group projects
            </a>
          </li>
        </ul>

        <p>
          Thanks for visiting! If you want to contribute or have questions, feel free to contact me.
        </p>
        <br />
        <p><b>Phone:</b> 076 6735727</p>
        <p><b>Email:</b> arhmn1905@gmail.com</p>
      </div>
    </div>
  );
};

export default Home;
