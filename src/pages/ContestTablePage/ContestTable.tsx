import React from 'react';
import {Map,List} from 'immutable';

import Contest from '../../interfaces/Contest';
import Problem from '../../interfaces/Problem';

import {ContestCategory} from '../../utilities/ContestClassifier';

import ContestView from "./ContestView";

interface Props{
    contestCategory:ContestCategory,
    contests:List<Contest>
    contestIdToProblems:Map<number,List<Problem>>
}

const ContestTable:React.FC<Props>=(props)=>{
    const {
        contestCategory,
        contests,
        contestIdToProblems
    }=props;

    const title=(()=>{
        if(contestCategory==="CR")return "Codeforces Round";
        if(contestCategory==="CGR")return "Codeforces Global Round";
        if(contestCategory==="ECR")return "Educational Codeforces Round";
        return contestCategory;
    })();

    return (
        <div>
            <div className="my-4">
                <h1>{title}</h1>
            </div>
            {contests.toArray().map((contest)=>(
                <ContestView
                    key={contest.id}
                    contest={contest}
                    problems={contestIdToProblems.get(contest.id,List<Problem>())}
                />
            ))}
        </div>
    )
}

export default ContestTable;