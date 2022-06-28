import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login';
import { MetaApi } from './api';

function App() {
  const [status, setStatus] = useState('waiting');

  useEffect(() => {
    const token = localStorage.getItem('token');
    (async () => {
      const api = await MetaApi.getInstance();
      const result = await api.auth.restore({ token }).catch(() => {
        setStatus('error');
        return;
      });
      setStatus(result.status);
    })().catch((e) => console.log(e));
  });

  if (status === 'not logged') {
    return (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </Router>
        </div>
    );
  }

  if (status === 'logged') {
    return (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/mainPage" element={<>MAIN PAGE</>} />
              <Route path="*" element={<Navigate to="/mainPage" />} />
            </Routes>
          </Router>
        </div>
    );
  }
}

export default App;
