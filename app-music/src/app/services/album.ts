export class Album {
    id: string ;
    ref: string;
    name: string;
    title : string;
    description: string;
    duration: number;
    status : string;
    url? : string;
    tags? : Array<string>;
    like? : string;
}
