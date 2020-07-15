import React from "react";
import {List} from "immutable";

import {
    Table,
} from "reactstrap";

import Contest from "../../interfaces/Contest";
import Problem from "../../interfaces/Problem";



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
            <Table bordered dark responsive>
                <tbody>
                    <tr>
                        {
                            problems.toArray().map(problem=>(
                                <td key={problem.index}>
                                    {problem.index+". "+problem.name}
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
