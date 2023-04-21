import { Global } from '@emotion/react'
import { Reset } from "./styles/Global/reset";
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <>
      <Global styles={ Reset }></Global>
      <Routes>
        <Route exact path="super/login" Component={Login} />
        <Route path="super/register" Component={Register} />
      </Routes>
    </>
  );
}

export default App;
