import './App.css';
import Home from './components/Auth/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import NutritionEstimator from './components/pages/NutritionEstimator';
import { Route, createBrowserRouter, createRoutesFromElements,Routes, RouterProvider, BrowserRouter } from 'react-router-dom';
import Protected from './Protected';
import Dashboard from './components/pages/DashBoard';
import Meditation from './components/pages/Meditation';
import { ChakraProvider } from "@chakra-ui/react";
// import Pomodoro from './components/pages/Pomodoro';
// function App() {
// return (
// <div className="App">
{/* <header className="App-header"> */ }
{/* <img src={logo} className="App-logo" alt="logo" /> */ }
{/* <p> */ }
{/* Edit <code>src/App.js</code> and save to reload. */ }
{/* </p> */ }
{/* <a */ }
// className="App-link"
// href="https://reactjs.org"
// target="_blank"
// rel="noopener noreferrer"
// >
{/* Learn React */ }
{/* </a> */ }
{/* </header> */ }
{/* </div> */ }
// );
// }
// 
// export default App;


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/profile/Nutrition' element={<NutritionEstimator />}></Route>
            <Route path='/profile/Meditation' element={<Meditation/>}></Route>
            <Route path='/profile' element={<Protected><Dashboard /></Protected>}></Route>
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
