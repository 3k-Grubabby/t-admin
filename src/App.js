import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Login from './components/Login/index'
import Nav from './components/Nav/index'

import {useSelector,useDispatch} from 'react-redux'
import {login} from './actions'


function App() {
  const isLogged = useSelector(state=>state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
          {isLogged ? <Nav /> : <Login /> }
    </div>
  );
}

export default App;
