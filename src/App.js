import React from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Forecast from './components/forecast';
import Today from './components/today';
import Week from './components/week';
import Month from './components/month';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element = {<Forecast />}></Route>
      <Route path ="/today" element = {<Today />}></Route>
      <Route path ="/week" element = {<Week />}></Route>
      <Route path ="/month" element = {<Month />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
