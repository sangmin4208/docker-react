// This is a comment.
// This code imports the logo from the local file system and assigns it to the variable logo.
// This code also imports the CSS file for the app.
// The function App returns the code for the app, including the logo and the header.
// The default export is the app.
// The <code> tags are used to indicate that the text within them is code.

import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          I was changed!
        </a>
      </header>
    </div>
  )
}

export default App
