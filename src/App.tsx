import React from 'react';
import{
  Container
}from "reactstrap";
import NavigationBar from "./components/NavigationBar";
import {ContestTablePage} from './pages/ContestTablePage';

const App:React.FC=()=>{
  return (
    <div>
      <div className="sticky-top">
        <NavigationBar/>
      </div>
  
      <Container
        className="my-5"
        style={{width:"100%",maxWidth:"90%"}}
      >
        <ContestTablePage/>
      </Container>

    </div>
  );
}

export default App;

