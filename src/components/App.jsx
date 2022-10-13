import SharedLayout from 'components/SharedLayout';
// import Home from 'page/Home';
// import Phonebook from 'page/Phonebook';
// import Login from 'page/Login';
// import Registration from 'page/Registration';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import Loader from 'components/Loader';
import { Box } from 'common/Box';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { fetchCurrentUser } from 'redux/authOperations';
import { GlobalStyle } from 'GlobalStyle';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('page/Home'));
const Phonebook = lazy(() => import('page/Phonebook'));
const Login = lazy(() => import('page/Login'));
const Registration = lazy(() => import('page/Registration'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Box position="relative" width={1} height={100} mt={6}>
      <Loader />
    </Box>
  ) : (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PublicRoute component={<Home />} />} />
          <Route
            path="phonebook"
            element={
              <PrivateRoute redirectTo="/login" component={<Phonebook />} />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute
                restricted
                redirectTo="/phonebook"
                component={<Login />}
              />
            }
          />
          <Route
            path="registration"
            element={
              <PublicRoute
                restricted
                redirectTo="/phonebook"
                component={<Registration />}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
}
