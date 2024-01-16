import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from './Navigation/Nav';
import Home from './Home';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';
import { BrowserRouter, Routes, Route, } from "react-router-dom";  // router version 6

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            
              <Route path="/" element={<Home />} />
              <Route path="/ListTodo" element={<ListTodo />} />
              <Route path="/user" element={<ListUser />} />
              <Route path="/user/:id" element={<DetailUser />} />
            
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
