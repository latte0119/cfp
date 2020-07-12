import {List} from "immutable";

export const fetchContests=()=>{
    return fetch(`https://codeforces.com/api/contest.list`)
    .then(res=>res.json())
    .then(json=>json.result)
    .then(arr=>List(arr));
}

export const fetchProblems=()=>{
    return fetch(`https://codeforces.com/api/problemset.problems`)
    .then(res=>res.json())
    .then(json=>json.result.problems)
    .then(arr=>List(arr));
}