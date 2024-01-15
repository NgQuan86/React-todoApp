import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from './Navigation/Nav';
import Home from './Home';
import {
  BrowserRouter, // router version 6 
  Routes,
  Route,

} from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/todo"  element={<ListTodo />} />
          </Routes>

        </header>


        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

      </div>
    </BrowserRouter>
  );
}

export default App;
