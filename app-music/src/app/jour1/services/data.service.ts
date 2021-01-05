export interface Client{
    id : number , 
    nom : string, 
    adresse : string
}

export class DataService {
    getData() : Array<Client>{
        return [
            {
                id : 1,
                nom : "Alain",
                adresse : "75 rue du Paradis Paris"
            },
            {
                id : 1,
                nom : "Charles",
                adresse : "77 rue du Paradis Paris"
            }
        ]
    }
};
