import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav_bar from './Components/Nav_bar/Nav_bar';
import Home from './Components/Home/Home';
import Menu_card from './Components/Menu Card/Menu_card';
import Food_items from './Components/Food Items/Food_items';


function App() {
  return (
    <Router>
      <Nav_bar/>
      <Routes>
        <Route index Component={Home} />
        <Route path='/menu' Component={Menu_card}/>
        <Route path='/fooditems/:name' Component={Food_items}/>
      </Routes>
    </Router>
  );
}

export default App;
