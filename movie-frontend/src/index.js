import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'

import './style.css'
import Book from './views/book'
import Home from './views/home'
import Izdvojeno from './views/izdvojeno'
import Kontakt from './views/kontakt'
import Login from './views/login'
import Movie from './views/movie'
import Movies from './views/movies'
import Profile from './views/profile'

const App = () => {

  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact component={Home} path="/" />
          <Route exact component={Movies} path="/movies" />
          <Route exact component={Movies} path="/movies/:genre" />
          <Route exact component={Movie} path="/movie/:id" />
          <Route exact component={Book} path="/book/:id" />
          <Route exact component={Izdvojeno} path="/izdvojeno" />
          <Route exact component={Login} path="/login" />
          <Route exact component={Profile} path="/profile" />
          <Route exact component={Kontakt} path="/kontakt" />
        </div>
      </Router>
    </AuthProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
