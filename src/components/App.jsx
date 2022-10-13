import SharedLayout from 'components/SharedLayout';
import Home from 'page/Home';
import Phonebook from 'page/Phonebook';
import Login from 'page/Login';
import Registration from 'page/Registration';
import { GlobalStyle } from 'GlobalStyle';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="phonebook" element={<Phonebook />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}
