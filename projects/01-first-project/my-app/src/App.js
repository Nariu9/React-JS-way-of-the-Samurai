import React from 'react';
import './App.css';



const App = () => {
  return (<div className='app-wrapper'>
    <header className='header'>
      <img src="https://www.pinclipart.com/picdir/big/24-240420_imagem-naruto-png-naruto-holding-a-kunai-clipart.png" alt="logo" />
    </header>
    <nav className='nav'>
      <div><a href="#">Profile</a></div>
      <div><a href="#">Messages</a></div>
      <div><a href="#">News</a></div>
      <div><a href="#">Music</a></div>
      <div><a href="#">Settings</a></div>
    </nav>
    <div className='content'>
      <div>
        <img src="https://cdn.pixabay.com/photo/2022/01/08/19/13/animal-6924664_960_720.jpg" alt="background_image" />
      </div>
      <div>
        <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="avatar" />
        <div>Description</div>
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  </div>);
}

export default App;