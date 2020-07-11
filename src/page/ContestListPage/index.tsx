import React from 'react';
import {connect,PromiseState} from 'react-refetch';
import {List} from 'immutable';
import Contest from '../../interface/Contest';
import * as APIClient from '../../utility/APIClient';

interface OuterProps{
}

interface InnerProps extends OuterProps{
    contestsFetch:PromiseState<List<Contest>>
}

const  InnerContestListPage:React.FC<InnerProps>=(props)=>{
    const {contestsFetch}=props;

    const contestList=contestsFetch.fulfilled
        ?contestsFetch.value
        :List([])

    return (
    <div>
        <h1>contest list</h1>
        {contestList.toArray().map((contest:Contest)=>{
        return <p key={contest.id}>{contest.name}</p>;
        })}
    </div>
    )
}
export const ContestListPage=connect<OuterProps,InnerProps>((props)=>({
    contestsFetch:{
        comparison:null,
        value:APIClient.fetchContests()
    }
}))(InnerContestListPage);
