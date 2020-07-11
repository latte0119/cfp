import {List} from "immutable";

export const fetchContests=()=>{
    return fetch(`https://codeforces.com/api/contest.list`)
    .then(res=>res.json())
    .then(json=>json.result)
    .then(arr=>List(arr));
}