import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages';
// import { useEffect } from 'react';
// import { fetchCurrency } from './scripts/requets/currency';
export const App = () => {

  // useEffect(()=>{
  //     const validData = fetchCurrency()
  // },[])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};
