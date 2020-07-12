import React from 'react';
import {Map,List} from 'immutable';

import Contest from '../../interface/Contest';
import Problem from '../../interface/Problem';

import {ContestCategory} from '../../utility/ContestClassifier';

import ContestView from "../../component/ContestView";

interface Props{
    contestCategory:ContestCategory,
    contests:List<Contest>
    contestIdToProblems:Map<number,List<Problem>>
}

const ContestList:React.FC<Props>=(props)=>{
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
    });

    return (
        <div>
            <h1>{title}</h1>
            {contests.toArray().map((contest)=>(
                <ContestView
                    contest={contest}
                    problems={(():List<Problem>=>{
                        const ret=contestIdToProblems.get(contest.id);
                        if(ret!==undefined)return ret;
                        return List<Problem>([]);
                    })()}
                />
            ))}
        </div>
    )
}

export default ContestList;