export default interface Contest{
    readonly id:number,
    readonly name:string,
    readonly durationSeconds:number,
    readonly startTimeSeconds:number|null,
    readonly phase:string
}