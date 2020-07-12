import React from 'react';
import{
  Container
}from "reactstrap";
import NavigationBar from "./component/NavigationBar";
import {ContestListPage} from './page/ContestListPage';

const App:React.FC=()=>{
  return (
    <div>
      <NavigationBar/>
      <Container
         style={{width:"100%",maxWidth:"90%"}}
      >
        <ContestListPage/>
      </Container>
    </div>
  );
}

export default App;

