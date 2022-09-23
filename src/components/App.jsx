import { GlobalStyle } from 'GlobalStyle';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from 'page/Home';

export function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
