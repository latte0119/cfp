import React from 'react';
import {connect,PromiseState} from 'react-refetch';
import Contest from '../interface/Contest';
//import * as MockServer from '../utility/MockServer';

interface OuterProps{
}

interface InnerProps extends OuterProps{
    contestsFetch:PromiseState<Contest[]>
}

const  InnerContestList:React.FC<InnerProps>=(props)=>{
    const {contestsFetch}=props;

    const contestList=contestsFetch.fulfilled
        ?contestsFetch.value
        :[];

    if(contestList.length===0){
        return <h1>pending</h1>;
    }

    return (
    <div>
        {contestList.map((contest:Contest)=><p key={contest.id}>{contest.name}</p>)}
    </div>
    )
}
export const ContestList=connect<OuterProps,InnerProps>((props)=>({
    contestsFetch:{
        comparison:null,
        value:fetch(`https://codeforces.com/api/contest.list`).then(res=>res.json()).then(json=>json.result)
        //value:MockServer.fetchContestList(),
    }
}))(InnerContestList);