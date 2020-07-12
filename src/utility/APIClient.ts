import {List} from "immutable";

export const fetchContests=()=>{
    return fetch(`https://codeforces.com/api/contest.list`)
    .then(res=>res.json())
    .then(json=>{
        const arr=json.result;
        return List(arr);
    });
}

export const fetchProblems=()=>{
    return fetch(`https://codeforces.com/api/problemset.problems`)
    .then(res=>res.json())
    .then(json=>{
        const arr=json.result.problems;
        return List(arr);
    });

}