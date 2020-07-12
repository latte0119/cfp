import Contest from "../interface/Contest";

export const ContestCategories=[
    "CR",
    "CGR",
    "ECR",
    "Other Rated Contests",
    "Other Contests",
]as const;
export type ContestCategory=typeof ContestCategories[number];

export const classifyContest=(contest:Contest):ContestCategory=>{
    if(/^Educational Codeforces Round/.test(contest.name))return "ECR";
    if(/^Codeforces Global Round/.test(contest.name))return "CGR";
    if(/Codeforces Round|Codeforces Beta Round|Codeforces Alpha Round/.test(contest.name))return "CR";
    if(
        /^(VK Cup|AIM Tech|CodeCraft|Technocup|Ozon Tech|Hello|Good Bye|8VC|Bubble Cup|Intel|IndiaHacks|Wunder|Manthan)/.test(contest.name)
    )return "Other Rated Contests";
    return "Other Contests";
}
