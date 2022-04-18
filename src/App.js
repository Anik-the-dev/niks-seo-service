import logo from './logo.svg';
import './css/style.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import CheckOUt from './components/CheckOut/CheckOUt';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className='body'>
      <Header></Header>
      <Routes>
        <Route  path='/' element={<Home/>}></Route>
        <Route  path='/home' element={<Home/>}></Route>
        <Route  path='/blog' element={<Blog/>}></Route>
        <Route  path='/about' element={<About/>}></Route>
        <Route  path='/services' element={<Services/>}></Route>
        <Route  path='/login' element={<Login/>}></Route>
        <Route  path='/signup' element={<SignUp/>}></Route>
        <Route  path='/checkout' element={<RequireAuth><CheckOUt></CheckOUt></RequireAuth>}></Route>
        <Route  path='*' element={<NotFound/>}></Route>

      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
