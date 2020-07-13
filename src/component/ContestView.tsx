import React from "react";
import {List} from "immutable";

import {
    Table,
} from "reactstrap";

import Contest from "../interface/Contest";
import Problem from "../interface/Problem";



interface Props{
    contest:Contest,
    problems:List<Problem>
}


const ContestView:React.FC<Props>=(props)=>{
    let{
        contest,
         problems
    }=props;

    problems=problems.sort((a:Problem,b:Problem)=>(a.index<b.index?-1:1))

    return (
        <div>
            {contest.name}
            <Table bordered dark>
                <thead>
                    {
                        problems.toArray().map(problem=>(
                            <th key={problem.index}>
                                {problem.index}
                            </th>
                        ))
                    }
                </thead>
                <tbody>
                    <tr>
                        {
                            problems.toArray().map(problem=>(
                                <td key={problem.index}>
                                    {problem.name}
                                </td>
                            ))
                        }
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default ContestView;
