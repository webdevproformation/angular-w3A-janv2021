export interface FilmInterface{
    id : number,
    nom : string,
    description : string
}

export class FilmsService{
    getFilms() : Array<FilmInterface>{
        return [
            { id : 1 , nom : "Terminator" , description: "lorem ipsum"},
            { id : 2 , nom : "Prédator" , description: "lorem ipsum"},
            { id : 3 , nom : "2001 Odyssée espace" , description: "lorem ipsum"}
        ]
    }
}