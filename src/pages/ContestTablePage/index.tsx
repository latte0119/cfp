import React ,{useState} from 'react';
import {connect,PromiseState} from 'react-refetch';
import {List,Map} from 'immutable';

import Contest from '../../interfaces/Contest';
import Problem from '../../interfaces/Problem';
import {ContestCategory,ContestCategories, classifyContest} from '../../utilities/ContestClassifier';

import ContestTable from './ContestTable';
import ContestCategorySelectionBar from './ContestCategorySelectionBar';


import * as APIClient from '../../utilities/APIClient';

interface OuterProps{
}

interface InnerProps extends OuterProps{
    contestsFetch:PromiseState<List<Contest>>
    problemsFetch:PromiseState<List<Problem>>
}

const  InnerContestTablePage:React.FC<InnerProps>=(props)=>{
    const {
        contestsFetch,
        problemsFetch
    }=props;

    const [selectedCategory,setSelectedCategory]=useState<ContestCategory>(ContestCategories[1]);


    const contests=contestsFetch.fulfilled
        ?contestsFetch.value.filter(contest=>(contest.phase==="FINISHED"))
        :List([])

    const problems=problemsFetch.fulfilled
        ?problemsFetch.value
        :List([])


    let contestIdToProblems=Map<number,List<Problem>>()
    problems.forEach(problem=>{
        if(contestIdToProblems.has(problem.contestId)){
            contestIdToProblems=contestIdToProblems.update(problem.contestId,list=>list.push(problem))
        }
        else{
            contestIdToProblems=contestIdToProblems.set(problem.contestId,List<Problem>([problem]));
        }
    })

    const filteredContests=contests.filter(contest=>(classifyContest(contest)===selectedCategory));

    return (
        <div>
        <ContestCategorySelectionBar {...{selectedCategory,setSelectedCategory}}/>
        <ContestTable
            contestCategory={selectedCategory}
            contests={filteredContests}
            contestIdToProblems={contestIdToProblems}
        />
        </div>
    )
}  

export const ContestTablePage=connect<OuterProps,InnerProps>((props)=>({
    contestsFetch:{
        comparison:null,
        value:APIClient.fetchContests()
    },
    problemsFetch:{
        comparison:null,
        value:APIClient.fetchProblems()
    }
}))(InnerContestTablePage);
