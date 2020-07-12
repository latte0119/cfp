import React from "react";
import {List} from "immutable";

import {
    Row,
    Col,
    Table,
} from "reactstrap";

import Contest from "../interface/Contest";
import Problem from "../interface/Problem";



interface Props{
    contest:Contest,
    problems:List<Problem>
}


const ContestView:React.FC<Props>=(props)=>{
    const{
        contest,
        problems
    }=props;

    return (
        <div>
            <h1>{contest.name}</h1>
            <Table>
                <Row>
                    {
                        problems.toArray().map(problem=>(
                            <Col key={problem.index}>
                                <p>{problem.name}</p>
                            </Col>
                        ))
                        
                    }
                </Row>
            </Table>
        </div>
    )
}

export default ContestView;
