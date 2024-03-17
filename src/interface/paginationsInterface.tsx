export interface IPaginations<T>{
    total_pages:number,
    total_results:number,
    page:string,
    results:T[]
}