import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Footer from './components/footer/footer';
import Courses from './components/Courses/Courses';
function App() {
  return (
    <>
     <Navbar/>
     <Landing/>
     <Courses/>
     <Footer/>
    </>
  );
}

export default App;
