import logo from './logo.svg'
import './App.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './components/About'
import Nav from './components/Nav'
import Title from './components/content/Title'
import Poll from './components/questions/Poll'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
          <Nav />
          <Routes>
            <Route exact path='/' element={<About />} />
            <Route exact path='/poll' element={<Poll />} />
          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App
