import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchPage from "./SearchPage";
import  TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import Recommended from './Recommended';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Router>
     <Header/>
       <Switch>
         <Route path='/search/:searchTerm'>
         <div className='app_page'>
              <Sidebar/>
              {/* <SearchPage /> */}
              
              <div className='searchPage_filter'>
            <TuneOutlinedIcon />
            <h2>FILTER</h2>
            <h1>Search Page</h1>
            </div>
            
          </div>
          
          </Route>
          <Route path='/'>
          <div className='app_page'>
              <Sidebar/>
              <Recommended/>
              
          </div>
         
          </Route>
       </Switch>
     </Router>
   
    </div>
  );
}

export default App;
