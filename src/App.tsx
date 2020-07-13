import React from 'react';
import{
  Container
}from "reactstrap";
import NavigationBar from "./component/NavigationBar";
import {ContestListPage} from './page/ContestListPage';

const App:React.FC=()=>{
  return (
    <div>
      <div className="sticky-top">
        <NavigationBar/>
      </div>
  
      <Container
        className="my-5"
        style={{width:"100%",maxWidth:"95%"}}
      >
        <ContestListPage/>
      </Container>

    </div>
  );
}

export default App;

