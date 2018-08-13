import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'> Checkerboard App </h1>
  </header>
)

const Main = (props) => (
  <div className='main'>

    

  </div>
)

const Menu = () => (
  <div className='menu'>

      

  </div>
)

class CheckerboardApp extends Component {
  
  state = {
    
  }



  componentDidMount() {
    
  

  }


      render () {
    return (
      <div className='App-container'>

        <Menu />
        <Main />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <CheckerboardApp />

  </div>
)

export default App

