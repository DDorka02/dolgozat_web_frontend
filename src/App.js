import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Public from './pages/Public';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout />}>
                  </Route>
                  <Route index element={<Public />}>
                  </Route>
              </Routes>
          </BrowserRouter>
          </div> 
  );
}

export default App;
