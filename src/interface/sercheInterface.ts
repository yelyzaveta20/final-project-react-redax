export interface ISerches{
    page:number,
    results:ISerche[],
    total_pages:number,
    total_results:number
}
export interface ISerche{
    id:number,
    name:string
}