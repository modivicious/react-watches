import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";

import App from './App'

import "../scss/style.scss"

ReactDOM.render(
  <Router basename={process.env.NODE_ENV === 'production' ? '/react-watches' : ''}>
    <App />
  </Router>,
  document.getElementById('root')
)