import Contest from "../interface/Contest";

export const fetchContestList=():Contest[]=>{
    return [
        {
            id:0,
            name:"uku contest 1",
            durationSeconds:3600,
            startTimeSeconds:null,
        },
        {
            id:1,
            name:"uku contest 2",
            durationSeconds:3600,
            startTimeSeconds:null,
        }
    ]
}